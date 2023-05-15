// arrays

const arrayA = [];
const arrayB = [1, 2];
const arrayC = ["c1", "c2", "c3"];
const arrayD = [true, false, true];
const arrayE = [1, false, "c4"];

console.log(arrayA, arrayB, arrayC, arrayD, arrayE);

//acceso a arrays

const numeros = [1, 2, 3, 4, 5];
console.log(numeros [0]);
let suma = numeros [0] + numeros [4];
console.log(suma);

//metodos  propiedades
//LENGTH
console.log(numeros.length);

//recorrido del arrays
for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    console.log(element);    
}
//PUSH
//agrega elementos al final del arrays
numeros.push(6);
console.log(numeros);

//unshit
//agrega al inicio
numeros.unshift(0);
console.log(numeros);

//eliminar elementos
//shit 
//elimina el primer elemento
numeros.shift();
console.log(numeros);
//pop 
//elimina el ultimo elemento
numeros.pop();
console.log(numeros);

//splice
//elimina uno o varios elementos 1 es donde se ubica y el 2 son los elemtos a eliminar
numeros.splice(1, 2);
console.log(numeros);

//join 
//une todo en un string separado por el valor que pasamos x parametros
console.log(numeros.join("-"));

//concat
//combina dos arrays en un unico array
const perros = ["pupy", "ronie"];
const gato = ["misha", "mishitus"];
const mascotas = perros.concat(gato)
console.log(mascotas);

//SLICE
//una copia de una parte del array dentro de un nuevo array
const nombres = ["rita", "pedro", "Miguel", "Ana", "vanesa"];
const masculinos = nombres.slice(1, 3)
console.log(masculinos);

//indexof
//obtiene el indice de un elemento en un array
console.log(nombres.indexOf("pedro"));
console.log(nombres.indexOf("ulieta"));//devuelve -1 xq no existe

//includes
//para saber si un elemento existe o no devuelve un booleano
console.log(nombres.includes("rita"));
console.log(nombres.includes("julieta"));

//reverse
//modifica el array original
console.log(numeros.reverse());

//EJEMPLO
/*
const listaNombres = [];
let cantidad = 5;
do {
    let entrada = prompt ("ingresar nombres");
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
const nuevaLista = listaNombres.concat(["ana", "ema"]);
alert(nuevaLista.join("-"))
*/

//ejemplo eliminar cualquier elemento
const personas = ["rita", "pedro", "Miguel", "Ana", "vanesa"];
const eliminar = (nombre) => {
    let index = personas.indexOf(nombre)
    if (index != -1) {
        personas.splice(index, 1)
    }
}
eliminar("pedro")
console.log(personas);

//array de objetos
const objeto1 = {id:1, producto: "arroz"};
const array = [objeto1, {id:2, producto: "fideo"}];
array.push({id:3, producto: "pan"});
console.log(array);

//FOR OF
const productos = [
    {id:1, producto: "coca"},
    {id:2, producto: "Moca"},
    {id:3, producto: "Roca"},
    ];
for (const producto of productos){
    console.log(producto.id);
    console.log(producto.producto);
}

//EJEMPLO
class Producto {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
        this.vendido= false;
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}

const listaProductos = [];
listaProductos.push(new Producto("andes", 100))
listaProductos.push(new Producto("antares", 200))
listaProductos.push(new Producto("andes roja", 100))
//recorre el array para modificarlos a todos
console.log(listaProductos);
for(const producto of listaProductos)
producto.sumaIva();
console.log(listaProductos);

//ejemplo
class Tareas {
    constructor(tarea, prioridad, realizada){
        this.tarea = tarea;
        this.prioridad = prioridad;
        this.realizada = realizada;
    }
}

const listaTareas = [];
listaTareas.push ( new Tareas ("hacer la cama", "1°", true))
listaTareas.push ( new Tareas ("check mail", "2°", false))
console.log(listaTareas);