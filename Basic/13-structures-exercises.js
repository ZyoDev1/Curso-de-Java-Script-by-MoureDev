// 1. Crea un array que almacene cinco animales

let myArray =["Gato","Perro","Pájaro","Leon","Tigre"]

// 2. Añade dos más. Uno al principio y otro al final

myArray.unshift("Hipopótamo")
myArray.push("Elefante")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición

myArray.splice(2,1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros

let mySet = new Set(["Reina roja","Loba Negra","Rey Blanco","Cicatriz","El Paciente"])

// 5. Añade dos más. Uno de ellos repetido
mySet.add("Todo Arde")
mySet.add("Rey Blanco")
console.log(mySet)
// 6. Elimina uno concreto a tu elección

mySet.delete("Rey Blanco")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map()
myMap = new Map ([
    [1,"Enero"],
    [2,"Febrero"],
    [3,"Marzo"],
    [4,"Abril"],
    [5,"Mayo"],
    [6,"Junio"],
    [7,"Julio"],
    [8,"Agosto"],
    [9,"Septiembre"],
    [10,"Octubre"],
    [11,"Noviembre"],
    [12,"Diciembre"],
])

console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

    console.log(myMap.has(5))
    console.log(myMap.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
let myArrayVerano = [myMap.get(6) ,  myMap.get(7) ,  myMap.get(8) ]
console.log(myArrayVerano)

myMap.set("MesesVeranno",myArrayVerano)

console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray2 = [1,2,3,4,5]
console.log(myArray2)

let myNewSet = new Set(myArray2)
console.log(myNewSet)

myMap.set("Set",myNewSet)
console.log(myMap)

