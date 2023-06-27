//Escribe una función que muestre por consola "Hello World" ------------>


function sayhello(){

console.log("hello world!");


}
//ahora es cuando invoco mi funcion
sayhello(); 
//--------------------------------------

//alert("habla loco")

//-------------------------------------->

//Ejercicio N2
//Escribe una función que devuelva el cuadrado de un número:
function cuadrado(potencia){
    console.log(potencia**2);
   //return potencia**2;

    
}
cuadrado(4);

// --------------------------------------

// Escribe una función que acepte un nombre como parámetro y salude específicamente a esa persona.
// Ejemplo: "Hi, Anna".

function diname(persona){
    console.log("hi"+", "+persona);

}
diname("oscar");

// ejemplo_004
// Escribe una función que reciba dos parámetros, el nombre y el apellido, y devuelva el nombre completo.

function DescribeName(nombre,apellido){
    return nombre + apellido
}    
let result = DescribeName("oscar"," "+"rodriguez");
console.log(result);

// Ejercicio_005
// Escribe una función que acepte la medida de los dos lados de un rectángulo y devuelva el área de dicho rectángulo. Si no se le pasa ningún parámetro, los lados deberán ser, por defecto, 5 y 3.

function medida(largo = 5, ancho = 3){
    // let area;
    return  largo * ancho;

}
console.log(medida(2));
//medida(3,2);

// ejercicio_006
// Escribe una función que acepte grados Celsius y devuelva la conversión a grados Fahrenheit.

function grados (celsius){
//formula (celsius * 9 / 5) + 32;
    //habia que declarar la variable para que me almacene el resultado de la conversion.
    let farenhit =  (celsius * 9 / 5) + 32;

    console.log(farenhit);


}
grados(5);


// EJERCICIO_007
// Escribe una función que acepte dos números, un mínimo y un máximo, y devuelva un número aleatorio entre dichos números. Para ello, tendrás que descubrir cómo funciona el método Math.random().

function numero(min,max){

    console.log(Math.random()*(max - min)+min);


}
numero(2,6);

// EJERCICIO_008
// Escribe una función que calcule el área de un círculo si se le proporciona el radio.
function area(radius){
    let PI = 3.14;
    
   let respuesta = PI * radius**2;
    console.log(respuesta);

}
area(3);


// EJERCICIO_009;
// El Índice de Masa Corporal (IMC) se calcula del siguiente modo: peso (en kilogramos) / altura al cuadrado (en metros). Escribe una función que acepte ambos datos y calcule el IMC. A countinuación, deberá devolver un log con lo recibido.

function masacorporal(peso,altura){
    let imc = peso / altura**2;
       
    console.log(imc);

}
masacorporal(80,165);



// EJERCICIO_010
// Escribe una función que acepte un dato y compruebe qué tipo de dato es. Tienes que usar un prompt para pedir dichio dato.

function dato(num){
    //parseInt(num);

    console.log(num);    
}
dato = prompt("introduce un numero:");

//dato(parseInt( prompt("introduce un numero:")));

// EJERCICIO_012
// Escribe una función que te adivine el futuro. Recibirá como parámetros:

// Número de hijos.
// Nombre de la pareja.
// Nombre de una ciudad.
// Un trabajo.
//  La función devolverá "Trabajarás en <<ciudad>>, trabajando como <<trabajo>>, y tendrás <<número de hijos>> hijos con <<pareja>>.". Deberás usar template literals para ello.

function futuro(hijos,pareja,ciudad,trabajo) {

    let dato1 = `trabajas en ${ciudad}, trabajando como: ${trabajo}, y tendras: ${hijos} hijos con ${pareja} `;
    console.log(dato1);
}
futuro(2,'maria','madrid','developer');

// return `trabajas en ${ciudad}, trabajando como: ${trabajo}, y tendras: ${hijos} hijos con ${pareja} `

// console.log(futuro(2,'maria','madrid','developer'));



