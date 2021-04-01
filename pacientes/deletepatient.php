<?php
session_start();

$id = $_POST['id-p'];


require_once "../connection.php";

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit;
  }

$list =  "DELETE FROM paciente WHERE id_paciente=".$id.";";

$query = $link->query($list);

if (!$query) {
    printf("Query failed: %s\n", $link->error);
    exit;
    } 
   

    echo '1';



$query->close();

$link->close();
?>