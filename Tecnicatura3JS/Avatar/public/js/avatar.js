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

// Variables globales de las secciones y botones
let sectionSeleccionarAtaque
let botonPersonajeJugador

// NUEVAS VARIABLES: Botones de ataque del jugador
let botonFuego
let botonAgua
let botonTierra
let botonAire

// NUEVAS VARIABLES: Para guardar los ataques que se eligen
let ataqueJugador
let ataqueEnemigo

// Función principal que arranca el juego cuando el HTML está totalmente cargado
function iniciarJuego() {
    sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    botonPersonajeJugador = document.getElementById('boton-personaje')

    // 1. Vinculamos los botones de ataque del HTML a JS
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botonAire = document.getElementById('boton-aire')

    // 2. Ocultamos la sección de ataques al inicio
    sectionSeleccionarAtaque.style.display = 'none'

    // 3. Escuchamos los clics
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)
    
    // Escuchamos los clics de los botones de ataque
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonAire.addEventListener('click', ataqueAire)
}

// Función para seleccionar el personaje
function seleccionarPersonajeJugador() {
    let inputZuko = document.getElementById('zuko')
    let inputKatara = document.getElementById('katara')
    let inputAang = document.getElementById('aang')
    let inputToph = document.getElementById('toph')
    let personajeJugador = document.getElementById('personaje-jugador')

    let seSeleccionoPersonaje = true

    if (inputZuko.checked) {
        personajeJugador.innerHTML = 'Seleccionaste a Zuko 🔥'
    } else if (inputKatara.checked) {
        personajeJugador.innerHTML = 'Seleccionaste a Katara 💧'
    } else if (inputAang.checked) {
        personajeJugador.innerHTML = 'Seleccionaste a Aang 💨'
    } else if (inputToph.checked) {
        personajeJugador.innerHTML = 'Seleccionaste a Toph 🌱'
    } else {
        personajeJugador.innerHTML = 'Selecciona un personaje'
        seSeleccionoPersonaje = false
    }

    if (seSeleccionoPersonaje) {
        sectionSeleccionarAtaque.style.display = 'block'
    }
}

// NUEVAS FUNCIONES: Qué pasa cuando el jugador presiona un ataque
function ataqueFuego() {
    ataqueJugador = 'FUEGO 🔥'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA 💧'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA 🌱'
    ataqueAleatorioEnemigo()
}

function ataqueAire() {
    ataqueJugador = 'AIRE 💨'
    ataqueAleatorioEnemigo()
}

// Función para el ataque aleatorio del enemigo
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 4)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO 🔥'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA 💧'
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = 'TIERRA 🌱'
    } else {
        ataqueEnemigo = 'AIRE 💨'
    }

    // Llamamos a una función nueva para mostrar el resultado en el historial
    crearMensaje()
}

// NUEVA FUNCIÓN: Muestra en el HTML qué atacó cada uno
function crearMensaje() {
    let sectionMensajes = document.getElementById('mensajes')
    
    // Creamos un nuevo párrafo en el historial de mensajes
    let parrafo = document.createElement('p')
    parrafo.innerHTML = `Atacaste con ${ataqueJugador}, el enemigo atacó con ${ataqueEnemigo}`
    
    sectionMensajes.appendChild(parrafo)
}

// ESCUCHADOR GLOBAL
window.addEventListener('load', iniciarJuego)