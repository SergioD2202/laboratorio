<?php
session_start();

require_once "../connection.php";

if (mysqli_connect_errno()) {
  printf("Connect failed: %s\n", mysqli_connect_error());
  exit;
}

$name = $_POST['n-name'];

$edad = $_POST['n-edad'];

$sexo = $_POST['n-sexo'];

$sangre = $_POST['n-sangre'];


$insert =  'INSERT INTO paciente (nombre,edad,sexo,tipo_sangre) VALUES ("'.$name.'",'.$edad.',"'.$sexo.'","'.$sangre.'");';

$query = $link->query($insert);

if (!$query) {
    printf("Query failed: %s\n", $link->error);
    exit;
    } 
    
echo "1";
   



$query->close();

$link->close();

?>