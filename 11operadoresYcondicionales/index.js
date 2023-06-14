//OPERADOR ++

let num = 10
// aumentar el valor en 1
num = num + 1
// primera simplificacion
num += 1
// o bien
num++
console.log(num);

//OPERADOR TERNARIO
// es una simplificacion de la estructura if else
// sintaxis   condicion ? caso1 : caso2
// la condicion resuelve true o false

const temperatura = 25
temperatura > 30 ? alert (`dia caluroso la temperatura es ${temperatura} grados`) : alert (`dia agradable la temperatura es de ${temperatura} grados`)

// el operador ternario ofrece un return implicito
const usuario = {
    nombre: "Juan",
    edad: 16
}

// declaramos y asignamos condicionalmente
const permiso = (usuario.edad >= 18) ? true : false

//mostramos el msj
permiso ? alert ("puede comprar alcohol") : alert ("no puede comprar alcohol")


//OPERADOR LOGICO AND
const carrito = []

if (carrito.length === 0) {
    console.log("carrito vacio");
} 
//con operador AND
carrito.length === 0 && console.log ("el carrito esta vacio")

// tiene un return implicito
const usuario1 = {
    nombre: "damian",
    edad:28
}
const registroIngreso = usuario1.edad >= 18 && new Date ()

console.log(registroIngreso);


//OPERADO LOGICO OR
// operador! || operador2
// si es distinto de 0, null, undefined, NaN, false o string vacio
// el operador OR || retorna operador 1
// de lo contrario retorna operador 2

console.log( 0 || "falsy"); //falsy
console.log( 40 || "falsy"); //40
console.log( null || "falsy"); //falsy
console.log( undefined || "falsy"); //falsy
console.log( "hola mundo" || "falsy"); //hola mundo
console.log( "" || "falsy"); //falsy
console.log( NaN || "falsy"); //falsy
console.log( true || "falsy"); //true
console.log( false || "falsy"); // falsy

// ejemplo
const usuario2 = {
    nombre: "hernan",
    edad: 40
}

const usuario3 = null

console.log(usuario2 || "el usuario no existe"); //operador 1

console.log(usuario3 || "el usuario no existe"); //operador 2 xq es null

//ejemplo carrito
let carrito1

let carritoLocalStorage = JSON.parse (localStorage.getItem("carrito"))

if (carritoLocalStorage) {
    carrito1 = carritoLocalStorage
} else {
    carrito1 = []
}

//lo mismo pero en sugar sintax
const carritoSugar = JSON.parse (localStorage.getItem("carrito")) || []


// OPERADOR NULLISH COALESCING
// (??) FUNCIONA IGUAL QUE EL OR (||) CON LA DIFERENCIA QUE ADMITE MAS VALORES VERDADEROS
// NULLISH SOLO EN DOS CASOS

console.log(0 ?? "NULISH"); // 0
console.log(40 ?? "NULISH"); // 40
console.log(null ?? "NULISH"); // NULISH
console.log(undefined ?? "NULISH"); // NULISH
console.log("hola mundo" ?? "NULISH"); // hola mundo
console.log("" ?? "NULISH"); // ""
console.log(NaN ?? "NULISH"); // NaN
console.log(true ?? "NULISH"); // true
console.log(false ?? "NULISH"); // false

//ACCESO CONDICIONAL A UN OBJETO
//Si intentamos acceder a un objeto que no existe naturalmente tenemos un ERROR
// con el operador ? tenemos mejor manejo de errores

const usuario4 = null

// console.log(usuario4.nombre || "el usuario no existe");
//da error de consola

console.log(usuario4?.nombre || "el ususario no existe");
//da el usuario no existe en consola

// puede aplicarse sobre propiedades que sean objetos
//para evaluar su existencia/validez

const usuario5 = {
    nombre: "johm doe",
    edad: 22,
    cursos: {
        javascript:"APROBADO"
    }
}

console.log(usuario?.cursos?.javascript || "la propiedad no existe"); //aprobado

console.log(usuario?.trabajos?.coderhouse || "la propiedad noexiste"); // la propie..


//DESESTRUCTURACION
// Sin desestructuracion

const usuario6 = {
    nombre: "John ret",
    edad: 44,
    telefono: {
        casa: 112221112,
        cel: null,
        trabajo: 45454545
    }
}

// let nombre = usuario6.nombre
// let edad = usuario6.edad

// CON DESTRUCTURACION
const {nombre, edad} = usuario6

console.log(nombre);
console.log(edad);

const { telefono: {trabajo}} = usuario6;
console.log(trabajo);

//ALIAS
//se puede desestructurar con alias
//es decir declarar la variable con un nombre alternativo tras haber desestructurado el objeto

const item = {
    item_id: 432,
    product_name: "algun producto",
    price_per_unit: 5000
}

const {
    item_id: id,
    product_name: name,
    price_per_unit: price
} = item

console.log(id);
console.log(name);
console.log(price);

//DESESTRUCTURACION EN PARAMETROS

const producto = {
    id:1,
    nombre:"curso javascript",
    precio: 10,
    duracion: "1 año"
}

const desestructurar = (item) => {
    // desestructurando dentro del bloque
    const {id, nombre} = item
    console.log(id, nombre);
}
desestructurar(producto)

//desestructurando lo que reciba por parametro
const desestructurar2 =({id, nombre}) => {
    console.log(id, nombre);
}
desestructurar2 (producto)

//DESESTRUCTURACION DE ARRAYS
// igual que con objetos pero con [] ES POSICIONAL

const nombres = ["juan", "pedro", "raquel"]

const [a, b] = nombres

console.log(a);
console.log(b);

// omitir las posiciones mediante comas

const [,,c] = nombres

console.log(c);

//SPREAD