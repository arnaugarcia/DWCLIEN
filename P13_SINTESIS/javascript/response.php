<?php

session_start();

if (!isset($_SESSION["numeroOculto"])){
    $_SESSION['numeroOculto'] = rand(0, 1);
    $_SESSION['aciertos'] = 0;
    $_SESSION['fallos'] = 0;
}


$consulta = array(
    ["url" => "img/ninos.jpg","pista" => "No todos son iguales", "pregunta" => "¿En que fila están los repetidos?","solucion1" => "1 y 2", "solucion2" => "3 y 4"],
    ["url" => "img/trebol.jpg","pista" => "No todos son iguales", "pregunta" => "¿En que mitad está el trebol?","solucion1" => "mitad arriba", "solucion2" => "mitad abajo"]
);

$colors = array("yellow", "red", "blue");

if (isset($_GET['color'])){
    echo json_encode(["color"=>$colors[rand(0, 2)]]);
}

if (isset($_GET['inicio'])) {
    echo json_encode(["url"=>$consulta[$_SESSION['numeroOculto']]["url"]]);
}
if (isset($_GET['pista'])){
    echo json_encode(["pista"=>$consulta[$_SESSION['numeroOculto']]["pista"]]);
}
if (isset($_GET['pregunta'])){
    echo json_encode(
        [
            "pregunta"=>$consulta[$_SESSION['numeroOculto']]["pregunta"],
            "solucion1"=>$consulta[$_SESSION['numeroOculto']]["solucion1"],
            "solucion2"=>$consulta[$_SESSION['numeroOculto']]["solucion2"]
        ]
    );
}
if (isset($_GET['solucion'])){
    switch ($_GET['solucion']){
        case 1:
            echo json_encode(["solucion"=>"false"]);
            $_SESSION['fallos']++;
            break;
        case 2:
            echo json_encode(["solucion"=>"true"]);
            $_SESSION['aciertos']++;
            break;
        default:
            echo json_encode(["solucion"=>"Error"]);
            break;
    }
}

if (isset($_GET['aciertos'])){
    echo json_encode(["aciertos" => $_SESSION['aciertos'],"fallos" => $_SESSION['fallos']]);
}