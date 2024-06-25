<?php

function deleteToken($connect, $token) {

    $token = mysqli_real_escape_string($connect, $token);


    $query = "DELETE FROM tokens WHERE token = '$token'";

  
    return  mysqli_query($connect, $query);

}

?>
