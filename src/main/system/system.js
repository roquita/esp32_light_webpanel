// Css and Scss added to entry point
import "./system.css";
import "./bootstrap.scss";

var fechayhora = document.getElementById("sistema_fechayhora");
var vel_motor = document.getElementById("sistema_vel_motor");
var horas_trabajo = document.getElementById("sistema_horas_trabajo");
var corriente = document.getElementById("sistema_corriente");
var alarma = document.getElementById("sistema_alarma");
var mem_sd = document.getElementById("sistema_mem_sd");
var bateria = document.getElementById("sistema_bateria");

async function extraer_fechayhora() {
    let data = {
        accion: "extraer",
    };

    var response = await fetch("http://192.168.4.1/fechayhora", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200) {
        var body = await response.json();

        var fecha = `${body["fecha"]["dd"]}/${body["fecha"]["mm"]}/${body["fecha"]["yy"]}`;
        var hora = `${body["hora"]["hh"]}:${body["hora"]["mm"]}:${body["hora"]["ss"]}`;
        fechayhora.innerHTML = `${fecha} - ${hora}`;
    } else {
        console.log("extraer fecha y hora _ statu code:", response.status);
    }

}
//extraer_fechayhora();
//setInterval(extraer_fechayhora, 2500);

async function extraer_variables_de_sistema() {

    var response = await fetch("http://192.168.4.1/sistema", {
        method: "GET"
    });

    if (response.status === 200) {
        var body = await response.json();
        console.log(body);
        var velocidad_motor = body["velocidad_motor"].toFixed(2);
        //var horas_de_trabajo = body["horas_de_trabajo"].toFixed(3);
        var segundos_de_trabajo = body["segundos_de_trabajo"];
        var corriente_de_motor = body["corriente_de_motor"].toFixed(2);
        var estado_alarma = body["estado_alarma"] == true ? "activada" : "apagada";
        var estado_sd = body["estado_sd"] == true ? "insertada" : "ausente";
        var voltage_bat_0_100 = body["voltage_bat_0_100"].toFixed(1);

        vel_motor.innerHTML = `${velocidad_motor} rpm`;
        var horas = Math.trunc(segundos_de_trabajo / 3600);
        var minutos = Math.trunc((segundos_de_trabajo % 3600) / 60);
        var segundos = Math.trunc(segundos_de_trabajo % 60);
        horas_trabajo.innerHTML = `${horas}h ${minutos}m ${segundos}s`;
        //horas_trabajo.innerHTML = `${horas_de_trabajo} h`;
        corriente.innerHTML = `${corriente_de_motor} A`;
        alarma.innerHTML = `${estado_alarma}`;
        mem_sd.innerHTML = `${estado_sd}`;
        bateria.innerHTML = `${voltage_bat_0_100} %`;
    } else {
        console.log("variables de sistema err:", response.status);
    }

}
//extraer_variables_de_sistema();
//setInterval(extraer_variables_de_sistema, 2000);