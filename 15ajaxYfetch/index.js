//AJAX
//javascript asimcronico y xml
//conjunto de tecnicas de desarrollo que permite que las aplicaciones funciones de manera asincronica
//peticiones http
//metodo post y put van con un body
//metodo get y delete sin body
//parametro
//informacion adicional a traves de la URL
//QUERY PARAMS
// (?) para indicar el final de la url
// a partir de alli se escriben parametros con la  
// con la forma clave=valor
//si se definen varios se separa con &
//url paramas
//Enviar parametros con la forma de la url separados x /
//ese {id or name} es valor dinamico que insertamos en la url /1 mediante una peticion GET

//API
//aplicattion programming interfaces
//aplicacion construida en la base a la arquitectura api rest
//pokeapi

//FETCH
//metodo para hacer peticiones http a servicios externos
//peticiones asincronicas que trabajan con promesas
// fetch(url, config)

const lista = document.getElementById("listado");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then( (res) => res.json() )
    .then( (data) => {
        data.forEach ( (post) => {
            const li = document.createElement("li")
            li.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.body}</p>
            `
            lista.append (li)
        })
    })

    //ENVIANDO DATOS CON POST
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "claudio",
            body: "post de prueba",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }) 
    .then((response) => response.json())// para convertir la respuesta en formato JSON en un objeto JavaScript.
    .then((json) => console.log(json));//  se recibe el objeto JavaScript resultante y se imprime en la consola
    
    //ACTUALIZAR DATOS
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


//PATCH
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  //DELETE
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  })


  //RUTAS RELATIVAS
//SILA  URL NO TIENE HTPP LA RUTA ES RELATIVA
const lista2 = document.getElementById("listado2")


fetch("\data.json")
    .then( (res) => res.json() )
    .then( (data) => {
        data.forEach ( (producto) => {
            const li = document.createElement("li")
            li.innerHTML = `
            <h4>${producto.nombre}</h4>
            <p>${producto.precio}</p>
            <p>${producto.id}</p>
            `
            lista2.append (li)
        })
    })

 // ASYNC / AWAIT
 // la sentencia await no permite establecer un punto de espera en el codigo
 // aplicado como prefijo a una promesa
 // se bloquea la ejecucion de la siguiente instruccion 
 //hasta que la promesa se resuelva

 //sin await
 const resp1 = fetch("https://jsonplaceholder.typicode.com/posts")
 console.log(resp1); //promise {<pending>}
 
 //con await
 //const resp2 = await fetch("https://jsonplaceholder.typicode.com/posts")
 //console.log(resp2); //response

 //pero await solo puede utilizarse dentro de una funcion asincronica
 //ASYNC
 //dentro de una funcion asyn podemos utilizar la sentencia await

 const lista3 = document.getElementById("listado3")
 const pedirPost = async () => {
    const resp = await
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    const data = await resp.json()

    data.forEach( (post) => {
        const li = document.createElement ("li")
        li.innerHTML = `
        <h3>${post.title}</h3>
        <h2>${post.url}</h2>
        <p>${post.id}</p>
        `
        lista3.append(li)
    })
 }
 pedirPost()
