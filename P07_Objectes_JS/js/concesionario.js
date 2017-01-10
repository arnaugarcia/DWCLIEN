var lista_extras = ["ABS","Cierre centralizado","Turbo","Piloto automático","Faros LED"];

function newLine(line) {
    document.write("<br> " + line);
}

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

/* Validación 1 */
    var coche = new Coche();
    coche.nombre = "Fantastico";
    document.write("<br>Nombre Coche: ");
    document.write(coche.nombre);
    coche.precio = "70000€";
    document.write("<br> Precio Coche: ");
    document.write(coche.precio);
    var numExtra = coche.addExtra("Airbag");
    var extra = coche.getExtra(numExtra-1);
    document.write('<br/>Extra: ');
    document.write(extra);

/* Validación 2 */
    var myConcesionario = new Concesionario();
    myConcesionario.setNombre("Mario Kart");
    myConcesionario.setDireccion("c/ Mushroom Kingdom 1");
    var coche = new Coche();
    coche.nombre = "Fantastico";
    coche.precio = "70000€";
    var numExtra = coche.addExtra("Airbag");
    var extra = coche.getExtra(numExtra-1);
    var posicionPedido = myConcesionario.addComanda(coche);
    document.write("<br> Nombre concesionario: ");
    document.write(myConcesionario.nombre);
    document.write("<br> Dirección concesionario: ");
    document.write(myConcesionario.direction);
    document.write("<br> Nombre Coche: ");
    document.write(myConcesionario.pedidos[posicionPedido-1].nombre);
    document.write("<br> Nombre Extra: ");
    document.write(myConcesionario.pedidos[posicionPedido-1].extras[numExtra-1]);


