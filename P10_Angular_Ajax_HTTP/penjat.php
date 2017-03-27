<?php
session_start();
if (isset($_GET["inicio"])) {
    $a = array("piedra", "ordenador", "libreta", "patata");
    shuffle($a);
    ?>{"palabra":"<?php echo $a[0] ?>"}
    <?php
    $_SESSION["palabra"] = $a[0];
} else {
    $letra = $_GET["letra"];
    $palabra = $_SESSION["palabra"];
    $posiciones = "[";
    $pos = strpos($palabra, $letra, 0);
    while ($pos !== false) {
        $posiciones.=$pos;
        $pos = strpos($palabra, $letra, ++$pos);
        if ($pos) {
            $posiciones.=",";
        }
    }
    $posiciones.="]";
    echo '{"posicion":' . $posiciones . ',"letra":"' . $letra . '"}';
}
?>