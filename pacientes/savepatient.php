<?php
session_start();

$_SESSION['id-p']=$_POST['id-p'];
$_SESSION['name-p']=$_POST['name-p'];

echo '1';
?>