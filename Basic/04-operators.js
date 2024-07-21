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
console.log(a != 6) //Distinto
console.log(a !== 6) //Distinto