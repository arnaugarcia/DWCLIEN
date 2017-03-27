window.onload = inicio;

function inicio() {
    /*
     2.1 Cuando se clique sobre #addDiv
     */
    var addDiv = document.getElementById("addDiv");
    addDiv.addEventListener("click", addNewDiv, false);
    /*
     * se cree un DIV, se pida al usuario un texto y se añada dentro de #domNodes con el texto indicado por el usuario.
     * A demás el nuevo DIV creado debe ser de la clase .addDiv.
     */
    function addNewDiv() {
        var newDiv = document.createElement("DIV");
        var texto = window.prompt("Introduce el texto del nuevo DIV");
        newDiv.innerHTML = texto;
        var nodes = document.getElementById("domNodes");
        nodes.appendChild(newDiv);
        newDiv.className = "addDiv";
    }
    /*
     * 2.2 Cuando se clique sobre #addSpan se cree un SPAN,
     * se pida al usuario un texto y se añada el nuevo SPAN dentro de #domNodes con el texto indicado por el usuario.
     * A demás el SPAN creado ha de ser de la clase .addSpan.
     */
    var addSpan = document.getElementById("addSpan");
    addSpan.addEventListener("click", addNewSpan, false);
    function addNewSpan() {
        var newSpan = document.createElement("SPAN");
        var texto = window.prompt("Introduce el texto del nuevo SPAN");
        newSpan.innerHTML = texto;
        var nodes = document.getElementById("domNodes");
        nodes.appendChild(newSpan);
        newSpan.className = "addSpan";
    }
    /*
     * 2.3 Cuando se clique sobre el div #setContentPrev se cree un DIV con el texto ‘setContentPrev’ y de la clase .setContentPrev que se añada dentro de #domNodes.
     * A demás, al clicar encima el DIV creado se deberá llamar a una función que pida un texto al usuario y lo introduzca dentro del elemento hermano anterior al creado.
     */
    var setContentPrev = document.getElementById("setContentPrev");
    setContentPrev.addEventListener("click", addNewDivSCP, false);
    function addNewDivSCP() {
        var newDiv = document.createElement("DIV");
        var texto = "setContentPrev";
        newDiv.innerHTML = texto;
        var nodes = document.getElementById("domNodes");
        nodes.appendChild(newDiv);
        newDiv.className = "setContentPrev";
        newDiv.onclick = function () {
            var texto1 = window.prompt("Introduce el texto del elemento hermano");
            var elementoHermanoAnterior = newDiv.previousElementSibling;
            elementoHermanoAnterior.innerHTML = texto1;
        };
    }
    /*
     2.4 Cuando se clique sobre #delPrevNode cree un DIV con el texto ‘Remove Preview’ , de la clase .delPrevNode y que se añada dentro de #domNodes.
     A demás al pasar el ratón del DIV creadp  se deberá eliminar el nodo elemento anterior. Si no existe nodo anterior, no deberá retornar ningún error ni borrar nada.* 
     */
    var delPrevNode = document.getElementById("delPrevNode");
    delPrevNode.addEventListener("click", addNewDivRP, false);
    function addNewDivRP() {
        var newDiv = document.createElement("DIV");
        var texto = "Remove Preview";
        newDiv.innerHTML = texto;
        var nodes = document.getElementById("domNodes");
        nodes.appendChild(newDiv);
        newDiv.className = "delPrevNode";
        newDiv.onmouseover = function () {
            var nodoElementoAnterior = newDiv.previousElementSibling;
            if (nodoElementoAnterior)
                nodoElementoAnterior.remove();
        };
    }
    /*
     * 2.5 Cuando se clique sobre #delNextNode se cree un DIV con el texto ‘Remove Next’, de la clase .delNextNode y que se añada dentro de #domNodes.
     * A demás al clicar encima el DIV creado se deberá llamar a una función que compruebe si hay un nodo elemento después de él y en tal caso que lo borre.
     */
    var delNextNode = document.getElementById("delNextNode");
    delNextNode.addEventListener("click", addNewDivRN, false);
    function addNewDivRN() {
        var newDiv = document.createElement("DIV");
        var texto = "Remove Next";
        newDiv.innerHTML = texto;
        var nodes = document.getElementById("domNodes");
        nodes.appendChild(newDiv);
        newDiv.className = "delNextNode";
        newDiv.onclick = function () {
            var nodoElementoPosterior = newDiv.nextElementSibling;
            if (nodoElementoPosterior)
                nodoElementoPosterior.remove();
        };
    }
    /*
     * 2.6 Cuando se clique sobre #addAttr se cree un DIV con el texto “Ad done Attr”, de la clase .addAttr y se añada dentro de #domNodes.
     * Al clicar encima del DIV creado se ha de pedir al usuario un nombre de atributo y valor y establecer al elemento clicado el atributo y nombre indicado
     * (si ya tiene un atributo con ese nombre, hay que actualizar su valor).
     */
    var addAttr = document.getElementById("addAttr");
    addAttr.addEventListener("click", addNewDivAA, false);
    function addNewDivAA() {
        var newDiv = document.createElement("DIV");
        var texto = "Ad done Attr";
        newDiv.innerHTML = texto;
        var nodes = document.getElementById("domNodes");
        nodes.appendChild(newDiv);
        newDiv.className = "addAttr";
        newDiv.onclick = function () {
            var attr = window.prompt("Introduce un nombre de atributo");
            var value = window.prompt("Introduce un valor")
            newDiv.setAttribute(attr, value);
        };
    }
    /*
     * 2.7 Cuando se clique sobre #delAllType se cree dentro de #domNodes un DIV con el texto “Delete All Of” , de la clase .delAllType .
     * Al clicar encima del DIV creado se ha de pedir al usuario un tipo de dato (SPAN, DIV...) y se elimine de #domNodes todos aquellos elementos de ese tipo (si es que existe alguno).
     */
    var delAllType = document.getElementById("delAllType");
    delAllType.addEventListener("click", addNewDivDAO, false);
    function addNewDivDAO() {
        var newDiv = document.createElement("DIV");
        var texto = "Delete All Of";
        newDiv.innerHTML = texto;
        var nodes = document.getElementById("domNodes");
        nodes.appendChild(newDiv);
        newDiv.className = "delAllType";
        newDiv.onclick = function () {
            var type = window.prompt("Introduce un tipo de dato");
            var list = document.getElementById("domNodes").getElementsByTagName(type);
            for (var i = list.length - 1; i >= 0; i--) {
                list[i].remove();
            }
        };
    }
    /*
     * 2.8 Cuando se clique sobre #replaceMeForFirst se ha de pedir un texto al usuario y crear dentro de #domNodes un DIV con un texto introducido por el usuario y de la clase .replaceMeForFirst.
     * Al clicar encima del DIV creado se ha de situar delante del primer DIV dentro de #domNodes.
     */
    var replaceMeForFirst = document.getElementById("replaceMeForFirst");
    replaceMeForFirst.addEventListener("click", addNewDivRMF, false);
    function addNewDivRMF() {
        var text = window.prompt("Introduce un texto");
        var newDiv = document.createElement("DIV");
        newDiv.innerHTML = text;
        var nodes = document.getElementById("domNodes");
        nodes.appendChild(newDiv);
        newDiv.className = "replaceMeForFirst";
        newDiv.onclick = function () {
            nodes.insertBefore(newDiv, nodes.firstChild);
        };
        newDiv.onmouseover = function () {
            var position = newDiv.getBoundingClientRect();
            var x = position.left.toFixed(2);
            var y = position.top.toFixed(2);
            newDiv.innerHTML = "X:" + x + " Y:" + y;
        };
    }

}
