<?php 
function generateHash($password) {
    $options = [
      'cost' => 12, 
    ];
    return password_hash($password, PASSWORD_BCRYPT, $options);
  }
  
  // Função para verificar a senha do usuário
function verifyPassword($password, $hashedPassword) {
    return password_verify($password, $hashedPassword);
  }

function GenerateToken($key,$email,$id_user){
      $numero_aleatorio = rand(1, 100);
        $combined = $email . $id_user. $key . $numero_aleatorio;
        $tk = hash('sha256', $combined);
        return $tk;
    }
?>