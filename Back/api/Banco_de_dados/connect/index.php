<?php 
    $bd = [
        'host' => 'localhost',
        'dbname' => 'planetscards',
        'username' => 'root',
        'password' => ''
    ];

    $connect = new mysqli($bd['host'], $bd['username'], $bd['password'], $bd['dbname']);


?>