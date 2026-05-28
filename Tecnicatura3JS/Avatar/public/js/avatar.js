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

/* Borrador de correccion:

// Variables globales de las secciones
let sectionSeleccionarAtaque
let botonPersonajeJugador

// Función principal que arranca el juego cuando el HTML está totalmente cargado
function iniciarJuego() {
    // 1. Vinculamos las secciones del HTML
    sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    botonPersonajeJugador = document.getElementById('boton-personaje')

    // 2. Ocultamos la sección de ataques al inicio
    sectionSeleccionarAtaque.style.display = 'none'

    // 3. Escuchamos el click para elegir personaje
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)
}

function seleccionarPersonajeJugador() {
    let inputZuko = document.getElementById('zuko')
    let inputKatara = document.getElementById('katara')
    let inputAang = document.getElementById('aang')
    let inputToph = document.getElementById('toph')
    let personajeJugador = document.getElementById('personaje-jugador')

    // Validamos que el usuario haya seleccionado una opción activa
    if (inputZuko.checked) {
        personajeJugador.innerHTML = 'Seleccionaste a Zuko 🔥'
        sectionSeleccionarAtaque.style.display = 'block' // Mostramos ataques
        ataqueAleatorioEnemigo()
    }
    else if (inputKatara.checked) {
        personajeJugador.innerHTML = 'Seleccionaste a Katara 💧'
        sectionSeleccionarAtaque.style.display = 'block'
        ataqueAleatorioEnemigo()
    }
    else if (inputAang.checked) {
        personajeJugador.innerHTML = 'Seleccionaste a Aang 💨'
        sectionSeleccionarAtaque.style.display = 'block'
        ataqueAleatorioEnemigo()
    }
    else if (inputToph.checked) {
        personajeJugador.innerHTML = 'Seleccionaste a Toph 🌱'
        sectionSeleccionarAtaque.style.display = 'block'
        ataqueAleatorioEnemigo()
    }
    else {
        personajeJugador.innerHTML = '⚠️ Por favor, selecciona un personaje'
    }
}

// Función matemática para generar números aleatorios
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 4)
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

// ESCUCHADOR GLOBAL: Llama a iniciarJuego cuando el HTML está listo
window.addEventListener('load', iniciarJuego) *\

