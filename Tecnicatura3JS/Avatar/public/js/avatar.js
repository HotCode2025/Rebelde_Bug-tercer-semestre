/* Tarea
 function seleccionarPersonajeJugador() {

    let inputZuko = document.getElementById('zuko')
    let inputKatara = document.getElementById('katara')
    let inputAang = document.getElementById('aang')
    let inputToph = document.getElementById('toph')

    if (inputZuko.checked) {
        alert('Seleccionaste a Zuko 🔥')
    }
    else if (inputKatara.checked) {
        alert('Seleccionaste a Katara 💧')
    }
    else if (inputAang.checked) {
        alert('Seleccionaste a Aang 💨')
    }
    else if (inputToph.checked) {
        alert('Seleccionaste a Toph 🌱')
    }
    else {
        alert('Selecciona un personaje')
    }
}

let botonPersonajeJugador = document.getElementById('boton-personaje')

botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);*/


//Ocultamos la sección ataques al iniciar el juego:

let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')

sectionSeleccionarAtaque.style.display = 'none'


//Mejora para llamar al html que muestre el personaje al seleccionarlo:

function seleccionarPersonajeJugador() {

    //Mostramos la sección ataque cuando elige personaje:
    sectionSeleccionarAtaque.style.display = 'block'

    let inputZuko = document.getElementById('zuko')
    let inputKatara = document.getElementById('katara')
    let inputAang = document.getElementById('aang')
    let inputToph = document.getElementById('toph')

    let personajeJugador = document.getElementById('personaje-jugador')

    if (inputZuko.checked) {
        personajeJugador.innerHTML = 'Seleccionaste a Zuko 🔥'
        ataqueAleatorioEnemigo()
    }
    else if (inputKatara.checked) {
        personajeJugador.innerHTML = 'Seleccionaste a Katara 💧'
        ataqueAleatorioEnemigo()
    }
    else if (inputAang.checked) {
        personajeJugador.innerHTML = 'Seleccionaste a Aang 💨'
        ataqueAleatorioEnemigo()
    }
    else if (inputToph.checked) {
        personajeJugador.innerHTML = 'Seleccionaste a Toph 🌱'
        ataqueAleatorioEnemigo()
    }
    else {
        personajeJugador.innerHTML = 'Selecciona un personaje'
    }
}

let botonPersonajeJugador = document.getElementById('boton-personaje')

botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)


//Función para que el ataque sea aleatorio entre los 4 elementos:
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function ataqueAleatorioEnemigo() {

    let ataqueAleatorio = aleatorio(1,4)

    let ataqueEnemigo = document.getElementById('ataque-enemigo')

    if (ataqueAleatorio == 1) {
        ataqueEnemigo.innerHTML = 'El enemigo atacó con Fuego 🔥'
    }
    else if (ataqueAleatorio == 2) {
        ataqueEnemigo.innerHTML = 'El enemigo atacó con Agua 💧'
    }
    else if (ataqueAleatorio == 3) {
        ataqueEnemigo.innerHTML = 'El enemigo atacó con Tierra 🌱'
    }
    else {
        ataqueEnemigo.innerHTML = 'El enemigo atacó con Aire 💨'
    }
}