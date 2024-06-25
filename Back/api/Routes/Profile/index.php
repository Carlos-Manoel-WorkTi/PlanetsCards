<?php 
// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once('../../Banco_de_dados/connect/index.php');
require_once('../../Banco_de_dados/create_Tables/tables.php'); 
require_once('../../Helpers/Level/progress.php');
require_once('../../Helpers/Level/update.php');

// Check if the request method is GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Get the token code from the Authorization header
    $headers = apache_request_headers();
    $authorizationHeader = isset($headers['Authorization']) ? $headers['Authorization'] : '';
    
    // Check if the Authorization header is present and has a Bearer token
    if (strpos($authorizationHeader, 'Bearer') !== false) {
        // Extract the token from the Authorization header
        $token = str_replace('Bearer ', '', $authorizationHeader);

        // Query the token in the tokens table
        $query_token = "SELECT id_user FROM tokens WHERE token = ?";
        $stmt_token = $connect->prepare($query_token);
        $stmt_token->bind_param("s", $token);
        $stmt_token->execute();
        $stmt_token->store_result();

        // Check if the token exists
        if ($stmt_token->num_rows > 0) {
            // Get the id_user associated with the token
            $stmt_token->bind_result($id_user);
            $stmt_token->fetch();
            $stmt_token->close();

            $inf_history = updateLevel($connect,0,$id_user);
            // Query the account table to get user details
            $query_account = "SELECT level,xp,nick FROM account WHERE id_user = ?";
            $stmt_account = $connect->prepare($query_account);
            $stmt_account->bind_param("i", $id_user);
            $stmt_account->execute();
            $stmt_account->bind_result($level, $xp, $nick);
            $stmt_account->fetch();
            $stmt_account->close();
            
            // Get the user photo
            $Userinf = $connect->query("SELECT name,photo,email FROM users WHERE id_user = $id_user");
            $Userinf = $Userinf->fetch_assoc();
            
            // Get the % of the level
            $resp = calculateTotalProgressPercentage( $inf_history['current_level'],$inf_history['next_level'], $xp);
            $progressPercentage = $resp['progress'];
        
      
        
            // Return user details in JSON format
            $response = array(
                'id_user' => $id_user,
                'name' => $Userinf['name'],
                'level' => $level,
                "email" => $Userinf['email'],
                'xp' => $xp,
                'progress' => $progressPercentage,
                'nick' => $nick,
                'photo' => $Userinf['photo'],
                'sign' => true
            );
            echo json_encode($response);
        } else {
            // Token not found
            $response = array('error' => 'Token not found');
            echo json_encode($response);
        }
    } else {
        // Bearer token not present in Authorization header
        $response = array('error' => 'Bearer token missing');
        echo json_encode($response);
    }
} else {
    // Invalid request method
    $response = array('error' => 'Invalid request method');
    echo json_encode($response);
}
?>
