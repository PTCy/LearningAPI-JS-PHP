<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=utf-8");
include 'db.php';

$data = json_decode(file_get_contents('php://input')); //รับค่า json

if($_SERVER['REQUEST_METHOD'] !== 'PATCH'){
    echo json_encode(array("status" => "error method"));
    die();//close php
}
try {
    $stmt = $dbh->prepare("UPDATE user SET fname=:fname, lname=:lname, email=:email, avatar=:avatar WHERE id=:id");
    $stmt->bindParam(':fname', $data->fname);
    $stmt->bindParam(':lname', $data->lname);
    $stmt->bindParam(':email', $data->email);
    $stmt->bindParam(':avatar', $data->avatar);
    $stmt->bindParam(':id', $data->id, PDO::PARAM_INT);


    if ($stmt->execute()) {
        echo json_encode(array("status" => "ok"));
    } else {
        echo json_encode(array("status" => "error"));
    }
    $dbh = null;
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
