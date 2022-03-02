<?php
include_once("database.php");
/*
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

*/

$getcomment = [];
$sql = "SELECT messages FROM commentaires ";
$result = mysqli_query($mysqli,$sql);
$getcomment = mysqli_fetch_all($result);
echo json_encode(['data'=>$getcomment]);







?>