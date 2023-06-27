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

// alert("hola mundo")
// --------------------------------------->
// b) Crea una función que recoja ese array por parámetro de entrada.

function guardarArray(myArray,dato) {
    return myArray;
    

    
}   
console.log(guardarArray);


    
    



// c) Cambia el primer valor del array por el doble del valor que tenga.




// 2.
// a) Crea una función que recoja dos parámetros de entrada.
// b) Uno será un número random entre el 0 y el 1, mientras que el otro será un numero que elegirá el usuario

function convertir(min,max, user) { 
    console.log(Math.random()*(max-min)+min);
    user = prompt("introduce un numero:")

    let result = min * max;
    console.log(result);

    
}
convertir(5,4);

// c) Multiplica los dos parámetros de entrada y haz un log del resultado


