//funciones que retornan otras funciones
function mayorQue(n){
    return (m) => m > n
}

let mayorQueDiez = mayorQue(10);

console.log(mayorQueDiez(12));
console.log(mayorQueDiez(8));

function asignarOperacion (op) {
    if (op == "sumar") {
        return (a, b) => a + b;
    } else if (op == "restar") {
        return (a, b) => a - b;
    }
}

let suma = asignarOperacion("sumar");
let resta = asignarOperacion("restar");

console.log(suma (4 , 5));
console.log(resta (4 , 5));

// recibir funciones x parametro
function porCadaUno (arr, fn) {
    for (const el of arr) {
        fn (el)
    }
}
const numeros = [1, 2, 3, 4 ]
porCadaUno(numeros, console.log)

let total = 0

function acumular(num) {
    total += num 
}

porCadaUno(numeros, acumular)
console.log(total);

//arrow function
const duplicado = []
console.log(duplicado);

porCadaUno(numeros, (el)=> {
    duplicado.push(el * 2)
})
console.log(duplicado);

//METODOS DE BUSQUEDA Y TRANSFORMACION
//funciones de orden superior, solucionan problemas recurentes con los arrays

// for each
//itera sobre el array y por cada elemento ejecuta la funcion que enviamos x parametro

numeros.forEach((num)=> {
    console.log(num);
}) 

//find
//recibe una funcion de comparacion x parametro
// retorna el 1 elemento que cumpla con esta condicion

const curso = [
    {nombre: "javascript", precio: 10},
    {nombre: "ReactJs", precio: 20},
    {nombre: "AngularJs", precio: 40},
    {nombre: "Desarrollo Web", precio: 20},
]
const resultado = curso.find((el) => el.nombre === "ReactJs")
console.log(resultado);
const resultado2 = curso.find ((el) => el.nombre === "DW")
console.log(resultado2);//UNDEFINED

//FILTER
//funcion comparadora x parametro y retorna un nuevo array
// sino hay concidencia retorna un array vacio
const filtrado = curso.filter((el) => el.nombre.includes("Js"));
console.log(filtrado);
const filtrado2 = curso.filter((el) => el.precio < 5)
console.log(filtrado2); //[]

//SOME
// Igual que filter pero retorna true o false
console.log(curso.some((el) => el.nombre == "Desarrollo Web"));
console.log(curso.some((el) => el.nombre == "Vue JS"));

//MAP 
//Crea un nuevo array con todos los elementos del original transformados segun las operaciones de la funcion enviada x parametro

const nombres = curso.map ((el) => el.nombre)
console.log(nombres);
const precios = curso.map ((el) => el.precio )
console.log(precios);

//modificar un array al mapearlo
const actualizado = curso.map ((el) => {
    return {
        nombre: el.nombre,
        precios: el.precio * 1.25
    }
})
console.log(actualizado);

//REDUCE
// resume el array a un unico valor de retorno
//recibe dos parametros 1 acumulador y el elemento del array que iteramos
// el segundo es el valor inicial del acumulador

const carrito = [
    {nombre: "leche", precio: 20},
    {nombre: "coca", precio: 20},
    {nombre: "agua", precio: 20},
    {nombre: "jugo", precio: 20},
]

console.log(carrito.reduce((acc, el) => acc + el.precio, 0));

//SORT
//reordenar un array segun un criterio que definamos
//recibe una funcion de comparacion x parametro que a la vez recibe dos elementos del array
// la funcion retorna un valor numerico (1, -1, 0) que indica que elemento se posiciona antes o despues
// ES DESTRUCTIVO

//ascendente descendentes numeros
const num = [ 40, 1, 5, 200];
console.log(num.sort((a, b) => a - b));
console.log(num.sort((a, b) => b - a));

//ascendente descendentes STRING

const items =[
    { name: "picachu", precio: 10},
    { name: "charmander", precio: 10},
    { name: "pidgey", precio: 10},
    { name: "charizar", precio: 10},
]

items.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    //a es igual a b
    return 0;
})

//ejemplo

const listaProductos = [
    { id:1, name: "arroz", precio: 11},
    { id:2, name: "cafe", precio: 23},
    { id:3, name: "fideos", precio: 32},
    { id:4, name: "agua", precio: 5},
]

const buscado = listaProductos.find((el) => el.id === 3);
console.log(buscado);

const existe = listaProductos.some(el => el.name === "cafe") ;
console.log(existe);

const baratos = listaProductos.filter( el => el.precio < 20);
console.log(baratos);

const listName = listaProductos.map ( el => el.name)
console.log(listName);

//OBJETO MATH
//contenedor de herramientas y metodos para realizar op. matematicas
// constantes
console.log( Math.PI);

//metodos 

// min & max
console.log( Math.max(55, 2, 99,  -2));
console.log( Math.min(55, 2, 99,  -2));

//CEIL, FLOOR Y ROUND
const pi = Math.PI

//ceil devuelve el entero mayor o igual mas proximo
console.log( Math.ceil(pi)); //4

//floor devuelve el entero mas cercano redondeando hacia abajo
console.log( Math.floor(pi)); //3

//round redondea al entero mas cercano
console.log( Math. round (pi));

//SQUARE ROOT
// retorna la raiz cadrada de un numero
console.log( Math.sqrt(9));
console.log( Math.sqrt(2));
console.log( Math.sqrt(-1));//NaN

//RANDOM
//genera un numero aleatorio entre 0 y 1 
// 0 limite inclusivo y el 1 exclusivo
console.log( Math.random());
console.log( Math.random());
console.log( Math.random());
// numeros entra 0 y 10
console.log( Math.round(Math.random() * 10));
//numero entre 0 y 50
console.log( Math.round(Math.random() * 50));
//numeros entre 20 y 50
//El rango es de 30 a partir de 20 (limite inferior adicionado)
console.log( Math.round(Math.random() * 30 + 20));

//con Math.round del 0-100
//con Math.ceil del 1-100
//con Math.floor del 0-99

const generadorNumero = () => {
    return Math.round ( Math.random () * 100)
}
console.log(generadorNumero());

//CLASE DATE
// para manipular fechas

console.log( new Date());
//mes a partir del 0 dias a partir del 1
console.log(new Date(2020, 1, 15)); //febrero

const casiNavidad = new Date (2021, 11, 25, 23, 59, 59)
console.log(casiNavidad);

const casiAnioNuevo = new Date("December 31, 2021 23:59:59");
console.log(casiAnioNuevo);
console.log(casiAnioNuevo.getFullYear());
console.log(casiAnioNuevo.getMonth());
console.log(casiAnioNuevo.getDay());

const hoy = new Date ("December 17, 2021")
console.log(hoy.toDateString());
console.log(hoy.toLocaleString());
console.log(hoy.toLocaleDateString());
console.log(hoy.toTimeString());