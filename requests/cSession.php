<?php
session_start();
 

if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
    echo "1";
    exit;
}

echo "0";

?>