// 1. Concatena dos cadenas de texto
let myName = "Jorge"
let myEmail = "jsebastiansoriano@gmail.com"

let greetings = `Hola mi nombre es ${myName} y mi correo es: ${myEmail}`

console.log(greetings)
// 2. Muestra la longitud de una cadena de texto
console.log(greetings.length)

// 3. Muestra el primer y último carácter de un string
console.log(greetings[0])
console.log(greetings[66])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(greetings.toUpperCase())
console.log(greetings.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
    let saludo1 = `Hola 
   esta es 
    mi cadena
    en varias 
    lineas`

    console.log(saludo1)
// 6. Interpola el valor de una variable en un string
let saludo2 = `Hola mi nombre es ${myName}
y esta es 
 mi cadena
 en varias 
 lineas`

 console.log(saludo2)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(greetings.replaceAll(" ", "-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(greetings.includes("Jorge"))
// 9. Comprueba si dos strings son iguales
console.log(greetings==saludo1)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(greetings.length==saludo2.length)