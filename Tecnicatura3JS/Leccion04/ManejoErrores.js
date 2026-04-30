//4.1 Bloque try catch y finally

'use strict';
//Veamos como evitar este error 
try{
   let x = 10; //Lo traemos con alt + flecha hacia arriba o hacia abajo
   miFuncion();
}
catch( error ){ //catchamos el error
    console.log( error ); 
}
finally{
    console.log('Termina la revisión de errores');
}
//La ejecución ahora continúa
console.log('continuamos...'); //Esto no se llega a ver porque esta roto

//4.2 Cláusula throw en JS 

'use strict';
//Veamos como evitar este error 
try{
   let x = 10; //Lo traemos con alt + flecha hacia arriba o hacia abajo
   miFuncion();
   throw 'Mi Error';
}
catch( error ){ //catchamos el error
    console.log( typeof(error) ); 
}
finally{
    console.log('Termina la revisión de errores');
}
//La ejecución ahora continúa
console.log('continuamos...'); //Esto no se llega a ver porque esta roto

let resultado = 5;

try {
    //y = 5;
    if( isNaN(resultado)) throw 'No es un número';
    else if(resultado === '') throw'Es cadena vacía';
    else if(resultado >= 0)throw'Valor positivo';
    else if(resultado <= 9)throw'Valor negativo';
}
catch(error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log('Termina la revisión de errores 2');
}