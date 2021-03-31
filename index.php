<?php
session_start();
 

if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
    header("location: pacientes/list.html");
    exit;
}

header("location:start/login.html");
?>