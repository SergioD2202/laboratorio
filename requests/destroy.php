<?php

session_start();
 

$_SESSION = array();
 

session_destroy();
 
echo "1";
exit;
?>