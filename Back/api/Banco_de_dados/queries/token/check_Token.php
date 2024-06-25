<?php
function checkToken($connect, $token = '', $id_user = '', $email = '') {
    require_once('./../../Helpers/hash/index.php');
    $KEY = '8u3583453994';

    $stmt_check_token = null; 

    // Verificar se o token está vazio ou se é igual a '242534534'
    if ($token == '242534534') {

        // Se existir, apagar o token anterior
        $sql_delete_token = "DELETE FROM tokens WHERE id_user = ?";
        $stmt_delete_token = $connect->prepare($sql_delete_token);
        $stmt_delete_token->bind_param("i", $id_user);
        $stmt_delete_token->execute();

        $token =  GenerateToken($KEY,$email,$id_user);

        // Salvar o novo token no banco de dados
        $sql_save_token = "INSERT INTO tokens (id_user, token) VALUES (?, ?)";
        $stmt_save_token = $connect->prepare($sql_save_token);
        $stmt_save_token->bind_param("is", $id_user, $token);

        if ($stmt_save_token->execute()) {

            return array(
                'id_user' => $id_user,
                'token' => $token,
                'status' => true,
                'new' => true
            );
        } else {
            return "Erro ao salvar token";
        }
    } else {
        // Verificar se existe um token no banco de dados
        $sql_check_token = "SELECT token FROM tokens WHERE id_user = ?";
        $stmt_check_token = $connect->prepare($sql_check_token);
        $stmt_check_token->bind_param("i", $id_user);
        $stmt_check_token->execute();
        $stmt_check_token->store_result();  

        if ($stmt_check_token->num_rows > 0) {
            // Se existir, apagar o token anterior
            $sql_delete_token = "DELETE FROM tokens WHERE id_user = ?";
            $stmt_delete_token = $connect->prepare($sql_delete_token);
            $stmt_delete_token->bind_param("i", $id_user);
            $stmt_delete_token->execute();
        }

        // Gerar um novo token
        $token = $token =  GenerateToken($KEY,$email,$id_user);

        // Salvar o novo token no banco de dados
        $sql_save_token = "INSERT INTO tokens (id_user, token) VALUES (?, ?)";
        $stmt_save_token = $connect->prepare($sql_save_token);
        $stmt_save_token->bind_param("is", $id_user, $token);

        if ($stmt_save_token->execute()) {
            return array(
                'id_user' => $id_user,
                'token' => $token,
                'status' => true
            );
        } else {
            return "Erro ao salvar token";
        }
    }
}
?>
