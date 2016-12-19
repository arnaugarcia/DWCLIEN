
$( document ).ready(function() {
    ex1();
});

function ex1() {

    var lista_numeros = new Array(5);
    lista_numeros[0]=0;
    lista_numeros[1]=1;
    lista_numeros[2]=2;
    lista_numeros[3]=3;
    lista_numeros[4]=4;
    lista_numeros[5]=5;

    console.log("Ex1:");

    for (var key in  lista_numeros) {
        var valor= lista_numeros[key];
        console.log(valor);
        $( "#ex1" ).append("<div class='col-lg-1 table-bordered text-center' >" + valor  + "</div>");
    }

}