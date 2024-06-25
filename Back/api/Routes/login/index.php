<?php

// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// IMPORTS
require_once('../../Banco_de_dados/connect/index.php');
require_once('../../Banco_de_dados/queries/login/verify_Inf_User.php');
require_once('../../Banco_de_dados/queries/login/get_User.php');
require_once('../../Banco_de_dados/create_Tables/tables.php');
require_once('../../Banco_de_dados/queries/token/check_Token.php');


// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === "POST") {
    // Read data from the request body
    $data = file_get_contents('php://input');
    // Convert the data from JSON to an associative array
    $data_array = json_decode($data, true);
    
    // Save the values
    $email = $data_array['email'];
    $password = $data_array['password'];
    // // Check if there's a authorization token
    $headers = getallheaders();

    // Verificar se o header Authorization existe
    if (!isset($headers['Authorization'])) {
        echo "Header 'Authorization' não encontrado.";
        return;
    }
    
    // Extrair o token bearer
    $token = explode(' ', $headers['Authorization'])[1] ?? '242534534';
    
    
    checkData($connect,$email,$password);


    // Check if there's a user in the bank
    $result_Of_User = getUser($connect,$email,$password);

    if(!empty($result_Of_User)){
        $tk_validate = checkToken($connect,$token,$result_Of_User['id_user'],$email);
        echo json_encode($tk_validate);
    }


} else {
    // Return an error message if the request method is not POST
    echo 'Sorry, something is wrong';
}
?>
