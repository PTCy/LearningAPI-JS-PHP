<?php
   try{
    $user = 'root';
    $pass = 'adminice';
    $dbh = new PDO('mysql:host=localhost;dbname=mydb', $user, $pass);
   }catch(PDOException $e){
    print "Error". $e->getMessage();
   }
    
?>