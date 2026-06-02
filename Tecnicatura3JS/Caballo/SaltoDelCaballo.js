// ---------------------------------------------
// El usuario ingresa la posición inicial del caballo
// y el programa muestra los movimientos posibles.
// ---------------------------------------------

// Importamos la librería para leer datos desde consola
const prompt = require("prompt-sync")();

// Clase Tablero: representa el tablero de ajedrez
class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;
    }

    // Verifica si una posición está dentro del tablero
    esValida(x, y) {
        return (x >= 0 && x < this.filas && y >= 0 && y < this.columnas);
    }
}

// Clase Caballo: representa al caballo y sus movimientos
class Caballo {
    constructor(tablero) {
        this.tablero = tablero;
        // Movimientos posibles del caballo (forma de L)
        this.movimientos = [
            [2, 1], [1, 2], [-1, 2], [-2, 1],
            [-2, -1], [-1, -2], [1, -2], [2, -1]
        ];
    }

    // Calcula movimientos válidos desde una posición
    movimientosPosibles(x, y) {
        let posibles = [];
        for (let [dx, dy] of this.movimientos) {
            let nx = x + dx;
            let ny = y + dy;
            if (this.tablero.esValida(nx, ny)) {
                posibles.push([nx, ny]);
            }
        }
        return posibles;
    }
}

// ---------------------------------------------
// Ejecución del programa
// ---------------------------------------------

// Creamos tablero 8x8
let tablero = new Tablero(8, 8);
let caballo = new Caballo(tablero);

// Pedimos al usuario la posición inicial
let inicioX = parseInt(prompt("Ingrese la fila inicial (0-7): "));
let inicioY = parseInt(prompt("Ingrese la columna inicial (0-7): "));

// Calculamos movimientos posibles
let movimientos = caballo.movimientosPosibles(inicioX, inicioY);

// Mostramos resultados
console.log(`\nEl caballo en (${inicioX}, ${inicioY}) puede moverse a:`);
movimientos.forEach(([x, y]) => {
    console.log(`→ (${x}, ${y})`);
});
