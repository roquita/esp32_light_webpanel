//************************** HOROMETRO *****************//

var horometro_enviar = document.getElementById("configuracion_horometro_enviar");
var alarma1 = document.getElementById("alarma1");
var alarma2 = document.getElementById("alarma2");
var alarma3 = document.getElementById("alarma3");
var alarma4 = document.getElementById("alarma4");
var TAG1 = document.getElementById("tag1");
var TAG2 = document.getElementById("tag2");
var TAG3 = document.getElementById("tag3");
var TAG4 = document.getElementById("tag4");
var horometro_info = document.getElementById("horometro_info");

var body;

function isNumeric(value) {
    return /^\d+$/.test(value);
}

horometro_info.onclick = async function() {
    let data = {
        seccion: "extraer"
    };


    var response = await fetch("http://192.168.4.1/horometro", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200) {
        body = await response.json();

        console.log("____body:", body);

        $('#horometro_info').popover({
            content: function() {
                var message = "Alarma 1(" + body["alarma_0"]["tag"] + "): " + body["alarma_0"]["h_acumuladas"].toFixed(0) + "/" + body["alarma_0"]["h_programadas"] + ".<br/>";
                message += "Alarma 2(" + body["alarma_1"]["tag"] + "): " + body["alarma_1"]["h_acumuladas"].toFixed(0) + "/" + body["alarma_1"]["h_programadas"] + ".<br/>";
                message += "Alarma 3(" + body["alarma_2"]["tag"] + "): " + body["alarma_2"]["h_acumuladas"].toFixed(0) + "/" + body["alarma_2"]["h_programadas"] + ".<br/>";
                message += "Alarma 4(" + body["alarma_3"]["tag"] + "): " + body["alarma_3"]["h_acumuladas"].toFixed(0) + "/" + body["alarma_3"]["h_programadas"] + ".<br/>";
                return message;
            }
        });
    } else {
        console.log("extraer horometro_info status_code:", response.status);
    }
}

horometro_enviar.onclick = async function() {
    console.log("horoemtro enviar boton");

    let data = {
        seccion: "alarmas"
    };

    var integer1 = parseInt(alarma1.value, 10);
    var integer2 = parseInt(alarma2.value, 10);
    var integer3 = parseInt(alarma3.value, 10);
    var integer4 = parseInt(alarma4.value, 10);

    if (isNumeric(alarma1.value) === true) {
        if (integer1 <= 2000 && integer1 >= 1) {
            data["horas1"] = integer1;
        } else {
            alert("Alarma-1 entre una y dos mil horas.");
            return;
        }
    }
    if (isNumeric(alarma2.value) === true) {
        if (integer2 <= 2000 && integer2 >= 1) {
            data["horas2"] = integer2;
        } else {
            alert("Alarma-2 entre una y dos mil horas.");
            return;
        }
    }
    if (isNumeric(alarma3.value) === true) {
        if (integer3 <= 2000 && integer3 >= 1) {
            data["horas3"] = integer3;
        } else {
            alert("Alarma-3 entre una y dos mil horas.");
            return;
        }
    }
    if (isNumeric(alarma4.value) === true) {
        if (integer4 <= 2000 && integer4 >= 1) {
            data["horas4"] = integer4;
        } else {
            alert("Alarma-4 entre una y dos mil horas.");
            return;
        }
    }

    console.log("integer1:", integer1);
    console.log("integer2:", integer2);
    console.log("integer3:", integer3);
    console.log("integer4:", integer4);

    console.log(TAG1.value);
    console.log(TAG2.value);
    console.log(TAG3.value);
    console.log(TAG4.value);


    if (TAG1.value.length > 10) {
        alert("TAG1 debe tener máximo 10 carácteres.");
        return;
    }
    if (TAG1.value.length >= 1) {
        data["tag1"] = TAG1.value;
    }


    if (TAG2.value.length > 10) {
        alert("TAG2 debe tener máximo 10 carácteres.");
        return;
    }
    if (TAG2.value.length >= 1) {
        data["tag2"] = TAG2.value;
    }


    if (TAG3.value.length > 10) {
        alert("TAG3 debe tener máximo 10 carácteres.");
        return;
    }
    if (TAG3.value.length >= 1) {
        data["tag3"] = TAG3.value;
    }


    if (TAG4.value.length > 10) {
        alert("TAG4 debe tener máximo 10 carácteres.");
        return;
    }
    if (TAG4.value.length >= 1) {
        data["tag4"] = TAG4.value;
    }

    console.log("data:", data);

    if (Object.keys(data).length === 0) {
        console.log("data vacia");
    } else {
        console.log("data con datos Gaaa");

        var response = await fetch("http://192.168.4.1/horometro", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            alert("OK.");
        } else {
            alert("Actualizar alarmas: error");
        }
    }

};


//***************  MOTOR ID   ***************************//

var configuracion_motorID_btn = document.getElementById("configuracion_motorID_btn");
var motorID = document.getElementById("motorID");

configuracion_motorID_btn.onclick = async function() {
    console.log("motor ID button");
    console.log(motorID.value);

    if (motorID.value.length <= 0 || motorID.value.length > 8) {
        alert("Máximo 8 carácteres y mínimo 1 caracter.");
        return;
    }

    let data = {
        seccion: "id",
        id: motorID.value
    };

    var response = await fetch("http://192.168.4.1/horometro", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200) {
        alert("OK.");
    } else {
        alert("Cambiar id: error");
    }
};


//***************  HOROMETRO BORRAR SEGUNDOS   ***************************//

var horometro_borrar = document.getElementById("horometro_borrar");

horometro_borrar.onclick = async function() {

    let data = {
        seccion: "borrar_segundos"
    };

    var response = await fetch("http://192.168.4.1/horometro", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200) {
        alert("OK.");
    } else {
        alert("Cambiar id: error");
    }
};