<?php
include_once("database.php");


$postdata = file_get_contents("php://input");


$request = json_decode($postdata);
$comments = mysqli_real_escape_string($mysqli, trim($request->com));

$sql = "INSERT INTO commentaires(messages) VALUES ('$comments')";
$mysqli->query($sql);

?>