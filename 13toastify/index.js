//btn1
const btnToastify = document.getElementById ("toastify1")

btnToastify.addEventListener("click", () => {
    Toastify({
        text: "probando toast",
        duration: 3000
    }).showToast()
})
//showToast = cocatenado para disparo asignado

//btn2
const btnToastify2 = document.getElementById ("toastify2")

btnToastify2.addEventListener ("click", () => {
    Toastify ({
        text: "probando toastify 2",
        duration: 3000,
        gravity: "bottom",
        position: "left"
    }).showToast()
})

//btn3
const btnToastify3 = document.getElementById("toastify3")
btnToastify3.addEventListener ("click", () => {
    Toastify({
        text: "probando styles",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: {
            background: `linear-gradient (to right, #00b09b, #96c92d)`
        }
    }).showToast()
})

//btn4
const btnToastify4 = document.getElementById("toastify4")

btnToastify4.addEventListener("click", () =>{
    Toastify ({
        text: "PROBANDO onClick",
        duration: 3000,
        onClick: () => {
            Toastify ({
                text:"clickeast una toast",
                duration: 1500,
                position:"left"
            }).showToast()
        }
    }).showToast()
})

//btn5
const btnToastify5 = document.getElementById("toastify5")

btnToastify5.addEventListener("click", () => {
    Toastify ({
        text: "click aqui para ir a google",
        duration: 3000,
        destination: "http://www.google.com"
    }).showToast()
})