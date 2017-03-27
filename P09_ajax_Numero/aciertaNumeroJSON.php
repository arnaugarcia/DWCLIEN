<?php

session_start();

$json = '{';

if (isset($_GET['inicio'])) {     //se ha indicado iniciar un nuevo juego
    $numeroAleatorio = rand(0, 10); //seleccionamos un numero aleatorio entre 0 y 10
    $_SESSION['numeroOculto'] = $numeroAleatorio;


    $json .= '"inicio":"' . $_SESSION['numeroOculto'] . '"';
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