//3.1 Vamos a seguir trabajando en el código que tenemos con las clases de Empleado y Gerente, vamos a 
// crear un nuevo método, para conocer el polimorfismo:

class Empleado {
    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    
    obtenerDetalles() {
        return `Nombre: ${this._nombre}, Sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    
    obtenerDetalles() {
        return `Nombre: ${this._nombre}, Sueldo: ${this._sueldo}, Departamento: ${this._departamento}`;
    }

    // agregamos la sobreescritura
    obtenerDetalles() {
        return super.obtenerDetalles() + `, Departamento: ${this._departamento}`;
    }
}
//trabajamos con polimorfismo 
function imprimir(tipo){ //recibe una variable
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log("Es un gerente");
    }else if(tipo instanceof Empleado){
        console.log("Es un empleado");
    }else if(tipo instanceof Object){ //el orden siempre es jerarquico
        console.log("Es un objeto");
    }
}



let Gerente1 = new Gerente("Jcarlos", 5000, "Ventas");
console.log(Gerente1); //objeto de la clase hija

let empleado1 = new Empleado("Juan", 1000);
console.log(empleado1); //objeto de la clase padre

imprimir(Gerente1);
imprimir(empleado1);