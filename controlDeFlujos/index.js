//condiciones compuestas
let nombreIngresado = prompt ("ingresar nombre");
let apellidoIngresado = prompt ("Ingresar apellido");

if ((nombreIngresado != "") && (apellidoIngresado != "")) {
    alert ("nombre: "+ nombreIngresado + " apellido: "+apellidoIngresado)
} else {
    alert ("error: ingresar nombre y apellido")
}

let numeroIngresado = prompt("ingresar un numero")
if (numeroIngresado <= 1000) {
    alert ("el numero ingresado es: " + numeroIngresado)
} else {
    alert ("el numero ingresado no puede ser mayo a 1000")
}

let numIngresado = prompt ("ingresar un numero del 10 al 50")
let parseNumIngresado = parseInt (numIngresado)

if (parseNumIngresado <= 9) {
    alert ("el numero debe ser entre 10 y 50")
} else if (parseNumIngresado >= 50) {
    alert ("el numerp debe ser entre 10 y 50")
} else {
    alert ("el numero ingresado es: "+ parseNumIngresado)
}