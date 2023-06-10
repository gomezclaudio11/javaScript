//JSON
//stringify: acepta un objeto como parametro y devuelve un JSON

const producto1 = {id: 2, producto: "Arroz"};

const enJSON = JSON.stringify(producto1);

console.log(enJSON);
console.log(typeof producto1);
console.log(typeof enJSON);

localStorage.setItem("producto1", enJSON)

// parse: recibe un JSON, devuelve un javaScript 

const producto2 = JSON.parse(localStorage.getItem("producto1"));
console.log(producto2.id);

//EJEMPLO ALMACENAR ARRAYS DE OBJETOS

const productos = [{id:1, producto:"pelota", precio:120},
{id:2, producto:"aro", precio:120},
{id:3, producto:"pantalon", precio:120},
{id:4, producto:"remera", precio:120}
];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)}
//almacenar producto por producto
for (const producto of productos) {
    guardarLocal (producto.id , JSON.stringify(producto));
}
//o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos))

//OBTENER ARRAY ALMACENADO

class Producto {
    constructor (obj) {
        this.nombre = obj.producto.toUpperCase();
        this.precio = parseFloat(obj.precio);
    }
    sumaIva () {
        this.precio = this.precio * 1.21;
    }
    envio () {
        this.precio = this.precio + 300;
    }
}

//obtenemos el listado de productos almacenados
const almacenados = JSON.parse (localStorage.getItem("listaProductos"));
const nuevosProd = [];
//Iteramos almacenados con for.. of para transformar todos sus objetos a tipo producto
for (const objeto of almacenados)
    nuevosProd.push(new Producto(objeto));

//Ahora tenemos objetos productos y podemos usar sus metodos
for (const producto of nuevosProd)
    producto.sumaIva();

console.log(nuevosProd);

//EJEMPLO RECUPERAR ESTADOS PREVIOS
let usuario;

let usuarioEnLs = JSON.stringify(localStorage.getItem("usuario"))

//Si habia algo almacenado lo recupero. Si no le pido un ingreso
if (usuarioEnLs) {
    usuario = usuarioEnLs
} else {
    usuario = prompt("ingrese usuario")
}


//EJEMPLO RECUPERAR ESTADOS PREVIOS
let carrito = [];
let carritoEnLS = JSON.stringify(localStorage.getItem("carrito"))

//inicializo mi app con carrito vacio o con el registro que haya quedado en LS
if (carritoEnLS) {
    carrito = carritoEnLS
}

//funcion que rederizaria el carrito
//renderCarrito ( carrito )

//EJERCICIO
//Almacenar informacion en el storage
const infoUsuario = prompt ("ingrese un numero")

    alert ("ingrese un numero")

const infoUsuarioEnJSON = JSON.stringify(infoUsuario)

console.log(infoUsuarioEnJSON);

localStorage.setItem("infoPromp", infoUsuarioEnJSON)

//Guardar un array de objetos en formato JSON

const personas = [
    {nombre: "juan", edad: 30, curso: "js"  },
    {nombre: "hernan", edad: 40, curso: "js"  },
    {nombre: "damian", edad: 25, curso: "js"  },
    {nombre: "ricardo", edad: 28, curso: "js"  }
]

//const personasEnJSON = JSON.stringify(personas)
const almacenar = (clave, valor) => { localStorage.setItem (clave, valor)}

//almacenar uno x uno
for (const persona of personas) {
almacenar (persona.nombre, JSON.stringify(persona))
}

//almacenar todo el array 
almacenar ("personas", JSON.stringify(personas))