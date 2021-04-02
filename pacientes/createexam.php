<?php
session_start();

require_once "../connection.php";

if (mysqli_connect_errno()) {
  printf("Connect failed: %s\n", mysqli_connect_error());
  exit;
}

$tipo = $_POST['n-tipo'];

$des = $_POST['n-des'];

$estado = $_POST['n-estado'];


$insert =  'INSERT INTO examen (tipo_examen,descripcion,estado,id_paciente) VALUES ("'.$tipo.'","'.$des.'","'.$estado.'", '.$_SESSION['id-p'].');';

$query = $link->query($insert);

if (!$query) {
    printf("Query failed: %s\n", $link->error);
    exit;
    } 
    
echo "1";
   



$query->close();

$link->close();

?>