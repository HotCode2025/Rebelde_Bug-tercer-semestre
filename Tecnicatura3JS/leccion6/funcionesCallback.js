// 6.1 Funciones callback, a continuación una imagen para pensar video119
// 6.2 Función setTimeout video 2
miFuncion();
miFuncion2(); // se ejecuta despues que termina miFuncion

function miFuncion() {
    console.log("funcion 1");
   
}

function miFuncion2() {
    console.log("funcion 2");
}

//funcion de tipo callback

function imprimir(mensaje) {
    console.log(mensaje);
    
}

function suma(op1, op2, callback) {
    let resultado = op1 + op2;
    callback(`resultado: ${resultado}`);
}


suma(5, 3, imprimir);

// llamadas asincronas con uso setTimeout

function miFuncionCallback() {
    console.log("Saludo asincronico despues de 3 segundos");
    
}

setTimeout(miFuncionCallback, 3000);

setTimeout( function() {
    console.log("saludo asincrono 2");
    
}, 4000);

setTimeout(() => {
    console.log("saludo asincrono 3");
    
}, 5000);


let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
    
}

setInterval(reloj, 1000); // cada 1 segundo se ejecuta la funcion reloj