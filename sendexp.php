<?php
require_once "connection.php";

if (mysqli_connect_errno()) {
  printf("Connect failed: %s\n", mysqli_connect_error());
  exit;
}

$mail = $_POST['mail'];

$password = $_POST['password'];

$send =  'INSERT INTO user (correo, password) VALUES ("'.$mail.'","'.$password.'");';

$query = $link->query($send);

if (!$query) {
    printf("Query failed: %s\n", $link->error);
    echo 'failure';
    exit;
    }  
  
    echo 'correctomundo';



$query->close();

$link->close();

?>