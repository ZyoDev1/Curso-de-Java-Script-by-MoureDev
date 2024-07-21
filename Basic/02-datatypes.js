// Tipos de datos Primitivos

// Primitivos: son los datos basicos e inmutables y reprensentan un solo valor, y no tienen funciones o métodos.

// String (Cadena de texto)

let myName = "Jorge Sebastián"
let alias = 'ZyoDev'
let email = `Mi email es jsebastiansoriano@gmail.com`

// Number (Número) -->Máximo 64 bits

let age=32 //Entero 
let height=1.75 //Decimal 

// Boolean (booleanos)

let isStudent = false
let isTeacher = true

// Undefined [La variable la hemos declarado pero todavia no tiene valor asociado]

let  undefinedValue
console.log(undefinedValue)

//Null [Intencionadamente esta variable es nula]

let nullValue = null

//Symbol [Valores únicos, sirven para evitar colisiones entre otras propiedades]

let mySymbol = Symbol("mysymbol")

// BigInt [Cuando intentamos expresara un número tan grande que no puede expresarse con number]

let myBigInt = BigInt(5465464654646549846541698161681681681681684161616816168161688681681681616)
let myBigInt2 = 5465464654646549846541698161681681681681684161616816168161688681681681616n

//Mecanismo para saber con que tipo de datos estamos trabajando

console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof height)
console.log(typeof age)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)