// 1. Escribe un comentario en una línea

//Esto es un comentario en una linea

// 2. Escribe un comentario en varias líneas

/*Esto es un comentario en varias
lineas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myString="Jorge"
let myAge="32"
let myBoolean=true
let myUndefined=undefined
let myNull=null
let mySymbol=Symbol("mysymbol")
let myBigInt=54646464654646546465465465464646n
// 4. Imprime por consola el valor de todas las variables
console.log(myString)
console.log(myAge)
console.log(myBoolean)
console.log(myUndefined)
console.log(myNull)
console.log(mySymbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myString)
console.log(typeof myAge)
console.log(typeof myBoolean)
console.log(typeof myUndefined)
console.log(typeof myNull)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myString = "Rafa"
myAge=35
myBoolean=false
myUndefined=undefined
myBigInt=46546546546545646841351616161681651654465n
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myString = 42
myAge="Jorge"
myBoolean="Carlos"
myUndefined=null
myBigInt=undefined
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myString1="Jorge"
const myAge1="32"
const myBoolean1=true
const myUndefined1=undefined
const myNull1=null
const mySymbol1=Symbol("mysymbol")
const myBigInt1=54646464654646546465465465464646n
// 9. A continuación, modifica los valores de las constantes
myString1="Jorge1" // Los valores asignados a constantes no se pueden reasignar
myAge1="321"// Los valores asignados a constantes no se pueden reasignar
myBoolean1=false// Los valores asignados a constantes no se pueden reasignar
myUndefined1=null// Los valores asignados a constantes no se pueden reasignar
myNull1=undefined// Los valores asignados a constantes no se pueden reasignar
mySymbol1=Symbol("mysymbol2")// Los valores asignados a constantes no se pueden reasignar
myBigInt1=546464646546465464654654654645616132132321646n// Los valores asignados a constantes no se pueden reasignar

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser