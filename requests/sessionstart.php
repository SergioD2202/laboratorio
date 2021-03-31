<?php
session_start();

$_SESSION["loggedin"]=true;
$_SESSION["correo"]=$_POST["correo"];

echo "1";
?>