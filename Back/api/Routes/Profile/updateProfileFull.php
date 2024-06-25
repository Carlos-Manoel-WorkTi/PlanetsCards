<?php
// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once('../../Banco_de_dados/connect/index.php');
require_once('../../Banco_de_dados/create_Tables/tables.php'); 
require_once('../../Helpers/Level/progress.php');
require_once('../../Helpers/Level/update.php');

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
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
            // Get JSON data from request body
            $data = json_decode(file_get_contents('php://input'), true);

            // Initialize response array
            $response = array();
            
            // Extract data fields
            $photo = isset($data['photo']) ? trim($data['photo']) : '';
    
            if (empty($photo)) {
                $response = array('error' => "Falha");
                echo json_encode($response);
                return;
            }

            // Decode the Base64 string
            $photo_data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $photo));

            // Set the file path and name
            $file_path = './../../../../Front/public/uploads/';
            $file_name = uniqid() . '.png'; // You can change the extension based on the image type
            $full_path = $file_path . $file_name;

            // Check if the directory exists, if not create it
            if (!is_dir($file_path)) {
                mkdir($file_path, 0777, true);
            }

            // Save the file
            if (!file_put_contents($full_path, $photo_data)) {
                $response = array('error' => 'Failed to save the image');
                echo json_encode($response);
                return;
            }

            // Get the id_user associated with the token
            $stmt_token->bind_result($id_user);
            $stmt_token->fetch();
            $stmt_token->close();
            
            // Prepare a statement
            $stmt = $connect->prepare("UPDATE users SET photo = ? WHERE id_user = ?");

            // Bind the parameters
            $stmt->bind_param("si", $full_path, $id_user);
            $stmt->execute();
                    
            if ($stmt->affected_rows > 0) {
                // Query was successful
                $response = array(
                    'photo' => $full_path,
                    'status' => "ok",
                );
                echo json_encode($response);
            } else {
                // Query failed
                $response = array('error' => 'Failed to update photo');
                echo json_encode($response);
            }
            
            // Close the statement
            $stmt->close();
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
