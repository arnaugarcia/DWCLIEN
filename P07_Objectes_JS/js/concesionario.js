var lista_extras = ["ABS","Cierre centralizado","Turbo","Piloto automático","Faros LED"];
var concesionarios = [];
function Coche(){
    this.nombre;
    this.precio;
    this.extras=[];
    this.addExtra = function(extra){
        this.extras.push(extra);
        return this.extras.length;
    }
    this.getExtra = function(numExtra) {
        return this.extras[numExtra];
    }

}

function Concesionario() {
    this.nombre;
    this.direccion;
    this.pedidos=[];
    this.setNombre = function(nombre) {
        this.nombre = nombre;
    }
    this.setDireccion = function (direccion) {
        this.direction = direccion;
    }
    this.addComanda = function(coche) {
        this.pedidos.push(coche);
        return this.pedidos.length;
    }
}

/* Metodos Extras */
function createNewCar(nombre,precio) {
    var coche = new Coche();
    coche.nombre = nombre;
    coche.precio = precio;
    var numExtra = coche.addExtra(lista_extras[randomNumber(0,lista_extras.length-1)]);
    var extra = coche.getExtra(numExtra-1);
    return coche;
}

function randomNumber(min,max) {
    return Math.floor(Math.random() * max) + min;
}
/* Validación 1 */
    var coche = new Coche();
    coche.nombre = "Fantastico";
    //document.write("<br>Nombre Coche: ");
    //document.write(coche.nombre);
    coche.precio = "70000";
    //document.write("<br> Precio Coche: ");
    //document.write(coche.precio);
    var numExtra = coche.addExtra("Airbag");
    var extra = coche.getExtra(numExtra-1);
    //document.write('<br/>Extra: ');
    //document.write(extra);

/* Validación 2 */
    var myConcesionario = new Concesionario();
    myConcesionario.setNombre("Mario Kart");
    myConcesionario.setDireccion("c/ Mushroom Kingdom 1");
    var coche = new Coche();
    coche.nombre = "Fantastico";
    coche.precio = "70000";
    var numExtra = coche.addExtra("Airbag");
    var extra = coche.getExtra(numExtra-1);

    var posicionPedido = myConcesionario.addComanda(coche);
    //document.write("<br> Nombre concesionario: ");
    //document.write(myConcesionario.nombre);
    //document.write("<br> Dirección concesionario: ");
    //document.write(myConcesionario.direction);
    //document.write("<br> Nombre Coche: ");
    //document.write(myConcesionario.pedidos[posicionPedido-1].nombre);
    //document.write("<br> Nombre Extra: ");
    //document.write(myConcesionario.pedidos[posicionPedido-1].extras[numExtra-1]);


/* Validación 3 */
    var concesionario1 = new Concesionario();
    concesionario1.setNombre("Concesionario1");
    concesionario1.setDireccion("C/ calle 1");
    concesionario1.addComanda(createNewCar("Seat Ibiza",3000));
    concesionario1.addComanda(createNewCar("Tesla Model S", 150000));
    concesionario1.addComanda(createNewCar("Lamborghini Aventador", 200000));
    concesionario1.addComanda(createNewCar("Lamborghini Veneno", 2000000));

    var concesionario2 = new Concesionario();
    concesionario2.setNombre("Concesionario2");
    concesionario2.setDireccion("C/ calle 2");
    concesionario2.addComanda(createNewCar("Seat Leon",3000));
    concesionario2.addComanda(createNewCar("Tesla Model X", 170000));
    concesionario2.addComanda(createNewCar("Lamborghini Aventador Roadster", 300000));
    concesionario2.addComanda(createNewCar("Lamborghini Veneno Roadster", 2005000));

    /*Añadir objetos al array*/
    concesionarios.push(myConcesionario);
    concesionarios.push(concesionario1);
    concesionarios.push(concesionario2);

    /*Mostramos Objetos en el DOM*/
$( document ).ready(function() {
    for (id in concesionarios){
        $("#sel1").append("<option value='" + id + "'> " + concesionarios[id].nombre + " ");
        writeCar($("#sel1").val());
    }
});

function writeCar(id) {
    for (i in concesionarios[id].pedidos) {
        $("#write").append("<tr>" + "<th>" + i + "</th>" + "<td>" + concesionarios[id].pedidos[i].nombre +  "</td>" + "<td>" + concesionarios[id].pedidos[i].precio +  "€</td>" + "<td>" + showExtras(concesionarios[id].pedidos[i].extras) +  "</td>" + "</tr>");

    }
    
}

function changeValues() {
    $("#write").empty();
    writeCar($("#sel1").val());
}

function showExtras(extras) {
    var result='';
    for (i in extras){
        result += extras[i];
    }
    return result;
}



