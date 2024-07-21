// 1. Crea una variable para cada operación aritmética
let a = 5
let b = 1

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)
console.log(++a)
console.log(--b)


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
console.log(a+=1)
console.log(b*=1)
console.log(a-=1)
console.log(a**=1)


// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(a)
console.log(b)

console.log(a!==b)
console.log(a==6)
console.log(b!==6)
console.log(b==0)
console.log(b<=0)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a==b)
console.log(a==="6")
console.log(b==6)
console.log(b==="0")
console.log(b>=4)
// 5. Utiliza el operador lógico and
console.log(a>2 && b==0)

// 6. Utiliza el operador lógico or
console.log(a<5 || b<4)
// 7. Combina ambos operadores lógicos
console.log(a<12 && b==2 || b==0)
// 8. Añade alguna negación
console.log(!false)
console.log(!(a<12 && b==2 || b==0))
// 9. Utiliza el operador ternario
const isStudent = false
isStudent ? console.log("Es un estudiante"):console.log("No es un estudiante")
// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(++a+b>5 && b >0 || (b+=2)==2)