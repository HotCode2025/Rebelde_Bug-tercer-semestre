function actualizarReloj() {

    let fecha = new Date();

    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    let horaActual = horas + ":" + minutos + ":" + segundos;

    document.getElementById("reloj").textContent = horaActual;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();