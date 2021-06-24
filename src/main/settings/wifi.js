var btn_credenciales_wifi = document.getElementById("btn_credenciales_wifi");
var ssid_credenciales_wifi = document.getElementById("ssid_credenciales_wifi");
var pswd_credenciales_wifi = document.getElementById("pswd_credenciales_wifi");

btn_credenciales_wifi.onclick = async function() {

    console.log(ssid_credenciales_wifi.value);
    console.log(pswd_credenciales_wifi.value);

    if (ssid_credenciales_wifi.value.length < 9 || ssid_credenciales_wifi.value.length > 30) {
        alert("SSID debe tener entre 9 y 30 carácteres.");
        return;
    }
    if (pswd_credenciales_wifi.value.length < 9 || pswd_credenciales_wifi.value.length > 30) {
        alert("PSWD debe tener entre 9 y 30 carácteres.");
        return;
    }
    let data = {
        ssid: ssid_credenciales_wifi.value,
        pswd: pswd_credenciales_wifi.value
    };

    var response = await fetch("http://192.168.4.1/credenciales_wifi", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200) {
        console.log("status 200");
        alert("OK. Reiniciar dispositivo para ver cambios.");
    } else {
        alert("Credenciales WiFi: error");
    }
};