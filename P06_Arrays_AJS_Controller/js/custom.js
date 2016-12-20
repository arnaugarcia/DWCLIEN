var lista_numeros = new Array(5);
$( document ).ready(function() {
    lista_numeros[0]=0;
    lista_numeros[1]=1;
    lista_numeros[2]=2;
    lista_numeros[3]=3;
    lista_numeros[4]=4;
    lista_numeros[5]=5;
    ex1(lista_numeros);
    $( "#ex2btn" ).click(ex2);
    $( "#ex3btn" ).click(ex3);
    $( "#ex4btn" ).click(ex4);
    $( "#ex5btn" ).click(ex5);
    $( "#ex6btn" ).click(ex6);
    $( "#ex7btn" ).click(ex7);
});

//Tool
function mostarNumeros(ex) {
    for (var key in  lista_numeros) {
        var valor= lista_numeros[key];
        console.log(valor);
        $( "#ex" + ex ).append("<div class='col-lg-1 table-bordered text-center' >" + valor  + "</div>");
    }
}

function ex1() {

    console.log("Ex1:");

    mostarNumeros(1);

}

function ex2() {

    console.log("Ex2:");

    mostarNumeros(2);

    $( "#ex2" ).append("<div class='col-lg-12'><b>Primer número: </b>" + lista_numeros.shift() + "</div>");
    $( "#ex2" ).append("<div class='col-lg-12'><b>Último número: </b>" + lista_numeros.pop() + "</div>");
}

function ex3(){

    console.log("Ex3:");

    lista_numeros.push($( "#ex3in" ).val());

    mostarNumeros(3);
}

function ex4(){

    console.log("Ex4:");

    lista_numeros.unshift($( "#ex4in" ).val());

    mostarNumeros(4);
}

function ex5(){

    console.log("Ex5:");

    lista_numeros.pop();

    mostarNumeros(5)
}

function ex6(){

    console.log("Ex6:");

    lista_numeros.shift();

    mostarNumeros(6);
}

function ex7(){

    console.log("Ex7:");

    var total;
    var signo = $( "#ex7in" ).val();

    switch (signo){
        case "+":
            for (var key in  lista_numeros) {
                total = (total + lista_numeros[key]);
            }
            break;
        default:
            console.log("Signo mal introducido");
            break;
    }

    $( "#ex7" ).append("<div class='col-lg-12'><b>Total: </b>" + total + "</div>");

}