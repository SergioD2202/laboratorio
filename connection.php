<?php
//mysql://b3b4d5da09746c:82bd6974@us-cdbr-east-03.cleardb.com/heroku_cfc86fd74ddb0a3?reconnect=true

//mysql -h us-cdbr-east-03.cleardb.com -u b3b4d5da09746c -p heroku_cfc86fd74ddb0a3 < laboratorio.sql 
define('DB_SERVER', 'us-cdbr-east-03.cleardb.com');
define('DB_USERNAME', 'b3b4d5da09746c');
define('DB_PASSWORD', '82bd6974');
define('DB_NAME', 'heroku_cfc86fd74ddb0a3');
 
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>