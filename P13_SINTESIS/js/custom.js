/**
 * Created by arnau on 27/3/17.
 */
window.onload = inicio;

function inicio() {

    document.getElementById("start").addEventListener("click", start, false);

    document.getElementById("mensaje").addEventListener("mouseenter", test, false);

}

function test() {
    alert("HEY!");
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
}

function repRespostaJSON(xmlHttp) {
    if (xmlHttp.status == 200) {
        var resp = xmlHttp.responseText;
        var respJSON = JSON.parse(resp);
        var foto = respJSON.foto;
        console.log(foto);
        document.getElementById("mensaje").innerHTML = "<img id='img' class='img img-responsive' src='" + foto + "'>";
    }
}