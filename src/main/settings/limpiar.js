var memoriaInterna_borrar = document.getElementById("memoriaInterna_borrar");
var memoriaSD_borrar = document.getElementById("memoriaSD_borrar");
var pantalla_borrar = document.getElementById("pantalla_borrar");

memoriaInterna_borrar.onclick = async function() {
    console.log("borrar memoria interna(eeprom)");
    let data = {
        memoria: "eeprom"
    };

    var response = await fetch("http://192.168.4.1/borrar_memoria", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200) {
        alert("OK.");
    } else {
        alert("Borrar memoria interna: error");
    }
};

memoriaSD_borrar.onclick = async function() {
    console.log("borrar memoria externa(SD)");

    let data = {
        memoria: "SD"
    };

    var response = await fetch("http://192.168.4.1/borrar_memoria", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200) {
        alert("OK.");
    } else {
        alert("Borrar memoria externa: error");
    }
};

pantalla_borrar.onclick = async function() {
    console.log("borrar pantalla");

    let data = {
        memoria: "pantalla"
    };

    var response = await fetch("http://192.168.4.1/borrar_memoria", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200) {
        alert("OK.");
    } else {
        alert("Borrar pantalla: error");
    }
};