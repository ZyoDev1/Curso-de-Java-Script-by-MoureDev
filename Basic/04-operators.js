// Operadores -- Se utilizan para relaciones u operar los datatypes

// Operadores Aritméticos
let a =5
let b =10
console.log(a-+b) // Suma
console.log(a-b) // Resta
console.log(a*b) // Multiplicación
console.log(a/b) // División

console.log(a%b) // Módulo [Resto de la división]
console.log(a**b)// Exponente
a++ //Incremtento
console.log(a)
b--//Decremento
console.log(b)

// Operadores de Asignación

let myVariable=2
console.log(myVariable)
myVariable+=2 //SUma el valor "2" de myVariable =4
console.log(myVariable)

myVariable-=2
myVariable*=2
myVariable/=2
myVariable%=2
myVariable**=2

// Operadores de comparación

console.log(a > b)
console.log(a < b)
console.log(10 <= 10)
console.log(7 >= 8)
console.log(a == "6") // Compara solo el valor por lo que es true, aunque sea una cadenad de texto 
console.log(a === "6") // No compara solo el valor y al ser cadena de texto 
console.log(a === 5) // No está comparando el valor, compara toda la identidad
console.log(a != 7) //Operador de desigualdad, comparara solo el valor
console.log(a !== "6") //No está comparando el valor, compara toda la identidad

console.log(0==false) // 0 es falso, el resto de números son verdaderos.
console.log(1==false)
console.log(1==false)

console.log(0 == "") //Cero es asociado a una cadena vacia
console.log(0 == " ")
console.log(0 == '')
console.log(0 == 'Hola') // No es asociado una cadena vacia
console.log(0 === "") //Estrictamente es falso,
console.log(undefined == null)
console.log(undefined === null) //Sale false porque no es el mismo tipo de dato

// Truthy values (Valores verdaderos) son así porque sí
// Todos los numeros positivos menos el cero
// Todas las cadenas de texto menos las vacias
// El boolean true
 
//Falsy values (Valores falsos) son así porque sí
//0
//0n
//Nan
//undefined
//null
//El boolean false
//Cadenas de texto vacias

//OPERADORES LÓGICOS

//and (&&) Para devolver true deberan darse todas las condiciones, si una solo no se cumple ya nos dará tru

console.log(5>10 && 15>20)
console.log(5<10 && 15<20)
console.log(5<10 && 15>20)
console.log(5<10 && 15<20 && 30>40)

//or (||) Si se cumple una de las dos opciones, nos devolverá true

console.log(5>10 || 15>20)
console.log(5<10 || 15<20)
console.log(5<10 || 15>20)
console.log(5<10 && 15>20 || 30<40) // El and no se ha completado pero como el true si que se cumple, devuelve tru

//not (!)

console.log(!true) //Devuelve false
console.log(!false) // Devuelbe true
console.log(!(5>10 && 15>20))
console.log(!(5>10 || 15>20))

//Operadores ternarios (Es otra forma de escribir condicionales)
//Si se cumple una condición se hace una cosa, si no es cumple realizamos otra

let isRaining = true

isRaining ? console.log("Está lloviendo"): console.log("No está lloviendo")

isRaining = false

isRaining ? console.log("Está lloviendo"): console.log("No está lloviendo")