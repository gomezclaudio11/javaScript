console.log("hola");

//SET TIMEOUT
//Recibe dos parametros: 1 callback. 2 valor numerico

setTimeout(()=> {
    console.log("proceso asincronico");
}, 3000)

//proceso asincronico
console.log("inicia el proceso");

setTimeout(() => {
    console.log("mitad del proceso");
}, 2000)

console.log("fin del proceso");

//ejemplo
//de forma sincronica

for (let letra of "hola" ) {
    console.log(letra);
}

for (let letra of "mundo") {
    console.log(letra);
}

//de forma asincronica
for (let letra of "hola") {
    setTimeout (() => {
        console.log(letra);
    }, 1000)
}
for (let letra of "mundo") {
    setTimeout (() => {
        console.log(letra);
    }, 2000)
}

//CALL STACK
// javascript es una lenguaje single threaded 
// Unico hilo, tiene un unico stack o pila de ejecucion
//X eso se dice implicitamente sincronica

function multiply (x, y) {
    return x* y;
}

function printsquare (x) {
    let s = multiply (x, x);
    console.log(s);
}

printsquare(5)

//EVEN LOOP
//permite la sincronizacion entre nuestro call stack

//SET INTERVAL
//Igual que set timeout pero la unidad de tiempo es un intervalo
/*
setInterval(()=> {
    console.log("tic");
}, 1000)
*/

//clean interval

let counter = 0

const interval = setInterval(() => {
    counter++
    console.log(`counter: ${counter}`)

    if (counter >= 5) {
        clearInterval(interval)
        console.log("se elimino el intervalo xq llego a 5");
    }
}, 1000)