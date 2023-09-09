<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: X-Requested-With, Origin, Content-Type, X-CSRF-Token, Accept');

session_start();


if(!empty($_SESSION['panier']) and isset($_SESSION['panier']) and !filter_var($_GET['videPanier'], FILTER_VALIDATE_BOOLEAN)){
    echo $_SESSION['panier'];

}else{
    $_SESSION['panier'] = [];
    echo json_encode([]);
}


?>