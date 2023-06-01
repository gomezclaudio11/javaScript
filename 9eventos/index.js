let btn1 = document.getElementById("btn1")
btn1.addEventListener("click", respuestaClick)

function respuestaClick () {
    console.log("capte un evento con addEventListener");
}

let btn2 = document.getElementById ("btn2")
btn2.onclick = () => console.log("capte un evento con onclick");

//Eventos del mouse
let btn3 = document.getElementById("btn3");
btn3.onclick = () => console.log("evento del mouse click");
btn3.onmousemove = () => console.log("evento del mouse move");

//eventos del teclado
//keydown cuando se presiona
//keyup cuando se suelta una tecla

let input1 = document.getElementById ("nombre");
let input2 = document.getElementById ("edad");
input1.onkeyup = () => console.log("key up");
input2.onkeydown = () => console.log("key down");

//EVento change
input1.onchange = () => console.log(("valor 1"));
input1.onchange = () => console.log(("valor 2"));



//evento input
input1.addEventListener("input", ()=>{
    console.log(input1.value);
})

//evento submit

let formulario = document.getElementById("formulario")
formulario.addEventListener("submit", validarFormulario);

function validarFormulario (e) {
   e.preventDefault();
   //obtenemos el elemento desde el cual se disparo el evento
   let form = e.target
   console.log(form.children[0].value);
    console.log(form.children[1].value);
  }

//EJEMPLO

let producto = document.getElementById("producto")
producto.addEventListener("submit", comprar)
function comprar (e){
    e.preventDefault()
    let division = e.target
let valorProducto = division.children[1].value;
let valorCuotas = division.children[2].value;
 let total = valorProducto / valorCuotas
console.log(total);
division.children[4].value =  total
}