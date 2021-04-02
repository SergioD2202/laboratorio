<?php
require_once "../connection.php";

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit;
  }

$id=$_POST['id-e'];

$state=$_POST['estado'];

$list =  "UPDATE examen SET estado ='".$state."' WHERE id_examen = ".$id.";";

$query = $link->query($list);

if (!$query) {
    printf("Query failed: %s\n", $link->error);
    exit;
    }  
    $rows = array();
    
   
   

    echo "1";



$query->close();

$link->close();
?>