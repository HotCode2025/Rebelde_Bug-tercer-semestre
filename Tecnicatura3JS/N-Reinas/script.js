// ========================================
// VARIABLE PARA N
// ========================================
let N;

// ========================================
// ARREGLO DE POSICIONES
// ========================================
let tablero = [];

// ========================================
// CONTENEDOR HTML DEL TABLERO
// ========================================
const contenedor = document.getElementById("tablero");


// ========================================
// FUNCION PARA DIBUJAR TABLERO
// ========================================
function dibujarTablero(){

    // Limpiar tablero
    contenedor.innerHTML = "";

    // Crear columnas dinámicas
    contenedor.style.gridTemplateColumns =
        `repeat(${N}, 1fr)`;

    // Recorrer filas
    for(let fila = 0; fila < N; fila++){

        // Recorrer columnas
        for(let columna = 0; columna < N; columna++){

            // Crear casilla
            let casilla = document.createElement("div");

            // Clase general
            casilla.classList.add("casilla");

            // Tamaño dinámico
            let tamaño = 80 / N;

            casilla.style.width = `${tamaño}vmin`;
            casilla.style.height = `${tamaño}vmin`;

            // Tamaño de reina dinámico
            // El tamaño puede quedar desproporcional debido la variacion del valor de N
            casilla.style.fontSize =
                `${80 / Math.sqrt(N)}px`;

            // Colores tipo ajedrez
            if((fila + columna) % 2 == 0){

                casilla.classList.add("blanca");

            }else{

                casilla.classList.add("negra");
            }

            // Verificar si hay reina
            if(tablero[fila] == columna){

                casilla.innerHTML = "♛";

                casilla.classList.add("reina");
            }

            // Agregar casilla
            contenedor.appendChild(casilla);
        }
    }

    // Mostrar arreglo actualizado
    document.getElementById("arreglo").innerHTML =
        "[" + tablero.join(", ") + "]";
}


// ========================================
// VERIFICAR SI UNA POSICION ES SEGURA
// ========================================
function esSeguro(fila, columna){

    // Revisar filas anteriores
    for(let i = 0; i < fila; i++){

        let otraColumna = tablero[i];

        // Misma columna
        if(otraColumna == columna){

            return false;
        }

        // Diagonales
        if(Math.abs(otraColumna - columna) ==
           Math.abs(i - fila)){

            return false;
        }
    }

    // Posición válida
    return true;
}


// ========================================
// FUNCION DE ESPERA PARA ANIMACION
// ========================================
function esperar(ms){

    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );
}


// ========================================
// FUNCION RECURSIVA BACKTRACKING
// ========================================
async function resolver(fila){

    // Caso base
    if(fila == N){

        return true;
    }

    // Probar todas las columnas
    for(let columna = 0; columna < N; columna++){

        // Verificar seguridad
        if(esSeguro(fila, columna)){

            // Colocar reina
            tablero[fila] = columna;

            // Dibujar tablero
            dibujarTablero();

            // Pausa animación
            await esperar(50);

            // Resolver siguiente fila
            if(await resolver(fila + 1)){

                return true;
            }

            // ========================================
            // BACKTRACKING
            // ========================================

            // Eliminar reina
            tablero[fila] = -1;

            // Redibujar
            dibujarTablero();

            // Pausa visual
            await esperar(50);
        }
    }

    // No encontró solución
    return false;
}


// ========================================
// FUNCION PRINCIPAL
// ========================================
async function iniciar(){

    // Obtener valor ingresado
    N = parseInt(
        document.getElementById("valorN").value
    );

    // Validar mínimo
    if(N < 4){

        alert("El valor mínimo es 4");

        return;
    }

    // Crear arreglo dinámico
    tablero = Array(N).fill(-1);

    // Desactivar botón
    document.getElementById("boton").disabled = true;

    // Mostrar estado
    document.getElementById("estado").innerHTML =
        "Resolviendo...";

    // Dibujar tablero vacío
    dibujarTablero();

    // Resolver problema
    await resolver(0);

    // Mostrar finalización
    document.getElementById("estado").innerHTML =
        "Solución encontrada";

    // Activar botón nuevamente
    document.getElementById("boton").disabled = false;
}


// ========================================
// DIBUJAR TABLERO VACIO AL INICIO
// ========================================
N = 8;

tablero = Array(N).fill(-1);

dibujarTablero();