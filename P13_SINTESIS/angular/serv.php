<?php

session_start();
@header("Content-type: application/json");
$json = "";

if (!isset($_SESSION['users'])) {
//   $_SESSION['users'] = array("pepe" => array("edad" => 15, "puntos" => 0));

    $_SESSION['users'] = array(["nombre" => "Pepe", "edad" => 15, "puntos" => 0], ["nombre" => "Juanji", "edad" => 33, "puntos" => 0]);
//    echo $_SESSION['users'][0]["nombre"];
}
//    $_SESSION['users'] = array( ["nombre"=>"Pepe", "edad" => 15, "puntos" => 0],["nombre"=>"Juanji", "edad" => 33, "puntos" => 0] );
//    echo "NOMBREEE".$_SESSION['users'][0]["nombre"]."aaaa";
//if (isset($_GET['inicio']) && $_GET['inicio'] == 'si') {
//    $_SESSION['ruta'] = "img/puzzle1.jpg";
//
//
//    $json .='{"ruta":"' . $_SESSION['ruta'] . '",'; //retornamos el numero generado
//}
//
//if (isset($_GET['pista']) && $_GET['pista'] == 'si') {
//    $_SESSION['pista'] = "They are being multiplied by some number...";
//    $json .='{"pista":"' . $_SESSION['pista'] . '",'; //retornamos el numero generado
//}
//
//if (isset($_GET['respuestas']) && $_GET['respuestas'] == 'si') {
//    $_SESSION['respuestas'] = array(15, 13);
//
//    $json .='{"good":' . $_SESSION['respuestas'][0] . "," .
//            '"bad":' . $_SESSION['respuestas'][1] . ','; //retornamos el numero generado
//}
////finalizamos la estructura XML
//$json .= '"":""}';
//
////insertamos la respuesta XML
//echo($json);

switch ($_SERVER['REQUEST_METHOD']) {
    case "GET":
        //creamos un array de 2 elementos. 1º con la URI hasta pokem/ , 2º con el resto (el id Bulbasur)

        $id = explode("users/", $_SERVER['REQUEST_URI']); // extraemos el id (Bulbasur)
        if (isset($id[1])) {

            echo json_encode($_SESSION['users'][$id[1]]); //retornamos la info del poke correspondiente en formato jSON
        } else {
            echo json_encode($_SESSION['users']);
        }
        break;
    case "PUT": //actualizar un pokemon
        //obtenemos la id del pokemon que queremos actualizar
        //   $id = explode("pokem/", $_SERVER['REQUEST_URI'])[1];
        // Para capturar los datos entrada JSON que viene en el request HTTP:
        $jsonUser = json_decode(file_get_contents("php://input"), true);
        //Search if user exists
        $exists = false;

//        echo var_dump($_SESSION['users']);

        for ($i = 0; $i < count($_SESSION['users']); $i++) {
            if ($_SESSION['users'][$i]["nombre"] == $jsonUser["nombre"]) {
                $_SESSION['users'][$i] = $jsonUser;
                $exists = true;
            }
        }
//        echo var_dump($jsonUser);
//        foreach ($_SESSION['users'] as $user){
//            if($user['nombre']==$jsonUser["nombre"]){
//                $user = $jsonUser;
//                $exists = true;
//            }
//        }

        if ($exists == false) {
            $_SESSION['users'][count($_SESSION['users'])] = $jsonUser;
        }

//        $_SESSION['users'][$jsonUser->nombre] = $jsonUser;
        //$jsonPoke["nombre"]
        echo json_encode($_SESSION['users']);
        break;

    case "DELETE": //actualizar un pokemon

        $id = explode("user/", $_SERVER['REQUEST_URI']); // extraemos el id (Bulbasur)
//        var_dump($id[1]);
//        var_dump($_SESSION['users'][0]);
        if (isset($id[1])) {
            for ($i = 0; $i < count($_SESSION['users']); $i++) {
                if ($_SESSION['users'][$i]["nombre"] == $id[1]) {
                    //echo ":::".print_r($_SESSION['users'][$i]).":::";
                    //unset($_SESSION['users'][$i]);
                    array_splice($_SESSION['users'],$i,1);
                    
                    break;
                }
            }

            echo json_encode($_SESSION['users']); //retornamos la info del poke correspondiente en formato jSON
        } else {
            echo json_encode($_SESSION['users']);
        }

        break;
}
?>