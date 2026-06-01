
miFuncion();
function miFuncion(){
    console.log('Saludos desde mi funcion')
}
miFuncion();

let myFuncion = function(){
    console.log('Saludos desde la funcion anonima')
}

//Ahora vamos a crear una funcion flecha
let miFuncionFleche = () => {
    console.log('Saludos desde mi funcion flecha');
}

//Hay mas variantes para funciones flecha que vamos a ir viendo
miFuncionFlecha()

//lo hacemos en una sola linea
const saludar = () => console.log('Saludos a todos desde esta funcion flecha');
saludar();

//otro ejemplo
const saludar2 = () => {
    return 'Saludos desde la funcion flecha dods'
 
    

}
console.log(saludar2());


//simplificamos la funcion anterior

const saludar3 = () => 'Saludos desde la funcion flecha tres';
console.log(saludar3());

//continuamos con otro ejemplo
const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});

console.log(regresaObjeto())

//funciones flecha que reciben parametros
const funcionParametros = ( mensaje ) => console.log( mensaje );
funcionesParametros('saludos desde esta funcion con parametros');

//una funcion clásica
const funcionParametrosClasica = function( mensaje ){
    console.log( mensaje );
}
funcionParametrosClasica('Saludos desde la funcion clasica');

// se puede omitir los parentesis en la funcion flecha de la siguiente manera
const funcionConParamaetros = mensaje => console.log( mensaje );
funcionesConParametros('otra forma de trabajar con la funcion flecha');

// ahora vemos funcions flecha con varios parametros
const funcionConParametros2 = (op1, op2) => (op1 + op2) => {
    let resultado = op1 + op2;
    return resultado;
}
console.log(funcionConParamaetros2(3, 5));