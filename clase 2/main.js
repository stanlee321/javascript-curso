// Python
// print("Hello world")

// Estoy dejando comentarios...

// Javascript

const my_var = "Hello world" // Strings
var my_var_3 = "Hello world again again"

let my_var_2 = "Hello world again"

my_var_2 = "HE sido reasignado"
my_var_2 = 3.141592654 // floats

my_var_2 = 3 // integers

console.log(my_var_2)

const myBool = false // or true // booleans

// Functions

// y = f(x,y)
function calcVolCilinder(r, h) {
    V = 3.141592654 * (r ** 2) * (h)
    return V
}


const radio = 200
const hight = 800

const volumen = calcVolCilinder(radio, hight)

console.log(volumen)

// condicionales

const esMartes = false

if (esMartes) {
    console.log("ES MARTES!!!")
} else {
    console.log("ES OTRO DIA, LUNES")
}

console.log("..........")

// Liastas, iteradores y metodos para las listas
const myLista = ["stanley", "Kurny", "Kevin", "Camilo", "Alvaro", 3.141592654, false]

myLista.forEach( (elemento) =>  {
    console.log(elemento)
    if (elemento === "Camilo") {
        console.log("HOLA Camilo!!")
    }
})

myLista.push("Juan")
console.log(myLista)
