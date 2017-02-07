function enviaAjaxXML() {
    var nom = document.getElementById("nombre").value;
    var xmlHttp = new XMLHttpRequest();
    var urlDestino = "ajaxXML.php?nombre=" + nom;
    xmlHttp.open("GET",urlDestino,true);
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    var urlDestino = "ajaxXML.php";
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4){
         alert("Enviado");
         repResposta(xmlHttp);
      }
    };
    xmlHttp.send(null);
}

function repResposta(xmlHttp) {
    if (xmlHttp.status == 200) {
        var resp = xmlHttp.responseText;
        var respJSON = JSON.parse(resp);
        var txt=respJSON.nombre;
    }
}