/**
 * Created by arnau on 27/3/17.
 */
window.onload = inicio;

function inicio() {

    document.getElementById("start").addEventListener("click", start, false);

    document.getElementById("start").addEventListener("click", showRanking, false);

    document.getElementById("img").addEventListener("mouseenter", sendPista, false);

    document.getElementById("img").addEventListener("mouseout", sendPregunta, false);

    document.getElementById("new").addEventListener("mouseenter", randomColor, false);

}

function start() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "response.php?inicio=si", true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            repRespostaJSON(xmlHttp);
        }
    };
    xmlHttp.send(null);

    function repRespostaJSON(xmlHttp) {
        if (xmlHttp.status == 200) {
            var resp = xmlHttp.responseText;
            var respJSON = JSON.parse(resp);
            var url = respJSON.url;
            console.log(respJSON.url);
            document.getElementById("img").innerHTML = "<img id='img' class='img img-responsive' src='" + url + "'>";
        }
    }
}

function sendPista() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "response.php?pista", true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            repRespostaJSON(xmlHttp);
        }
    };
    xmlHttp.send(null);

    function repRespostaJSON(xmlHttp) {
        if (xmlHttp.status == 200) {
            var resp = xmlHttp.responseText;
            var respJSON = JSON.parse(resp);
            document.getElementById("pista").innerHTML ="<div>" + respJSON.pista + "<div>";
        }
    }
}

function sendPregunta() {
    document.getElementById("pista").innerHTML ="";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "response.php?pregunta", true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            repRespostaJSON(xmlHttp);
        }
    };
    xmlHttp.send(null);

    function repRespostaJSON(xmlHttp) {
        if (xmlHttp.status == 200) {
            var resp = xmlHttp.responseText;
            var respJSON = JSON.parse(resp);

            document.getElementById("img").innerHTML = "";

            document.getElementById("pregunta").innerHTML = respJSON.pregunta;

            document.getElementById("solucion1").innerHTML = respJSON.solucion1;

            document.getElementById("solucion2").innerHTML = respJSON.solucion2;

            document.getElementById("solucion1").addEventListener("click", checkResposta1, false);

            document.getElementById("solucion2").addEventListener("click", checkResposta2, false);
        }
    }
}

function checkResposta1() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "response.php?solucion=1", true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            repRespostaJSON(xmlHttp);
        }
    };
    xmlHttp.send(null);

    function repRespostaJSON(xmlHttp) {
        if (xmlHttp.status == 200) {
            var resp = xmlHttp.responseText;
            var respJSON = JSON.parse(resp);
            document.getElementById("solucion1").setAttribute("class", "");
            document.getElementById("solucion2").setAttribute("class", "");
            if (respJSON.solucion == "true"){
                document.getElementById("solucion1").setAttribute("class", "bg-success");
                document.getElementById("solucion2").setAttribute("class", "bg-danger");
            }else{
                document.getElementById("solucion1").setAttribute("class", "bg-danger");
                document.getElementById("solucion2").setAttribute("class", "bg-success");
            }
        }
    }
}

function checkResposta2() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "response.php?solucion=2", true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            repRespostaJSON(xmlHttp);
        }
    };
    xmlHttp.send(null);

    function repRespostaJSON(xmlHttp) {
        if (xmlHttp.status == 200) {
            var resp = xmlHttp.responseText;
            var respJSON = JSON.parse(resp);
            document.getElementById("solucion1").setAttribute("class", "");
            document.getElementById("solucion2").setAttribute("class", "");
            if (respJSON.solucion == "true"){
                document.getElementById("solucion1").setAttribute("class", "bg-danger");
                document.getElementById("solucion2").setAttribute("class", "bg-success");
            }else{
                document.getElementById("solucion1").setAttribute("class", "bg-success");
                document.getElementById("solucion2").setAttribute("class", "bg-danger");
            }
        }
    }
}

function randomColor(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "response.php?color", true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            repRespostaJSON(xmlHttp);
        }
    };
    xmlHttp.send(null);

    function repRespostaJSON(xmlHttp) {
        if (xmlHttp.status == 200) {
            var resp = xmlHttp.responseText;
            var respJSON = JSON.parse(resp);
            document.getElementById("extra").innerHTML = document.getElementById("extra").innerHTML + "<div>" + respJSON.color + "</div>";
        }
    }
}

function showRanking() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "response.php?aciertos", true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            repRespostaJSON(xmlHttp);
        }
    };
    xmlHttp.send(null);

    function repRespostaJSON(xmlHttp) {
        if (xmlHttp.status == 200) {
            var resp = xmlHttp.responseText;
            var respJSON = JSON.parse(resp);
            document.getElementById("ranking").innerHTML = "Aciertos: " + respJSON.aciertos + " <br> " + "Fallos:" + respJSON.fallos;
        }
    }
}