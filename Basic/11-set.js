//Set

// La mayor diferencia entre el Set y el array es: EL SET NO ADMITE DUPLICADOS

//Declaración

let mySet = new Set()
// let mySet2 = {} //Esto no es un SET, NO SE DEFINE CON LLAMES SE DEFINDE CON EL NEW Y CON EL SET


//Inicialización

mySet= new Set(["Jorge","Sebastian","ZyoDev",37,true,"jsebastiansoriano@gmail.com"])
console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://moure.dev")
console.log(mySet)

console.log(mySet.delete("https://moure.dev")) //Ademas de borrar devuelve true
console.log(mySet.delete("1")) //Como no borra devuelve false
console.log(mySet)

console.log(mySet[5]) //No podemos acceder a los índices

//has -- Consulta si contiene un valor

console.log(mySet.has("Jorge"))
console.log(mySet.has("Jorsfdasd"))

//Size -- funciona como el lenght,  consulta el tamaño

console.log(mySet.size)

// Convertir un Set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un arrat a un Set

mySet = new Set(myArray)
console.log(mySet)

//

mySet.add("Jorge")
mySet.add("Jorge")
mySet.add("jsebastiansoriano@gmail.com")
mySet.add("jsebastiansoriano@gmail.com")
console.log(mySet)// No varia porque el set no admite duplicados.
mySet.add("jsebastianSoriano@gmail.com")// En el momento en el que cambia una mayúscula si que lo añade
console.log(mySet)// No varia porque el set no admite duplicados.