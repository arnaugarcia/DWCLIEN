<?php

session_start();

@header("Content-type: application/json");

$json = "";

if (!isset($_SESSION['users'])) {

    $_SESSION['users'] = array(["nombre" => "Pepe", "edad" => 15, "puntos" => 0], ["nombre" => "Juanji", "edad" => 33, "puntos" => 0]);

}

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

switch ($_SERVER['REQUEST_METHOD']) {
    case "GET":

        $id = explode("users/", $_SERVER['REQUEST_URI']);
        if (isset($id[1])) {

            echo json_encode($_SESSION['users'][$id[1]]);
        } else {
            echo json_encode($_SESSION['users']);
        }
        break;
    case "PUT":

        $jsonUser = json_decode(file_get_contents("php://input"), true);

        $exists = false;


        for ($i = 0; $i < count($_SESSION['users']); $i++) {
            if ($_SESSION['users'][$i]["nombre"] == $jsonUser["nombre"]) {
                $_SESSION['users'][$i] = $jsonUser;
                $exists = true;
            }
        }

        if ($exists == false) {
            $_SESSION['users'][count($_SESSION['users'])] = $jsonUser;
        }

        echo json_encode($_SESSION['users']);
        break;

    case "DELETE":

        $id = explode("user/", $_SERVER['REQUEST_URI']);
        if (isset($id[1])) {

            for ($i = 0; $i < count($_SESSION['users']); $i++) {

                if ($_SESSION['users'][$i]["nombre"] == $id[1]) {

                    array_splice($_SESSION['users'],$i,1);
                    
                    break;
                }
            }

            echo json_encode($_SESSION['users']);
        } else {
            echo json_encode($_SESSION['users']);
        }

        break;
}