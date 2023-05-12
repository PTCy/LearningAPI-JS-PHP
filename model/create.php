<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=utf-8");
include 'db.php';

$data = json_decode(file_get_contents('php://input'));//รับค่า json

// check method ต้อง เป็น POST เท่านั้น
if($_SERVER['REQUEST_METHOD'] !== 'POST'){
    echo json_encode(array("status" => "error method"));
    die();//close php
}
try {
    $stmt = $dbh->prepare("INSERT INTO user (fname, lname, email, avatar) VALUES (?, ?, ?, ?)");
    $stmt->bindParam(1, $data->fname);
    $stmt->bindParam(2, $data->lname);
    $stmt->bindParam(3, $data->email);
    $stmt->bindParam(4, $data->avatar);

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
