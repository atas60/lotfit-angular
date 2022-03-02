<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'angdb';
$mysqli = new mysqli($db_host, $db_username, $db_password,$db_name);


if ($mysqli->connect_error) {
die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}
?>