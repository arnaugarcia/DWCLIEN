<?php

session_start();

$json = '{';

if (isset($_GET['inicio'])) {
    $fotos = array("img/ninos.jpg","img/corazones.jpg","img/trebol.jpg");
    $numero = rand(0,2);
    $json .= '"foto":"' . $fotos[$numero] . '"';
    $_SESSION['numeroOculto'] = $numero;

} else {
    $numeroUsuario = $_GET['numero'];
    $numeroOculto = $_SESSION['numeroOculto'];

    if ($numeroUsuario > $numeroOculto) {
        $json .= '"encontrado":"no",';
        $json .= '"mensaje":"Has introducido un valor demasiado alto"';
    } else {
        if ($numeroUsuario < $numeroOculto) {
            $json .= '"encontrado":"no",';
            $json .= '"mensaje":"Has introducido un valor demasiado bajo"';
        } else {
            $json .= '"encontrado":"si",';
            $json .= '"mensaje":"Exacto!"';
        }
    }
}

$json .= '}';

echo($json);