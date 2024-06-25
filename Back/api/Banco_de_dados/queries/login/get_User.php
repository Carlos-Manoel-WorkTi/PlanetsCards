<?php 
require_once('./../..//Helpers/hash/index.php');

function getUser($connect, $email, $password) {
    // Consulta SQL com consultas preparadas para evitar injeção de SQL
    $sql_Get_User = "SELECT u.id_user, u.email, u.password, a.sign FROM users u JOIN account AS a ON a.id_user = u.id_user WHERE email = ?";
    $stmt = $connect->prepare($sql_Get_User);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result_Of_GetUser = $stmt->get_result();

    // Verificar se encontrou algum usuário
    if ($result_Of_GetUser->num_rows > 0) {
        // Loop através dos resultados
        while ($row = $result_Of_GetUser->fetch_assoc()) {
            // Verificar se a senha fornecida corresponde ao hash no banco de dados
            if (verifyPassword($password, $row['password'])) {
                // Se a senha estiver correta, retornar os dados do usuário
                return array(
                    'id_user' => $row['id_user'],
                    'email' => $row['email'],
                    'sign' => $row['sign']
                );
            }
        }
    }

    // Se não encontrou nenhum usuário ou a senha estava incorreta, retornar uma mensagem de erro
    die(json_encode(array(
        'msg' => "Email or password incorrect",
        'status' => false
    )));
}
