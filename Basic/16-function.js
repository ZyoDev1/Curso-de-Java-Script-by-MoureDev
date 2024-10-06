// Funciones

// Una función es un bloque de código, determinado a realizar una tarea en particular.

function  myFunc (){
    console.log("Hola Función")
}


// Con parametros
function myFuncWithParams(name){
    console.log(`¡Hola ${name} !`)
}

myFuncWithParams("Jorge")
myFuncWithParams("MoureDev")

// Funciones anonimas, funciones que no tienen un nombre definido.=> se agrega directamente a constante no a un nombre

const myFunc2 = function (name){
    console.log(`¡Hola ${name} !`)
}

myFunc2("Brais Morure")

const square = function(x){
    return x*x;
}

console.log(square(4))

//Arrow Functions, forma mas concisa de escribir funciones

const myFunct3 = (name) => {
    console.log(`¡Hola ${name} !`)
}

const myFunct4 = (name) =>   console.log(`¡Hola ${name} !`)


myFunct3("Jorge Sebastian")
myFunct4("Jorge Sebastian")

// Parametros

function sum (a,b){
    console.log(a+b)
}

sum (5,10)
sum(5) // Devuelve error porque intenta sumar 6 a la nada

// Valores por defecto

function defaultSum (c=0,d=0){ 
    console.log(c+d)
}

defaultSum (5,1)
defaultSum (5,) // Imprime 5 porque al  no rellenar el segundo parámetro la aplicación toma el 0 que le hemos indicado
defaultSum () // Imprime 0 porque al  no rellenar ningún parámetro toma el 0 que le hemos indicado
defaultSum (b=5) // Imprime 5 porque al  no rellenar el segundo parámetro la aplicación toma el 0 que le hemos indicado

// Retorno de valores

function multi(a,b){
    return a*b
}

let result= multi(5,10)
console.log(result)// Devuelve el resultado pero no lo imprime salvo que se lo indiquemos nosotrs

//Funciones anidadas.

function extern(){
    console.log("Función Externa")
    function intern(){
        console.log("Función interna")
    }

    intern()
}

extern ()

// inter() - No nos devuelve nada porque está fuera del scope.


//Funciones de orden superior: Son funciones que reciben otras funciones como argumento 

function applyFunction(func, param){
    func(param)
}


applyFunction(myFunct4,"Función de orden superior")

// forEach -- permite iterar sobre otro elemento 


myArray = [1,2,3,4]

myArray.forEach(function (value){
    console.log(value)
})


myArray.forEach((value)=>console.log(value))


mySet= new Set(["Jorge","Sebastian","ZyoDev",37,true,"jsebastiansoriano@gmail.com"])

myMap= new Map([
    ["name", "Jorge"],
    ["email", "jsebastianSorian@gmail.com"],
    ["age", 32]
])

mySet.forEach((value)=>console.log(value))
myMap.forEach((value)=>console.log(value))

