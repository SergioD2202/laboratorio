<?php
session_start();

require_once "../connection.php";

if (mysqli_connect_errno()) {
  printf("Connect failed: %s\n", mysqli_connect_error());
  exit;
}

$correo=$_POST['correo'];
$password = $_POST['password'];


$insert =  'INSERT INTO user (correo,password) VALUES ("'.$correo.'","'.$password.'");';

$query = $link->query($insert);

if (!$query) {
    printf("Query failed: %s\n", $link->error);
    exit;
    } 
    
echo "success";
   



$query->close();

$link->close();

?>