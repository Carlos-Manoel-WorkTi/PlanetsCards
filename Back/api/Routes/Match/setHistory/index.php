<?php
// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Include necessary files
require_once("C:\wamp64\www\PLC\Back\api\Banco_de_dados\connect\index.php");

require_once("C:\wamp64\www\PLC\Back\api\Helpers/hash/index.php");
require_once("C:\wamp64\www\PLC\Back\api\Helpers/CountXp/index.php");
require_once("C:\wamp64\www\PLC\Back\api\Helpers/Level/update.php");
require_once("C:\wamp64\www\PLC\Back\api\Banco_de_dados/queries\match\index.php");

// Check if the request type is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Check if there's an authorization token
    $headers = getallheaders();

    // Check if the Authorization header exists
    if (!isset($headers['Authorization'])) {
        echo json_encode(array('error' => 'Header \'Authorization\' not found.'));
        return;
    }
    
    // Extract the bearer token
    $bearerToken = explode(' ', $headers['Authorization'])[1] ?? '';

    // Extract and deserialize the JSON data from the request body
    $requestBody = file_get_contents('php://input');
    $requestData = json_decode($requestBody, true);

    // Check the tokens table to validate the bearer token  
    $bearerToken = mysqli_real_escape_string($connect, $bearerToken); 
    $query = "SELECT id_user FROM tokens WHERE token = '$bearerToken' ";
    $result = mysqli_query($connect, $query);

    // If the token is valid, proceed to save data and return the saved data
    if ($result && mysqli_num_rows($result) > 0) {
        $userData = mysqli_fetch_assoc($result);
        $userId = $userData['id_user'];

        // Extract data from the request and save it in the database
        $rest_life = $requestData['rest_life'] ?? null;
        $total_lives = $requestData['total_lives'] ?? null;
        $rest_time = $requestData['rest_time'] ?? null;
        $total_time = $requestData['total_time'] ?? null;
        $difficult = $requestData['difficult'] ?? null;

        $xp = intval(calcular_xp($rest_life, $total_lives,$rest_time ,$total_time,$difficult));
        // echo $xp;
        // die();
        // Update the account
        $new_level = updateLevel($connect,$xp,$userId);

        $insertResult = updateHistory($connect,$userId, $xp, $rest_life,$total_lives, $rest_time,$total_time, $difficult);

        // Check if the data was successfully saved
        if ($insertResult) {
            // Return the saved data
            $savedData = array(
                'id_user' => $userId,
                'xp' => $xp,
                'rest_life' => $rest_life,
                'total_lives' => $total_lives,
                'rest_time' => $rest_time,
                'total_time' => $total_time,
                'difficulty' => $difficult,
                "new_level" => $new_level['status']
            );
            echo json_encode($savedData);
        } else {
            // Return an error message if data saving failed
            echo json_encode(array('error' => 'Failed to save data.'));
        }
    } else {
        // Return an error message if the token is invalid or expired
        echo json_encode(array('error' => 'Invalid or expired token.'));
    }
} else {
    // Return an error message if the request method is not POST
    echo json_encode(array('error' => 'Only POST requests are allowed.'));
}
?>
