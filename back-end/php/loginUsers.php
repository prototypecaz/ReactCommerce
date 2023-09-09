<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
require_once('../Class/Database.php');
$data = Database::query('SELECT * FROM produits',[]);

echo json_encode($data)
?>