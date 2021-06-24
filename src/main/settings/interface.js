const OFF_bg_color = "";
const ON_bg_color = "purple";

var button_rele = document.getElementById("button_rele");
var button_wifi = document.getElementById("button_wifi");
var button_usb = document.getElementById("button_usb");
var button_ethernet = document.getElementById("button_ethernet");
var button_sensores = document.getElementById("button_sensores");

//btn wifi startup color
//button_wifi.style.backgroundColor = ON_bg_color;

async function onoff_interfaces(accion, interfaces) {
    let data = {
        accion: accion,
        interface: interfaces
    };

    var response = await fetch("http://192.168.4.1/interfaces", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200) {
        console.log("onoff interfaces status code 200.");
        if (accion === "extraer") {
            console.log("extraer OKOK.");
            var body = await response.json();
            console.log(body);

            if (body["wifi_estado"] === true) {
                button_wifi.style.backgroundColor = ON_bg_color;
            } else {
                button_wifi.style.backgroundColor = OFF_bg_color;
            }

            if (body["sensores_estado"] === true) {
                button_sensores.style.backgroundColor = ON_bg_color;
            } else {
                button_sensores.style.backgroundColor = OFF_bg_color;
            }

            if (body["rele_estado"] === true) {
                button_rele.style.backgroundColor = ON_bg_color;
            } else {
                button_rele.style.backgroundColor = OFF_bg_color;
            }

        }
    } else {
        console.log("onoff interfaces status code:", response.status);
    }
}

onoff_interfaces("extraer", " ");

function onClick_rele_callback() {
    var bg_color = button_rele.style.backgroundColor;
    if (bg_color === OFF_bg_color) {
        button_rele.style.backgroundColor = ON_bg_color;
        console.log("habilitando rele");
        onoff_interfaces("encender", "rele");
    } else if (bg_color === ON_bg_color) {
        button_rele.style.backgroundColor = OFF_bg_color;
        console.log("deshabilitando rele");
        onoff_interfaces("apagar", "rele");
    }
}

function onClick_wifi_callback() {
    var bg_color = button_wifi.style.backgroundColor;
    if (bg_color === OFF_bg_color) {
        button_wifi.style.backgroundColor = ON_bg_color;
        console.log("turning On wifi");
    } else if (bg_color === ON_bg_color) {
        button_wifi.style.backgroundColor = OFF_bg_color;
        console.log("turning Off wifi");
        onoff_interfaces("apagar", "wifi");
    }
}

function onClick_usb_callback() {
    var bg_color = button_usb.style.backgroundColor;
    if (bg_color === OFF_bg_color) {
        button_usb.style.backgroundColor = ON_bg_color;
        console.log("turning On usb");
    } else if (bg_color === ON_bg_color) {
        button_usb.style.backgroundColor = OFF_bg_color;
        console.log("turning Of usb");
    }
}

function onClick_ethernet_callback() {
    var bg_color = button_ethernet.style.backgroundColor;
    if (bg_color === OFF_bg_color) {
        button_ethernet.style.backgroundColor = ON_bg_color;
        console.log("turning On ethernet");
    } else if (bg_color === ON_bg_color) {
        button_ethernet.style.backgroundColor = OFF_bg_color;
        console.log("turning Off ethernet");
    }
}

function onClick_sensores_callback() {
    var bg_color = button_sensores.style.backgroundColor;
    if (bg_color === OFF_bg_color) {
        button_sensores.style.backgroundColor = ON_bg_color;
        console.log("turning On sensores");
        onoff_interfaces("encender", "sensores");
    } else if (bg_color === ON_bg_color) {
        button_sensores.style.backgroundColor = OFF_bg_color;
        console.log("turning Off sensores");
        onoff_interfaces("apagar", "sensores");
    }
}

button_rele.addEventListener('click', onClick_rele_callback);
button_wifi.addEventListener('click', onClick_wifi_callback);
button_usb.addEventListener('click', onClick_usb_callback);
button_ethernet.addEventListener('click', onClick_ethernet_callback);
button_sensores.addEventListener('click', onClick_sensores_callback);