<?php

// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once('../../Banco_de_dados/connect/index.php');
require_once('../../Banco_de_dados/create_Tables/tables.php');
require_once('C:\wamp64\www\PLC\Back\api\Helpers\hash\index.php');

// Check if request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON data from request body
    $data = json_decode(file_get_contents('php://input'), true);

    // Initialize response array
    $response = array();

    // Extract data fields
    $name = isset($data['name']) ? trim($data['name']) : '';
    $email = isset($data['email']) ? trim($data['email']) : '';
    $password = isset($data['password']) ? generateHash($data['password']) : '';
    $photo = isset($data['photo']) ? trim($data['photo']) : 'https://i.pinimg.com/736x/fa/ea/13/faea13e1a020927cdc98f5e1d43f76ea.jpg';
    $tel = isset($data['tel']) ? trim($data['tel']) : '';
    $gender = isset($data['gender']) ? trim($data['gender']) : '';
 
    // Check name field
    if (empty($name)) {
        $response['name'] = 'Field "name" is required';
    } else {
        $response['name'] = true;
    }

    // Check email field
    if (empty($email)) {
        $response['email'] = 'Field "email" is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['email'] = 'The provided email is not valid';
    } else {
        try {
            // Check if the email already exists
            $stmt_check_email = $connect->prepare("SELECT COUNT(*) FROM users WHERE email = ?");
            $stmt_check_email->bind_param("s", $email);
            $stmt_check_email->execute();
            $stmt_check_email->bind_result($count);
            $stmt_check_email->fetch();
            $stmt_check_email->close();

            if ($count > 0) {
                $response['email'] = 'The provided email is already registered';
            } else {
                $response['email'] = true;
            }
        } catch (mysqli_sql_exception $e) {
            $response['email'] = 'Error occurred while checking the email';
        }
    }

    // Check password field
    if (empty($password)) {
        $response['password'] = 'Field "password" is required';
    } else {
        $response['password'] = true;
    }

    // Check tel field
    if (empty($tel)) {
        $response['tel'] = 'Field "tel" is required';
    } else {
        $response['tel'] = true;
    }

    // Check gender field
    if (empty($gender)) {
        $response['gender'] = 'Field "gender" is required';
    } else {
        $response['gender'] = true;
    }

    // Check if there are any errors
    $errors = array_filter($response, function ($value) {
        return $value !== true;
    });


    // Função para gerar uma string aleatória
    function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, strlen($characters) - 1)];
        }
        return $randomString;
    }


    // If there are no errors, set status to true and insert data into database
    if (empty($errors)) {
        try {
            // Insert the user
            $stmt_insert_user = $connect->prepare("INSERT INTO users (name, email, password, photo, tel, gender) VALUES (?, ?, ?, ?, ?, ?)");
            $stmt_insert_user->bind_param("ssssss", $name, $email, $password, $photo, $tel, $gender);
            $stmt_insert_user->execute();
            $inserted_user_id = $stmt_insert_user->insert_id; // Get the ID of the inserted user
            $stmt_insert_user->close();

            // Insert the account for the user
            $default_xp = 0;
            $random_nick = generateRandomString(10); // Function to generate random string, you need to define this function
            $stmt_insert_account = $connect->prepare("INSERT INTO account (id_user, xp, nick) VALUES (?, ?, ?)");
            $stmt_insert_account->bind_param("iis", $inserted_user_id, $default_xp, $random_nick);
            $stmt_insert_account->execute();
            $stmt_insert_account->close();

            $response['status'] = true;
        } catch (mysqli_sql_exception $e) {
            $response['status'] = false;
            $response['error'] = 'Error occurred while registering the user';
        }
    } else {
        $response['status'] = false;
        $response['error'] = 'Some fields are missing or invalid';
    }

    // Output the response as JSON
    echo json_encode($response);
} else {
    // Invalid request method
    $response = array('status' => false, 'error' => 'Invalid request method');
    echo json_encode($response);
}

?>
