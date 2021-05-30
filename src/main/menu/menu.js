// Css and Scss added to entry point
import "./menu.css";
import "./bootstrap.scss";

// branches of entry point
import "../dashboard/dashboard";
import "../database/database";
import "../logs/logs";
import "../ota/ota";
import "../settings/settings";
import "../system/system";

//constantes
const xsm_breakpoint = 300;
const sm_breakpoint = 576;
const md_breakpoint = 768;
const lg_breakpoint = 992;
const xl_breakpoint = 1200;
const xxl_breakpoint = 1400;
const main_url = "main.html";

// views
var menu = document.getElementById("menu");
var settings = document.getElementById("settings");
var database = document.getElementById("database");
var logs = document.getElementById("logs");
var system = document.getElementById("system");
var dashboard = document.getElementById("dashboard");
var ota = document.getElementById("ota");
// buttons
var settings_btn = document.getElementById("settings_btn");
var database_btn = document.getElementById("database_btn");
var logs_btn = document.getElementById("logs_btn");
var system_btn = document.getElementById("system_btn");
var dashboard_btn = document.getElementById("dashboard_btn");
var ota_btn = document.getElementById("ota_btn");

function hide_all() {
    settings.classList.add("d-none");
    database.classList.add("d-none");
    logs.classList.add("d-none");
    system.classList.add("d-none");
    dashboard.classList.add("d-none");
    ota.classList.add("d-none");
};
settings_btn.onclick = function() {

    var window_width = window.innerWidth;
    if (window_width > lg_breakpoint) {
        menu.classList.remove("d-none");
    } else {
        menu.classList.add("d-none");
    }
    hide_all();
    settings.classList.remove("d-none");

};
database_btn.onclick = function() {
    var window_width = window.innerWidth;
    if (window_width > lg_breakpoint) {
        menu.classList.remove("d-none");
    } else {
        menu.classList.add("d-none");
    }
    hide_all();
    database.classList.remove("d-none");
};
logs_btn.onclick = function() {
    var window_width = window.innerWidth;
    if (window_width > lg_breakpoint) {

        menu.classList.remove("d-none");
    } else {
        menu.classList.add("d-none");
    }
    hide_all();
    logs.classList.remove("d-none");
};
system_btn.onclick = function() {
    var window_width = window.innerWidth;
    if (window_width > lg_breakpoint) {

        menu.classList.remove("d-none");
    } else {
        menu.classList.add("d-none");
    }
    hide_all();
    system.classList.remove("d-none");
};
dashboard_btn.onclick = function() {
    var window_width = window.innerWidth;
    if (window_width > lg_breakpoint) {

        menu.classList.remove("d-none");
    } else {
        menu.classList.add("d-none");
    }
    hide_all();
    dashboard.classList.remove("d-none");
};
ota_btn.onclick = function() {
    var window_width = window.innerWidth;
    if (window_width > lg_breakpoint) {

        menu.classList.remove("d-none");
    } else {
        menu.classList.add("d-none");
    }
    hide_all();
    ota.classList.remove("d-none");
};

// ON LOAD 
window.onload = function() {
    document.getElementsByTagName("html")[0].style.visibility = "visible";

    history.replaceState(null, null, location.pathname + "#myhash");
    history.pushState(null, null, location.pathname);

};
window.addEventListener("popstate", function() {
    console.log("hash:", location.hash);
    if (location.hash === "#myhash") {

        history.replaceState(null, null, location.pathname);
        setTimeout(function() {
            location.replace(main_url);
        }, 0);
    }
});

//menu on Resize
function menu_onResize_callback() {
    var window_width = window.innerWidth;
    if (window_width > lg_breakpoint) {
        menu.classList.remove("d-none");
    } else {
        var menu_is_not_active = settings.classList.contains("d-none") && system.classList.contains("d-none") &&
            database.classList.contains("d-none") && dashboard.classList.contains("d-none") &&
            logs.classList.contains("d-none") && ota.classList.contains("d-none");

        if (menu_is_not_active === false) {
            menu.classList.add("d-none");
        }
    }


}
window.addEventListener('resize', menu_onResize_callback);