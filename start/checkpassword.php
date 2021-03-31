<?php
require_once "../connection.php";

if (mysqli_connect_errno()) {
  printf("Connect failed: %s\n", mysqli_connect_error());
  exit;
}

$correo=$_POST['correo'];
$password=$_POST['password'];
$verif = "0";


$check =  'SELECT password FROM user WHERE correo="'.$correo.'";';

$query = $link->query($check);

if (!$query) {
    printf("Query failed: %s\n", $link->error);
    exit;
    }  
    $rows = array();
    
    while($r = mysqli_fetch_assoc($query)) {
        $rows[] = $r;
    }

    foreach($rows as $row){
      if(in_array($password,$row)) $verif="1";
    }

    echo $verif;



$query->close();

$link->close();

?>