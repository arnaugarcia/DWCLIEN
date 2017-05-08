<?php

session_start();

@header("Content-type: application/json");

if (isset($_GET['inicio']) && $_GET['inicio']=='si') {

    $_SESSION['ruta'] = array("ruta"=>"img/puzzle1.jpg");
    $json = json_encode($_SESSION['ruta']);
} 

if(isset($_GET['pista']) && $_GET['pista']=='si'){

    $_SESSION['pista'] = array("pista"=>"They are being multiplied by some number...");
    $json = json_encode($_SESSION['pista']);
}

if(isset($_GET['respuestas']) && $_GET['respuestas']=='si'){

    $_SESSION['respuestas'] = array("good"=>15,"bad"=>13);
    $json = json_encode($_SESSION['respuestas']);
}
echo($json);