// Css and Scss added to entry point
import "bootstrap/js/dist/modal";

import "./menu.css";
import "./bootstrap.scss";

// Js files added to entry poitn


// branches of entry point
import "../download/download";
import "../settings/settings";
import "../system/system";
import "../zoom/zoom";


//DESCOMENTAR CODIGO PARA TENER UNA VENTANA PROPIA PARA DESCARGA, EN LUGAR DE SOLO UNA ALARMA.
// EN INDEX.HTML TAMBIEN DESCOMENTAR LA SECCION "DESCARGA VIEW" Y COMENTAR "MODAL FADE"

//constantes
const xsm_breakpoint = 300;
const sm_breakpoint = 576;
const md_breakpoint = 768;
const lg_breakpoint = 992;
const xl_breakpoint = 1200;

const option_configuracion_icon_color = "text-danger";
//const option_descarga_icon_color = "text-danger";
const option_dektop_icon_color = "text-danger";
const view_invisibility = "d-none";

//menu on Resize
function menu_onResize_callback() {
    var window_width = window.innerWidth;
    var window_height = window.innerHeight;
    var menu = document.getElementById("menu");
    var configuracion_view_helper = document.getElementById("configuracion_view_helper");
    var sistema_view_helper = document.getElementById("sistema_view_helper");

    console.log(window_height);
    if (window_width < lg_breakpoint) {
        menu.removeAttribute("style");
        menu.classList.add("fixed-bottom");
        configuracion_view_helper.setAttribute("style", `height:${menu.offsetHeight}px`);
        sistema_view_helper.setAttribute("style", `height:${menu.offsetHeight}px`);
    } else {
        menu.setAttribute("style", "height:100vh");
        menu.classList.remove("fixed-bottom");
        configuracion_view_helper.removeAttribute("style");
        sistema_view_helper.removeAttribute("style");
    }
}
window.addEventListener('resize', menu_onResize_callback);

//menu on load
menu_onResize_callback();


//botones

var configuracionOption = document.getElementById("configuracion_option");
var configuracionOptionClass = configuracionOption.classList;

var zoomOption = document.getElementById("zoom_option");

//var descargaOption = document.getElementById("descarga_option");
//var descargaOptionClass = descargaOption.classList;

var sistemaOption = document.getElementById("sistema_option");
var sistemaOptionClass = sistemaOption.classList;


//vistas 

var configuracionView = document.getElementById("configuracion_view");
var configuracionViewClass = configuracionView.classList;

//var descargaView = document.getElementById("descarga_view");
//var descargaViewClass = descargaView.classList;

var sistemaView = document.getElementById("sistema_view");
var sistemaViewClass = sistemaView.classList;


//callbacks

function configuracionOption_onClick_callback() {
    configuracionOptionClass.add(option_configuracion_icon_color);
    //descargaOptionClass.remove(option_descarga_icon_color);
    sistemaOptionClass.remove(option_dektop_icon_color);

    configuracionViewClass.remove(view_invisibility);
    //descargaViewClass.add(view_invisibility);
    sistemaViewClass.add(view_invisibility);
}

function zoomOption_onClick_callback() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function sistemaOption_onClick_callback() {
    configuracionOptionClass.remove(option_configuracion_icon_color);
    //descargaOptionClass.remove(option_descarga_icon_color);
    sistemaOptionClass.add(option_dektop_icon_color);

    configuracionViewClass.add(view_invisibility);
    //descargaViewClass.add(view_invisibility);
    sistemaViewClass.remove(view_invisibility);
}

function descargaOption_onClick_callback() {
    configuracionOptionClass.remove(option_configuracion_icon_color);
    //descargaOptionClass.add(option_descarga_icon_color);
    sistemaOptionClass.remove(option_dektop_icon_color);

    configuracionViewClass.add(view_invisibility);
    //descargaViewClass.remove(view_invisibility);
    sistemaViewClass.add(view_invisibility);
}

configuracionOption.addEventListener('click', configuracionOption_onClick_callback);
zoomOption.addEventListener('click', zoomOption_onClick_callback);
sistemaOption.addEventListener('click', sistemaOption_onClick_callback);
//descargaOption.addEventListener('click', descargaOption_onClick_callback);

//menu option on load
configuracionOption_onClick_callback();