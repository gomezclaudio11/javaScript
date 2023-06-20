const btnSweet = document.getElementById("botonSweet")
btnSweet.addEventListener("click", ()=>{
    swal("hello world")
})
const btnSweet2 = document.getElementById("botonSweet2")
btnSweet2.addEventListener("click", ()=>{
    swal("hello world", "I'm Claudio", "success")
})
const btnSweet3 = document.getElementById("botonSweet3")
btnSweet3.addEventListener("click", ()=>{
    swal({
        title: "hello world", 
        text: "I'm Claudio", 
        icon: "success",
})
})
const btnSweet4 = document.getElementById("botonSweet4")
btnSweet4.addEventListener("click", ()=>{
    swal("CLICK ok o clickea fuera del modal")
    .then((value) => {
        swal(`the returned value is ${value}`)
    })
})
const btnSweet5 = document.getElementById("botonSweet5")
btnSweet5.addEventListener("click", ()=>{
    swal({
        title: "estas seguro?",
        text: "una vez eliminado, no podras recuperarlo",
        icon:"warning", 
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
            swal("Tu archivoo fue eliminado", {
            icon: "success",
        });
    } else {
        swal ( "tu archivo esta a salvo")
    }
    }) 

    
})