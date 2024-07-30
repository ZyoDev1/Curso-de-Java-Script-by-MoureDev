//Estructuras de datos---Permite almacenar varios datos en una misma variable
// array  

//Declaración

let myArray  = []
let myArray2 = new Array() // Se recomienda usar la otra opción

console.log(myArray)
console.log(myArray2)

//Inicialización

myArray = [3]
myArray2 = new Array(3) // Define 3 huecos esperando a ser rellenados pero no los define tan facil como la opcion anterior.

console.log(myArray)
console.log(myArray2)

myArray = [1,2,3,4]
myArray2 = new Array(1,2,3,4) //Al meter varios números si que lo inicializa. 

console.log(myArray)
console.log(myArray2)

myArray = ["Jorge","Sebastian","ZyoDev",37,true]
myArray2 = new Array("Jorge","Sebastian","ZyoDev",37,true) //Al ser debilmente tipado podemos mezclar textos con números o booleanos... 

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0]="Jorge"
myArray2[1]="Sebastian"
myArray2[2]="ZyoDev"

console.log(myArray2)

myArray = []
myArray[0]="Jorge"
// myArray[1]="Sebastian"
myArray[2]="ZyoDev"

console.log(myArray)

// Metodos comunes

myArray=[]

// push y pop

myArray.push("Jorge")
myArray.push("Sebastian")
myArray.push("ZyoDev")
myArray.push("32")

console.log(myArray)

myArray.pop() // Elimina el ultimo y lo devuelve
myArray.pop()

console.log(typeof myArray)

console.log(myArray)

//shift y unshift

myArray.shift()//ELimina el primer valor del array
console.log(myArray)


myArray.unshift("Jorge","ZyoDev") //Añade valores al array en el principio
console.log(myArray)

// lenght

console.log(myArray.length) // Nos indica cuanto mide nuestro array

//clear

// myArray = []

myArray.length = 0 //Alternativa que mejor no utilizar

// slice (Devuelve una copia superficial de una porcion) generamos un nuevo array  justo con el pedazo que yo quiero.

myArray = ["Jorge","Sebastian","ZyoDev",37,true]
let myNewArray = myArray.slice(1,3)

console.log(myArray)
console.log(myNewArray)

//Splice 

myArray.splice(1,3)
console.log(myArray)

myArray = ["Jorge","Sebastian","ZyoDev",37,true]
myArray.splice(1,2,"Nueva entrada")

console.log(myArray)


