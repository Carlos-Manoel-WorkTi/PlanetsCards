<?php


require('../../../api/Banco_de_dados/connect/index.php');


$USERS = "CREATE TABLE IF NOT EXISTS users (
  id_user INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR(100) NOT NULL,                        
  email VARCHAR(105) NOT NULL UNIQUE,                
  password VARCHAR(105) NOT NULL,                      
  photo VARCHAR(300) DEFAULT NULL,                   
  tel INT DEFAULT NULL,                              
  gender varchar(20) NOT NULL,       
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);";


$TOKENS = " CREATE TABLE IF NOT EXISTS tokens (
  id_tk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_user INT NOT NULL,
  time_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  token VARCHAR(255) NOT NULL,
  FOREIGN KEY (id_user) REFERENCES users(id_user)
);";

$ACCOUNT = "CREATE TABLE IF NOT EXISTS account (
  id_acc INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_user INT NOT NULL,
  level INT NOT NULL DEFAULT 0,
  xp INT NOT NULL,
  nick VARCHAR(20) NOT NULL,
  time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  sign BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (id_user) REFERENCES users(id_user)
);";

$HISTORYMATCH = "CREATE TABLE IF NOT EXISTS historyMatch (
  id_match INT AUTO_INCREMENT PRIMARY KEY,
  id_user INT,
  xp INT,
  rest_life INT,
  total_lives INT,
  rest_time INT,
  total_time INT,
  time INT,
  difficult VARCHAR(20) NOT NULL,
  time_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)";


$connect->query($USERS);
$connect->query($TOKENS);
$connect->query($ACCOUNT);
$connect->query($HISTORYMATCH);





// mysqli_close($connect);  

?>
