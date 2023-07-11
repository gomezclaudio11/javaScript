//EJERCICIO 1
//Ejercicio de suma de números pares: 
//Escribe un programa que sume todos los números pares del 1 al 100 e imprima el resultado.

let suma = 0

//iteramos del 1 al 100
for (let num = 1; num <=100 ; num++) {
  //verificamos si el numero es par
  if(num % 2 === 0) { // operador de modulo % devuelve el residuo de la division de dos numeros
    // sumar el numero par a la variable suma
    suma += num // += suma = suma + num
  }  
}
console.log(`la suma de los numeros pares del 1 al 100 es ${suma}`);

//2 
//Ejercicio de determinar el número mayor: 
//Escribe un programa que reciba tres números como entrada y determine cuál de ellos es el mayor.

let num1 = 3
let num2 = 52
let num3 = 8

let mayor = num1

if ( num2 > mayor){
  mayor = num2
}

if (num3 > mayor) {
  mayor = num3
}
console.log(`el numero mayor es ${mayor}`);

//EJERCICIO 3
//Ejercicio de números primos:  
//Escribe un programa que solicite al usuario un número y 
//determine si es un número primo o no.

let numero = parseInt ( prompt("ingrese un numero") )

//verificar si el numero es primo
let esPrimo = true;

if (numero === 1) {
  esPrimo = false;
} else if (numero > 1) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        esPrimo = false;
        break;
      }
    }
}
//imprimir en consola
if (esPrimo) {
  console.log(numero + " es un numero primo");
} else {
  console.log( numero+ " no es primo");
}

//ejercicio 4
//Ejercicio de factorial: 
//Escribe un programa que calcule el factorial de un número dado. 
//El factorial de un número se calcula multiplicando ese número por todos los enteros positivos menores que él.

let num4 = parseInt(prompt("ingrese un numero"));

//verificamos si el numero es valido
if(num4 < 0 ) {
  console.log("el numero no puede ser negativo");
} else {
  //CALCULAR EL FACTORIAL
  let factorial = 1;
  for(let i = 1; i<= num4; i++) {
    factorial *= i;
  }

  //imprimir el resultado
  console.log("el factorial de", num4, "es:", factorial);
}

// EJERCICIO 5
// Ejercicio de palíndromos:
//Escribe un programa que verifique si una palabra o frase ingresada por el usuario es un palíndromo. 
// Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha y de derecha a izquierda.

let palabra = prompt(" ingrese una palabra").toLowerCase()

/*
//explicacion de toLowerCase
let texto = "Hola Mundo";
let textoMinusculas = texto.toLowerCase();

console.log(textoMinusculas);//hola mundo
*/

