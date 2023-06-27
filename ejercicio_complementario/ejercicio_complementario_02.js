// 1.
// a) Crea un array de dos posiciones con números.....
// b) Crea una función que recoja ese array por parámetro de entrada
// c) Cambia el primer valor del array por el doble del valor que tenga
// d) retorna el resultado de obtener el resto de dividir la primera posicion con la segunda 
// e) Haz un log de la función

// 2.
// a) Crea una función que recoja dos parámetros de entrada
// b) Uno será un número random entre el 0 y el 1, mientras que el otro será un numero que elegirá el usuario
// c) Multiplica los dos parámetros de entrada y haz un log del resultado



//(01) crea un array de dos posiciones..
let  myArray = [90,52] 

console.log(myArray);  

function guardarArray(myArray,dato) {
    return myArray;
    
}   
guardarArray(myArray,5);
console.log(guardarArray(myArray));
 



// 2.
// a) Crea una función que recoja dos parámetros de entrada.
// b) Uno será un número random entre el 0 y el 1, mientras que el otro será un numero que elegirá el usuario
// c) Cambia el primer valor del array por el doble del valor que tenga.

function convertir(min,max) { 
    max = prompt("introduce un numero:");
    let result = (Math.random()*(max-min)+min);
    let multi = max * result;

    console.log(result);
    console.log(multi);
    
}
convertir(0,1);

// c) Multiplica los dos parámetros de entrada y haz un log del resultado


// a) Crea una función que tenga 2 parámetros de entrada
function operation(num1,num2) {
     
    return Math.random()*(num1-num2)+num1;

    
    
}
console.log(operation(5,8));
// b) Retorna un número random entre esos dos valores




// c) Crea otra función que tenga 1 parámetro de entrada 
function staroperation(operation) {
    return operation;
    
    
}console.log(staroperation(operation*(2)));
// d) utiliza lo que devuelve la primera función para multiplicar ese valor por el parámetro de entrada de la segunda
// e) Muestra por consola el resultado


