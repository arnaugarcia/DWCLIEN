/**
 * Created by arnau on 14/5/17.
 */

var li_list = [];

var cookieUsername = "";

window.onload = function () {

    if(getCookie("username")!==""){
        cookieUsername = getCookie("username");
        document.getElementById('welcome').innerHTML="Welcome, " + cookieUsername;
    }

    var li1 = createLi();
    var li2 = createLi();
    var li3 = createLi();
    var li4 = createLi();
    var li5 = createLi();
    var li6 = createLi();
    var li7 = createLi();
    var li8 = createLi();
    var li9 = createLi();
    var li10 = createLi();

    li1.innerHTML = "Min number: " + Number.MIN_VALUE;

    pushLi(li1);

    li2.innerHTML = "Max number: " + Number.MAX_VALUE;

    pushLi(li2);

    li3.innerHTML = "Screen height: " + screen.height;

    pushLi(li3);

    li4.innerHTML = "Screen width: " + screen.width;

    pushLi(li4);

    li5.innerHTML = "Screen height Available: " + screen.availHeight;

    pushLi(li5);

    li6.innerHTML = "Screen width Available: " + screen.availWidth;

    pushLi(li6);

    li7.innerHTML = "Current URL: " + document.URL;

    pushLi(li7);

    li8.innerHTML = "Current DOC: " + window.location.pathname.split("/").pop();

    pushLi(li8);

    li9.innerHTML = "Random between 0 & 200: " + Math.floor((Math.random() * 200) + 0);

    pushLi(li9);

    li10.innerHTML = getOsName();

    pushLi(li10);

    showAll();
};

document.getElementById("getUsername").addEventListener("click", getUsername);
document.getElementById("setTitle").addEventListener("click", setTitle);

function getOsName() {

    if (navigator.appVersion.indexOf("Win") != -1)
        return "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1)
        return "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1)
        return "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1)
        return "Linux";
}

function createLi() {
    return document.createElement("LI");
}

function pushLi(li) {
    li_list.push(li);
}

function showAll() {
    var ul = document.createElement("UL");
    document.getElementById("listaPropiedades").appendChild(ul);
    for (var i = 0; i < li_list.length; i++){
        ul.appendChild(li_list[i]);
        console.log(li_list[i]);
    }
}
function getUsername() {
    if (cookieUsername == "") {
        cookieUsername = prompt("Please enter your name");
        setCookie("username", cookieUsername, 5);
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

document.getElementById('getValues').addEventListener("click", getValues);

function getValues() {
    var num1 = null;
    var num2 = null;
    var vals = null;
    while (num1 === null || num1 === undefined || num1 === ""
    || num2 === null || num2 === undefined || num2 === ""
    || vals === null || vals === undefined || vals === "") {

        vals = prompt('Inserta valores entre 200 and 800', null);
        if (vals !== null) {
            var nums = vals.split(",");
            if (nums[0] !== null && nums[0]>=200 && nums[0]<800 && nums[0]<nums[1]) {
                var num1 = nums[0];
            }
            if (nums[1] !== null && nums[1]>200 && nums[1]<=800 && nums[0]<nums[1]) {

                var num2 = nums[1];
            }
        }
    }

    var windowCreated = window.location.pathname.replace(window.location.pathname.split("/").pop(),"");

    window.open(windowCreated+"window.html", "", "width="+Math.floor((Math.random() * num2) + num1)+", height="+Math.floor((Math.random() * num2) + num1));
    
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
