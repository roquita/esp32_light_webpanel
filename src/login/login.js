// Css and Scss added to entry point
import "./login.css";
import "./bootstrap.scss";

// Js files added to entry poitn
import "bootstrap/js/dist/button";

const main_url = "main.html";

var btn_login = document.getElementById("btn_login");
btn_login.onclick = function() {

    console.log("boton ver_data");
    location.href = main_url;
}

// ON LOAD 
window.onload = function() {
    document.getElementsByTagName("html")[0].style.visibility = "visible";
};