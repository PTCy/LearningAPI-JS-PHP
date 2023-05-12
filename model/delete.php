<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=utf-8");
include 'db.php';

$data = json_decode(file_get_contents('php://input')); //รับค่า json

if($_SERVER['REQUEST_METHOD'] !== 'DELETE'){
    echo json_encode(array("status" => "error method"));
    die();//close php
}
try {
    $stmt = $dbh->prepare("DELETE FROM user WHERE id=:id");
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
