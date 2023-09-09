<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: X-Requested-With, Origin, Content-Type, X-CSRF-Token, Accept');

session_start();

if(!empty(json_decode($_GET['panier'],true)) and isset($_GET['panier'])){
   
    $_SESSION['panier'] = $_GET['panier'];
    
}else{
    $_SESSION['panier'] = [];
}


?>