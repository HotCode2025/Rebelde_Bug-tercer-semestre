function actualizarReloj() {

    const fechaActual = new Date();

    const dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ];

    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    // Hora
    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // Día y fecha
    const diaSemana = dias[fechaActual.getDay()];
    const dia = fechaActual.getDate();
    const mes = meses[fechaActual.getMonth()];
    const anio = fechaActual.getFullYear();

    // Mostrar hora
    document.getElementById("reloj").innerHTML =
        horas + ":" + minutos + ":" + segundos;

    // Mostrar día
    document.getElementById("dia").innerHTML =
        diaSemana;

    // Mostrar fecha
    document.getElementById("fecha").innerHTML =
        dia + " de " + mes + " de " + anio;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();