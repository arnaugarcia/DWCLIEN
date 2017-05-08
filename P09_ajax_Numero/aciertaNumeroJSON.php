<?php

session_start();

$numeroAleatorio = rand(0, 1);

$_SESSION['numeroOculto'] = $numeroAleatorio;

$consulta = array(
    ["url" => "img/ninos.jpg","pista" => "No todos son iguales", "pregunta" => "¿En que fila están los repetidos?","solucion_in" => "1 y 2", "solucion_co" => "3 y 4"],
    ["url" => "img/trebol.jpg","pista" => "No todos son iguales", "pregunta" => "¿En que mitad está el trebol?","solucion_in" => "mitad arriba", "solucion_co" => "mitad abajo"]
);


if (isset($_GET['inicio'])) {
    echo json_encode($consulta[0]);
}