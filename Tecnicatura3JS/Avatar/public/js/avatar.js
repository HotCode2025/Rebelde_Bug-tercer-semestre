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

// Función principal que arranca el juego cuando el HTML está totalmente cargado
function iniciarJuego() {
    // 1. Vinculamos las secciones y botones del HTML
    sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    botonPersonajeJugador = document.getElementById('boton-personaje')

    // 2. Ocultamos la sección de ataques al inicio
    sectionSeleccionarAtaque.style.display = 'none'

    // 3. Escuchamos el click para elegir personaje
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)
}

// Función para mostrar el personaje seleccionado y activar el ataque enemigo
function seleccionarPersonajeJugador() {
    let inputZuko = document.getElementById('zuko')
    let inputKatara = document.getElementById('katara')
    let inputAang = document.getElementById('aang')
    let inputToph = document.getElementById('toph')
    let personajeJugador = document.getElementById('personaje-jugador')

    // Variable para verificar si el usuario realmente eligió a alguien
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

    // Solo si seleccionó un personaje válido, mostramos los ataques y responde el enemigo
    if (seSeleccionoPersonaje) {
        sectionSeleccionarAtaque.style.display = 'block'
        ataqueAleatorioEnemigo()
    }
}

// Función para que el ataque sea aleatorio entre los 4 elementos
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 4)
    let ataqueEnemigo = document.getElementById('ataque-enemigo')

    if (ataqueAleatorio == 1) {
        ataqueEnemigo.innerHTML = 'El enemigo atacó con Fuego 🔥'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo.innerHTML = 'El enemigo atacó con Agua 💧'
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo.innerHTML = 'El enemigo atacó con Tierra 🌱'
    } else {
        ataqueEnemigo.innerHTML = 'El enemigo atacó con Aire 💨'
    }
}

// ESCUCHADOR GLOBAL: Llama a iniciarJuego cuando el HTML está listo
window.addEventListener('load', iniciarJuego)