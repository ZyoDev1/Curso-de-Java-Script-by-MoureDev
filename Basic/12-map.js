// map

// Colección de elemento, pero la diferencia es que cada elemento esta formado por un par.

// Declaracion

let myMap = new Map()
console.log(myMap)

// Inicialización

myMap= new Map([
    ["name", "Jorge"],
    ["email", "jsebastianSorian@gmail.com"],
    ["age", 32]
])
//Aparecen tanto la key como el value junto
console.log(myMap)

//Metodos y propiedades. -- Operaciones que nos sirve para manipular el mapa

// set --> actualiza o añade clave

myMap.set("alias","ZyoDev")
myMap.set("name","Jorge Sebastian") // La clave ha sido actualizada con el nuevo valor
console.log(myMap)

// get --> recupera el valor


// console.log(myMap("name"))// Sin la función get no puedes llamaar a una clave
console.log(myMap.get("name"))
console.log(myMap.get("surname")) // Marca indefinido porque esta clave no ha sido añadida todavia al map

//has --> Nos indica si tenemos una clave en nuestro map

console.log(myMap.has("surname")) 
console.log(myMap.has("name"))

// delete -->elimina la clave que le indiquemos

myMap.delete("email")
console.log(myMap)

// keys, values & entries --> retorna un listado de todas las claves y valores

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries()) //Devuelve tanto las key como los values.


//size

console.log(myMap.size)

//clear --> Eliminamos el mapa completo

myMap.clear()
console.log(myMap)
