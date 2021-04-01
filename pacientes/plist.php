<?php
require_once "../connection.php";

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit;
  }

$list =  "SELECT * FROM paciente;";

$query = $link->query($list);

if (!$query) {
    printf("Query failed: %s\n", $link->error);
    exit;
    }  
    $rows = array();
    
    while($r = mysqli_fetch_assoc($query)) {
        $rows[] = $r;
    }
   

    echo json_encode($rows);



$query->close();

$link->close();
?>