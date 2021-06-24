// Css and Scss added to entry point
import "./download.css";
import "./bootstrap.scss";

var descarga_sd = document.getElementById("descarga_sd");
var descarga_disp = document.getElementById("descarga_disp");

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    } else {
        pom.click();
    }
}
async function descarga(_destino) {

    console.log("destino:", _destino);

    let data = {
        destino: _destino
    };
    console.log(data);

    var response = await fetch("http://192.168.4.1/descarga", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200) {
        if (_destino === "dispositivo") {
            var texto = await response.text();
            download('alarmas.csv', texto);
        }

        console.log("status 200 descarga");

        if (_destino === "SD") {
            alert("OK");
        }
    } else {
        alert(`Descarga en ${_destino}: error`);
    }

}

descarga_sd.onclick = () => { descarga("SD") };
descarga_disp.onclick = () => { descarga("dispositivo") };