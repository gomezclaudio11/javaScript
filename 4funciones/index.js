//funcion
/*
function solicitarNombre () {
    let nombreIngresado = prompt("ingresar nombre");
    alert("El nombre ingresado es " + nombreIngresado)
}
//llamado
solicitarNombre()
*/
/*
//VARIABLES
let resultado = 0;

function sumar (a , b) {
    resultado = a + b;
}

function mostrar (mensaje) {
    console.log("el resultado es: " + mensaje);
}

sumar(2, 2);
mostrar (resultado)
*/

//RETURN
/*
function sumar(a, b) {
    return a + b;
}
let resultado = sumar (2, 3);
console.log(resultado);
*/

//EJEMPLO DE CALCULADORA

/*
function calculadora(a, b, operacion) {
    switch (operacion) {
        case "+":
            return a + b;            
            break;
        case "-":
            return a - b;
            break;
        case "/":
            return a / b;
            break;
        case "*":
            return a * b;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 5, "/"));
console.log(calculadora(10, 5, "*"));
console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
*/

//VARIABLES LOCALES
/*
function sumar(a, b) {
    let resultado = a + b;
}
console.log(resultado);//resultado is not defined
*/

//FUNCIONES ANONIMAS
/*
const suma = function (a, b) { return a + b };
const resta = function (a, b) { return a - b };
console.log(suma (5, 5));
console.log(resta (5, 5));
*/
/*
//FUNCIONES FLECHAS

const suma = (a, b) => { return a +b}
// si es una funcion de una sola linea va sin corchetes
const resta = (a, b) =>  a - b
console.log(suma (10 , 10));
console.log(resta (10 , 10));
//ejemplo de calculo de precio
//si es una funcion de una sola linea y tiene un solo parametro se puede evitar los ()
const iva = x => x * 0.21
let precioProducto = 500;
let descuento = 100;
let precioFinal = resta ( suma (precioProducto, iva(precioProducto)), descuento )
console.log(precioFinal);
*/

//ejemplos
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
//calculo precio del producto
let precioProducto = 1000;
let envio = 300;
const cuotasSinInteres = ( a , b) => a / b; 

let precioFinal = cuotasSinInteres (suma (precioProducto, envio), 3)

console.log(precioFinal);

//calcular edad promedio

let edadA = 20;
let edadB = 27;
let edadC = 25;
let edadD = 33;
let edadE = 29;
const sumaPromedio = (a,b,c,d,e) => a+b+c+d+e;
let promedio = dividir (sumaPromedio(edadA,edadB,edadC,edadD,edadE), 5);
console.log(promedio);