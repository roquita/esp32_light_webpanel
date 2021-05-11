import printf from './print.js';
import "./colores.css";
import "./formas.scss";
import "bootstrap/js/dist/button";

var botoncito = document.getElementById("botoncito");
var button = new bootstrap.Button(botoncito);
button.toogle();
botoncito.onclick = function () {
    //printf();
    var button = new bootstrap.Button(botoncito);
    button.toogle();
}

