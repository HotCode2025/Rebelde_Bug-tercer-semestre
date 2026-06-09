// -------------------------------
// CONFIGURACIÓN INICIAL
// -------------------------------

// Tamaño del tablero (8x8 casillas)
const boardSize = 8;

// Matriz que representa el tablero (se inicializa vacío)
let board = [];

// Los 8 posibles movimientos del caballo en ajedrez
const moves = [
  [2, 1], [1, 2], [-1, 2], [-2, 1],
  [-2, -1], [-1, -2], [1, -2], [2, -1]
];

// -------------------------------
// CREACIÓN DEL TABLERO
// -------------------------------

/**
 * Crea el tablero en pantalla y reinicia la matriz de control.
 * Cada casilla se dibuja como un <div> con color blanco o negro.
 */
function createBoard() {
  const boardDiv = document.getElementById("board");
  boardDiv.innerHTML = ""; // Limpia tablero previo
  board = Array.from({ length: boardSize }, () => Array(boardSize).fill(-1));

  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      const square = document.createElement("div");
      square.classList.add("square");
      // Alterna colores según la suma de coordenadas
      square.classList.add((x + y) % 2 === 0 ? "white" : "black");
      square.id = `square-${x}-${y}`; // ID único para cada casilla
      boardDiv.appendChild(square);
    }
  }
}

// -------------------------------
// VALIDACIÓN DE MOVIMIENTOS
// -------------------------------

/**
 * Verifica si un movimiento es válido:
 * - Dentro de los límites del tablero
 * - La casilla aún no ha sido visitada
 */
function isValidMove(x, y) {
  return x >= 0 && y >= 0 && x < boardSize && y < boardSize && board[y][x] === -1;
}

// -------------------------------
// ALGORITMO DE BACKTRACKING
// -------------------------------

/**
 * Algoritmo recursivo de vuelta atrás (backtracking).
 * Intenta recorrer todas las casillas del tablero.
 * @param {number} x - posición X actual
 * @param {number} y - posición Y actual
 * @param {number} moveCount - número de salto actual
 * @param {Array} path - secuencia de movimientos realizados
 */
function knightTour(x, y, moveCount, path) {
  board[y][x] = moveCount; // Marca casilla como visitada
  path.push([x, y]);       // Guarda el movimiento en el camino

  // Condición de éxito: recorrer todas las casillas
  if (moveCount === boardSize * boardSize - 1) {
    return true;
  }

  // Explora los 8 posibles movimientos
  for (const [dx, dy] of moves) {
    const nextX = x + dx;
    const nextY = y + dy;
    if (isValidMove(nextX, nextY)) {
      if (knightTour(nextX, nextY, moveCount + 1, path)) {
        return true;
      }
    }
  }

  // Si no hay solución, retrocede (backtracking)
  board[y][x] = -1;
  path.pop();
  return false;
}

// -------------------------------
// ANIMACIÓN DEL RECORRIDO
// -------------------------------

/**
 * Muestra el recorrido del caballo paso a paso en el tablero.
 * Usa setTimeout para simular el movimiento animado.
 */
function animatePath(path) {
  let i = 0;
  function step() {
    if (i < path.length) {
      const [x, y] = path[i];
      const square = document.getElementById(`square-${x}-${y}`);
      square.innerHTML = "♞"; // Dibuja el caballito
      square.classList.add("knight");
      i++;
      setTimeout(step, 400); // Velocidad de animación (ms)
    }
  }
  step();
}

// -------------------------------
// FUNCIÓN PRINCIPAL
// -------------------------------

/**
 * Inicia el recorrido del caballo desde (0,0).
 * Si encuentra solución, la anima en pantalla.
 */
function startKnightTour() {
  createBoard();
  const path = [];
  if (knightTour(0, 0, 0, path)) {
    animatePath(path);
  } else {
    alert("No se encontró solución.");
  }
}

// -------------------------------
// EJECUCIÓN AUTOMÁTICA AL CARGAR
// -------------------------------

window.onload = createBoard;