//eliminar los espacios en blanco y los signos de puntuacion
palabra = palabra.replace(/\s+/g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

//expresiones regulares y signos de puntuaciones
//.replace(/\s+/g, ""): 
//este método de la cadena de texto se utiliza para reemplazar una coincidencia de un patrón con un nuevo valor. 
//En este caso, utilizamos una expresión regular /\s+/g como el patrón a buscar. 
//Esta expresión regular coincide con uno o más espacios en blanco en la cadena de texto. 
//Al pasar una cadena vacía "" como segundo argumento, 
//reemplazamos los espacios en blanco por una cadena vacía, eliminándolos. 
//El modificador g se utiliza para realizar el reemplazo de forma global en toda la cadena, 
//en lugar de detenerse en la primera coincidencia.

//.replace(/[.,\/#!$%\^&\*;:{}=\-_~()]/g, ""): 
//de manera similar al paso anterior, 
//esta parte del código utiliza otra expresión regular para buscar y reemplazar los signos de puntuación en la cadena de texto. 
//La expresión regular [.,/#!$%^&*;:{}=-_~()] coincide con cualquiera de los signos de puntuación dentro de los corchetes. 
//Al pasar una cadena vacía "" como segundo argumento, 
//eliminamos los signos de puntuación de la cadena. 
//Nuevamente, el modificador g se utiliza para realizar el reemplazo de forma global en toda la cadena.


//invertir la palabra o frase
let invertida = palabra.split("").reverse().join("")
//split(""): este método se utiliza para convertir la cadena de texto en un array de caracteres.
//reverse(): este método se utiliza para invertir el orden de los elementos en un array.
//join(""): este método se utiliza para unir los elementos de un array en una sola cadena de texto.

//verificar si la palabra o frase invertida es igual a la original
if (palabra === invertida) {
  console.log("la palabra o frase es palindromo");
} else {
  console.log("la palabra o frase NO es palindromo");
}

//ejercicio 6
//Ejercicio de ordenamiento: 
//Escribe un programa que ordene una lista de números 
//de manera ascendente o descendente,
//según la preferencia del usuario.

let listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//funcion para ordenar lista de numeros
function ordenarNumeros (lista, orden) {
  //VERIFICAR PREFERENCIA DEL USUARRIO
  if(orden === "ascendente") {
    lista.sort ((a, b) => a -b); //orden ascendente 
  } else if (orden === "descendente") {
    lista.sort ((a, b) => b - a);
  } else{
    console.log("la prefeerencia de orden no es valida");
   return
  }

  //mostrar la lista ordenada
  console.log("lista ordenada: ", lista);
}

//llamar a la funcion de ordenamiento con la lista y la preferencia
ordenarNumeros(listaDeNumeros, "de3scendente")

//ejercicio 7
// encontrar un numero mayor
//Escribe un programa que encuentre el número mayor en un array de números.

function encontrarNumeroMayor (array) {
  let mayor = array [0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }

  return mayor; //se usa return mayor para especificar el valor que la funcion debe retornar cuando es llamada
}

const num7 = [10, 4, 5, 6, 33]
const mayor2 = encontrarNumeroMayor(num7) 
//Al utilizar return, la función encontrarNumeroMayor 
//finaliza su ejecución y retorna el número mayor. 
//Esto permite que el valor del número mayor pueda ser asignado a una variable

console.log("el numero mayor es:", mayor2);


//EJERCICIO 8
//Calcular el promedio
//Escribe un programa que calcule el promedio de un array de números.

function calcularPromedio(array2) {
  let suma = 0

  for (let i = 0; i < array2.length; i++){
    suma += array2[i]  
}

const promedio = suma / array2.length;

return promedio;
}

const num8= [1, 4, 5, 6]

const promedio = calcularPromedio(num8)

console.log("el promedio es:", promedio);


//EJERCICIO 9
//Ejercicio: Encontrar números pares
//Escribe un programa que encuentre todos los números pares en un array de números y 
//los devuelva en un nuevo array.

function encontrarNumerosPares (array) {
  const numerosPares = [];

  for (let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0) {
      numerosPares.push(array[i])
    }
  }
  return numerosPares
}

const num9 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const pares = encontrarNumerosPares(num9)

console.log("los numeros pares son:", pares);

//ejercicio 10
//eliminar duplicados de un array
//Escribe un programa que elimine los elementos duplicados de un array, 
//dejando solo una instancia de cada elemento.

function eliminarDuplicados (array) {
  const resultado = [];

  for (let i = 0; i < array.length; i++) {
      if (resultado.indexOf(array[i]) === -1) { //indexOf devuelve -1 xq no existe, si existe devuelve el numero repetido y no lo agrega al nuevo array
        resultado.push(array[i])
      }
  }
  return resultado; 
}
//ejemplo de uso
const num10 =[ 1, 2, 2, 4, 5, 6, 6, 8]
const sinDuplicar = eliminarDuplicados(num10)
console.log("el nuevo array sin duplicar es:", sinDuplicar);

//ejercicio 11
// Encontrar el número menor
//Escribe un programa que encuentre el número menor en un array de números.

function encontrarMenor (array) {
  let menor = array[0]

  for (let i = 0 ; i< array.length; i++) {
    if (array [i] < menor) {
       menor = array [i] 
    }    
  }

  return menor
}

//ejemplo de uso

const num11 = [33, 44, 5, 3, 66, 6]
const menor = encontrarMenor(num11)
console.log("el numero menor es:", menor);