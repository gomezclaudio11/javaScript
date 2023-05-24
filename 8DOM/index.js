//DOM
//document object model
//cad etiqueta HTML es un objeto llamado NODO
// las etiquetas anidadas son llamadas nodos hijos de la etiqueta nodo padre
// son accesibles gracias al objeto global document 
// nodo elemento: correspondiente a la propia etiqueta HTML
// nodo texto: contiene el texto encerrado por esa etiqueta Html
//TIPOS DE NODOS
//Document: nod raiz
//Element: representa cada una de las etiquetas XHTML
//attr: repersenta cada uno de los atributos de las etiquetas html
//text: 
//comment: comentarios incluidos en la pagina HTML

//ACCESO AL DOM
// GET ELEMENT BY ID

let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");

console.log(div.innerHTML);
console.log(parrafo.innerHTML);

//GETELEMENTBYCLASSNAME()

let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);

//getelementbytagname()
let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);

//ejemplo recorrer html collection

for (const pais of paises) {
    console.log(pais.innerHTML);
}

for (const div of contenedores){
    console.log(div.innerHTML);
}

//INNER TEXT
let titulo = document.getElementById("titulo");
console.log(titulo.innerText);
titulo.innerText = "hola ale CAMBIADO DESDE JS"
console.log(titulo.innerText);

//inner html
// Permite definir codigo html interno del elemento seleccionado
// el navegador lo interpreta como codigo HTML
//permite desde un string crear una nueva estructuras de etiquetas

let contenidoInterno = document.getElementById("contenidoInterno")

contenidoInterno.innerHTML = "<h2> Soy una etiqueta creada desde innerHTML</h2><p>lorem ipsum</p>"

//class name

contenidoInterno.className ="container row"

//CREACION DE ELEMENTOS
//Se debe indicar el nombre de etiqueta HTML que representara ese elemento
//Luego debe agregarse como hijo el nodo creado con append() al body o a otro nodo del documento actual

//crea el nodo 
let parrafo2 = document.createElement("p");
//inserta html interno
parrafo2.innerHTML = "<h2> Hola ale desde nodo creado</h2>"
//Añade el nodo element como hijo de body
document.body.append(parrafo2)

//ELIMINAR ELEMENTOS
//Metodo remove()

//elimina el promer elemento de la clase paises
paises[1].remove()

//OBTENER DATOS
    const obtenerDatos = document.getElementById("nombre").value 
    console.log(obtenerDatos);

    const modificarDatos = document.getElementById("edad").value = 30;

//EJEMPLO

let padre = document.getElementById("personas");
let personas = [ "ale", "clau", "samu", "hernan"];

for (const persona of personas) {
    let li = document.createElement ("li");
    li.innerHTML = persona
    padre.appendChild(li)
}

//PLANILLAS DE TEXTO
//PLANTILLAS LITERALES TEMPLATE STRING

let producto = { id: 1, nombre:"helado", precio: 120}
let cocatenado = "id: " + producto.id + " - producto: "+ producto.nombre + "$ " +producto.precio;
let plantilla = `id: ${producto.id} - producto: ${producto.nombre} $ ${producto.precio}`

console.log(cocatenado);
console.log(plantilla);

let producto2 = { id: 1, nombre:"PAPA", precio: 120}

let contenedor = document.createElement("div");

contenedor.innerHTML = `<h3> Producto: ${producto2.nombre}</h3>
                        <p> id: ${producto2.id}</p>
                        <b> precio: ${producto2.precio}</b>`;
//agregamos el contenedor creado al body
document.body.appendChild(contenedor)

//EJEMPLO

const productos = [
    {id: 1, nombre:"carne", precio: 120},
    {id: 2, nombre:"CEBOLLA", precio: 120},
    {id: 3, nombre:"PALTA", precio: 120},
    {id: 4, nombre:"AJO", precio: 120}
]

for ( const produc of productos){
    let container = document.createElement ("div")
    container.innerHTML = `<h3> Producto: ${produc.nombre}</h3>
    <p> id: ${produc.id}</p>
    <b> precio: ${produc.precio}</b>`;

    document.body.appendChild(container)
}

//DESAFIO COMPLEMENTARIO
const nombre = document.getElementById("name").value

let container1 = document.createElement("div");
container1.innerHTML = `<h4> HOLA ${nombre}</h4>`;
document.body.appendChild(container1)