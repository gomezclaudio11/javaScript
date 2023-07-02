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


//PROMESAS
//es un evento a futuro
// tres estados posibles: pending, fulfilled y rejected
new Promise ( (resolve, reject) => {
    //CUERPO DE LA PROMESA
})

//RESOLVE AND REJECT
const eventoFuturo = () => {
    return new Promise ( (resolve, reject) => {
        // cuerpo de la promesa
    })
}
console.log(eventoFuturo());

const eventoFuturo2 = (res) => {
    return new Promise ( (resolve, reject) => {
        if (res === true) {
            resolve ("promesa resuelta")
        } else {
            reject ("promesa rechazada")
        }
    })
}
console.log(eventoFuturo2(true));// Promise ("promesa resuelta")
console.log(eventoFuturo2(false));// promise ( reject "promesa rechazada")

//con set time out

const eventoFuturo3 = (res) => {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            res ? resolve ("promesa resuelta") : reject ("promesa rechazada")
        }, 2000)
    })
}

console.log(eventoFuturo3(true));

//THEN AND CATCH

eventoFuturo3(true)
    .then ((response) => {
        console.log(response); //promesa resuelta
    })
    .catch ( (error) => {
        console.log(error);
    })

eventoFuturo3(false)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally( () => {
        console.log("FIN DEL PROCESO");
    })

    //EJEMPLO
    //funcion que retorna tras3 segundo un array de objetos
    const BD = [
        {id: 1, nombre: "producto 1", precio: 1500},
        {id: 2, nombre: "producto 2", precio: 1800},
        {id: 3, nombre: "producto 3", precio: 1900}
    ]

    const pedirProductos = () => {
        return new Promise ( (resolve, reject) => {
            setTimeout( () => {
                resolve(BD)
            }, 3000)
        })
    }

    //inicializamos con un array vacio
    let product = []

    const renderProductos = (arr) => {
        //fuincion que genere la vista de los productos
    }

    //asincronicamente pedimos los datos y generamos la vista
    pedirProductos ()
    .then ((res) => {
        product = res
        renderProductos(product)
    })