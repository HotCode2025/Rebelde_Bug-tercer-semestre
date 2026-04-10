// ==========================================
// SISTEMA DE VENTA DE COMPUTADORAS
// Programación Orientada a Objetos en JS
// ==========================================


// ==========================================
// CLASE PADRE: DispositivoEntrada
// Representa un dispositivo genérico
// ==========================================
class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    // Tipo de conexión (USB, Bluetooth, etc.)
    this.tipoEntrada = tipoEntrada;

    // Marca del dispositivo
    this.marca = marca;
  }
}


// ==========================================
// CLASE HIJA: Teclado
// Hereda de DispositivoEntrada
// ==========================================
class Teclado extends DispositivoEntrada {

  // Contador estático para generar IDs únicos
  static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    // Llama al constructor del padre
    super(tipoEntrada, marca);

    // Genera ID automático
    this.idTeclado = ++Teclado.contadorTeclados;
  }

  // Método para mostrar información del teclado
  toString() {
    return `Teclado [id: ${this.idTeclado}, tipo: ${this.tipoEntrada}, marca: ${this.marca}]`;
  }
}


// ==========================================
// CLASE HIJA: Raton
// Hereda de DispositivoEntrada
// ==========================================
class Raton extends DispositivoEntrada {

  // Contador estático para IDs
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this.idRaton = ++Raton.contadorRatones;
  }

  // Método para mostrar información
  toString() {
    return `Ratón [id: ${this.idRaton}, tipo: ${this.tipoEntrada}, marca: ${this.marca}]`;
  }
}


// ==========================================
// CLASE: Monitor
// No hereda, es independiente
// ==========================================
class Monitor {

  // Contador de monitores
  static contadorMonitores = 0;

  constructor(marca, tamanio) {
    this.idMonitor = ++Monitor.contadorMonitores;
    this.marca = marca;
    this.tamanio = tamanio;
  }

  // Método para mostrar datos del monitor
  toString() {
    return `Monitor [id: ${this.idMonitor}, marca: ${this.marca}, tamaño: ${this.tamanio}]`;
  }
}


// ==========================================
// CLASE: Computadora
// Composición: tiene monitor, teclado y ratón
// ==========================================
class Computadora {

  static contadorComputadoras = 0;

  constructor(nombre, monitor, teclado, raton) {
    this.idComputadora = ++Computadora.contadorComputadoras;

    // Nombre de la computadora
    this.nombre = nombre;

    // Componentes asociados
    this.monitor = monitor;
    this.teclado = teclado;
    this.raton = raton;
  }

  // Método para mostrar la computadora completa
  toString() {
    return `
Computadora [id: ${this.idComputadora}, nombre: ${this.nombre}]
  ${this.monitor.toString()}
  ${this.teclado.toString()}
  ${this.raton.toString()}
`;
  }
}


// ==========================================
// CLASE: Orden
// Permite agrupar varias computadoras
// ==========================================
class Orden {

  static contadorOrdenes = 0;

  constructor() {
    this.idOrden = ++Orden.contadorOrdenes;

    // Arreglo para almacenar computadoras
    this.computadoras = [];
  }

  // Método para agregar una computadora
  agregarComputadora(computadora) {
    this.computadoras.push(computadora);
  }

  // Método para mostrar toda la orden
  mostrarOrden() {
    console.log(`Orden: ${this.idOrden}`);

    this.computadoras.forEach((compu) => {
      console.log(compu.toString());
    });
  }
}


// ==========================================
// PRUEBA DEL SISTEMA (instanciación)
// ==========================================

// Creamos dispositivos
let teclado1 = new Teclado("USB", "Logitech");
let raton1 = new Raton("USB", "HP");

// Creamos monitor
let monitor1 = new Monitor("Samsung", "24 pulgadas");

// Creamos computadora
let computadora1 = new Computadora(
  "PC Gamer",
  monitor1,
  teclado1,
  raton1
);

// Creamos orden
let orden1 = new Orden();

// Agregamos computadora a la orden
orden1.agregarComputadora(computadora1);

// Mostramos el resultado
orden1.mostrarOrden();


// ==========================================
// CORRECCIONES DEL DIAGRAMA UML
// ==========================================

// - Se corrigió el nombre de la clase "Computadoras" a "Computadora" (singular)
// - Se agregó herencia: Teclado y Raton ahora extienden de DispositivoEntrada
// - Se corrigieron responsabilidades de las clases
// - Se implementó composición en la clase Computadora
// - Se agregó la clase Orden con un arreglo de computadoras