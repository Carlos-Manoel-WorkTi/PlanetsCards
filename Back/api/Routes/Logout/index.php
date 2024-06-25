<?php

// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once('../../Banco_de_dados/connect/index.php');
require_once('../../Banco_de_dados/queries/logout/DeleteToken.php');

// Check if the request method is GET
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Get the Bearer token from the request headers
    $bearer_token = isset($_SERVER['HTTP_AUTHORIZATION']) ? trim($_SERVER['HTTP_AUTHORIZATION']) : '';
    // Check if there's an authorization token
    $headers = getallheaders();

    // Check if the Authorization header exists
    if (!isset($headers['Authorization'])) {
        echo json_encode(array('error' => 'Header \'Authorization\' not found.'));
        return;
    }
    
    // Extract the bearer token
    $token = explode(' ', $headers['Authorization'])[1] ?? '';

    // Check if the Bearer token exists
    if ($token) {

        // Call the deleteToken function to delete the token
        $token_deleted = deleteToken($connect, $token);

    
        if ($token_deleted) {
            $response = array('success' => true, 'message' => 'Logout successful');
            echo json_encode($response);
        } else {
            $response = array('success' => false, 'message' => 'Failed to logout');
            echo json_encode($response);
        }
    } else {
        // Bearer token not provided or invalid format
        $response = array('success' => false, 'message' => 'Bearer token not provided or invalid format');
        echo json_encode($response);
    }
} else {
    // Invalid request method
    $response = array('success' => false, 'message' => 'Invalid request method');
    echo json_encode($response);
}

?>
