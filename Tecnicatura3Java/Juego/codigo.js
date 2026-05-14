let triunfos = 0
let perdidas = 0



function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function convertirEleccion(numero){

    if(numero == 1){
        return "Piedra 🪨"
    }
    else if(numero == 2){
        return "Papel 📄"
    }
    else{
        return "Tijera ✂️"
    }
}

function convertirEmoji(numero){

    if(numero == 1){
        return "✊"
    }
    else if(numero == 2){
        return "✋"
    }
    else{
        return "✌️"
    }
}


function jugar(jugador){

    // Evita seguir jugando si ya terminó
    if(triunfos == 3 || perdidas == 3){
        return
    }

    let pc = aleatorio(1,3)
    document.getElementById("manoPc").innerHTML =
    convertirEmoji(pc)

    document.getElementById("manoJugador").innerHTML =
    convertirEmoji(jugador)

    let mensaje = ""

    // EMPATE
    if(jugador == pc){
        mensaje = "Empate 😐"
    }

    // GANAR
    else if(
        jugador == 1 && pc == 3 ||
        jugador == 2 && pc == 1 ||
        jugador == 3 && pc == 2
    ){
        mensaje = "Ganaste esta ronda 🎉"
        triunfos++
    }

    // PERDER
    else{
        mensaje = "Perdiste esta ronda 😢"
        perdidas++
    }

    // Mostrar resultado
    document.getElementById("mensaje").innerHTML =
    "PC eligió " + convertirEleccion(pc) +
    "<br>Tú elegiste " + convertirEleccion(jugador) +
    "<br><strong>" + mensaje + "</strong>"

    // Actualizar marcador
    document.getElementById("marcador").innerHTML =
    "✅ Victorias: " + triunfos +
    " | ❌ Derrotas: " + perdidas

    // Verificar fin del juego
    if(triunfos == 3){

        document.getElementById("mensaje").innerHTML +=
        "<br><br>🏆 ¡GANASTE LA PARTIDA!"

        desactivarBotones()
    }

    else if(perdidas == 3){

        document.getElementById("mensaje").innerHTML +=
        "<br><br>💀 PERDISTE LA PARTIDA"

        desactivarBotones()
    }
}

// Deshabilita botones
function desactivarBotones(){

    document.getElementById("btnPiedra").disabled = true
    document.getElementById("btnPapel").disabled = true
    document.getElementById("btnTijera").disabled = true
}

// Reiniciar juego
function reiniciarJuego(){

    triunfos = 0
    perdidas = 0

    document.getElementById("mensaje").innerHTML =
    "Elige una opción"

    document.getElementById("marcador").innerHTML =
    "✅ Victorias: 0 | ❌ Derrotas: 0"

    document.getElementById("btnPiedra").disabled = false
    document.getElementById("btnPapel").disabled = false
    document.getElementById("btnTijera").disabled = false
}