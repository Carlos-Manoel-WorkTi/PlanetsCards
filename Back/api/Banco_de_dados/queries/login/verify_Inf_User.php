<?php 

 function checkData($connect,$email,$password){

 
    // Escape variables to prevent SQL Injection
    $email = $connect->real_escape_string($email);
    $password = $connect->real_escape_string($password);

        
    // Function to handle email validation
    function handleEmail($email) {
      $errors = 'ok';
      if (empty($email)) {
          $errors = 'Email is empty';
      } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          $errors = 'Invalid email format';
      }
      return $errors;
    }

      // Function to handle password validation
      function handlePassword($password) {
      $errors = 'ok';
      if (empty($password)) {
            $errors = 'Password is empty';
      }
      return $errors;
    }
 

      // Check email
      $emailErrors = handleEmail($email);

      // Check password
      $passwordErrors = handlePassword($password);

      
    // Check if there are any errors
    if (!empty($emailErrors) || !empty($passwordErrors)) {
      $errors = array(
          'email' =>  $emailErrors,
          'password' => $passwordErrors,
          'way' => false,
          'status' => false
      );  
      // Return the response as JSON with errors
      if ($errors['email'] !== 'ok' || $errors['password'] !== 'ok') {
          echo json_encode($errors);
          die();
      }
  }

 }
?>