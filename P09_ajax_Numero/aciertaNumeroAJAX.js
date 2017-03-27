function enviaFormXML() {
    var xmlHttp = new XMLHttpRequest();
    urlDestino = "aciertaNumeroXML.php?inicio=si";
    xmlHttp.open("GET", urlDestino, true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            repRespostaXML(xmlHttp);
        }
    };
    xmlHttp.send(null);
}

function repRespostaXML(xmlHttp) {
    if (xmlHttp.status == 200) {
        var resp = xmlHttp.responseXML;
        var listResp = resp.getElementsByTagName("inicio");
        for (var k = 0; k < listResp.length; k++) {
            var result = listResp[k].childNodes[0].nodeValue;
            console.log(result);
            document.getElementById("mensaje").innerHTML = "Se ha generado un nuevo número.";
        }
    }
}

function enviaFormXML1() {
    var xmlHttp = new XMLHttpRequest();
    var valor = document.getElementById("numero").value;
    urlDestino = "aciertaNumeroXML.php?numero=" + valor;
    xmlHttp.open("GET", urlDestino, true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            repRespostaXML1(xmlHttp);
        }
    };
    xmlHttp.send(null);
}

function repRespostaXML1(xmlHttp) {
    if (xmlHttp.status == 200) {
        var resp = xmlHttp.responseXML;
        var listResp = resp.getElementsByTagName("mensaje");
        for (var k = 0; k < listResp.length; k++) {
            var result = listResp[k].childNodes[0].nodeValue;
            document.getElementById("mensaje").innerHTML = result;
        }
        var listResp = resp.getElementsByTagName("encontrado");
        for (var k = 0; k < listResp.length; k++) {
            var result = listResp[k].childNodes[0].nodeValue;
            document.getElementById("encontrado").innerHTML = result;
        }
    }
}

function inicioJSON() {
    var xmlHttp = new XMLHttpRequest();
    urlDestino = "aciertaNumeroJSON.php?inicio=si";
    xmlHttp.open("GET", urlDestino, true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            repRespostaJSON(xmlHttp);
        }
    };
    xmlHttp.send(null);
}

function repRespostaJSON(xmlHttp) {
    if (xmlHttp.status == 200) {
        var resp = xmlHttp.responseText;
        var respJSON = JSON.parse(resp);
        var inicio = respJSON.inicio;
        console.log(inicio);
        document.getElementById("mensaje").innerHTML = "Se ha generado un nuevo número.";
    }
}

function inicioJSON1() {
    var xmlHttp = new XMLHttpRequest();
    var valor = document.getElementById("numero").value;
    urlDestino = "aciertaNumeroJSON.php?numero="+valor;
    xmlHttp.open("GET", urlDestino, true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            repRespostaJSON1(xmlHttp);
        }
    };
    xmlHttp.send(null);
}

function repRespostaJSON1(xmlHttp) {
    if (xmlHttp.status == 200) {
        var resp = xmlHttp.responseText;
        var respJSON = JSON.parse(resp);
        var encontrado = respJSON.encontrado;
        var mensaje = respJSON.mensaje;
        document.getElementById("encontrado").innerHTML = encontrado;
        document.getElementById("mensaje").innerHTML = mensaje;
    }
}