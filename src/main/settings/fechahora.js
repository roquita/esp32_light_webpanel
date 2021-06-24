var config_fecha = document.getElementById("config_fecha");
var config_hora = document.getElementById("config_hora");
var config_btn_fechahora = document.getElementById("config_btn_fechahora");

config_btn_fechahora.onclick = async function() {

    var fecha = config_fecha.value.split("-");
    var hora = config_hora.value.split(":");
    console.log(typeof(fecha[2]));
    let data = {
        accion: "modificar",
        fecha: {
            dd: parseInt(fecha[2], 10),
            mm: parseInt(fecha[1], 10),
            yy: parseInt(fecha[0], 10)
        },
        hora: {
            hh: parseInt(hora[0], 10),
            mm: parseInt(hora[1], 10),
            ss: 0
        }
    };
    console.log(data);

    var response = await fetch("http://192.168.4.1/fechayhora", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200) {
        console.log("status 200");
        alert("OK");
    } else {
        alert("Fecha y hora: error");
    }
};