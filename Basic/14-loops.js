//Loops o bucles  Estructura de control que permite repetir un bloque de código.

// for

for(let i = 0; i<5;i++){
    console.log(`Hola ${i}`)
}

const numbers = [1,2,3,4,5,6,7,8]

for(let i = 0; i<numbers.length;i++){
    console.log(`Elemento ${numbers[i]}`)
}


// while
let i = 0

while(i<5){
    console.log(`Hola ${i}`)
    i++
}

// do while te aseguras que minimo se ejecuta una vez

 i =9
do {
    console.log(`Hola ${i}`)
    i++
} while(i<5)

// for of- recorre valores de algo que sea iterable

myArray = [1,2,3,4]

mySet= new Set(["Jorge","Sebastian","ZyoDev",37,true,"jsebastiansoriano@gmail.com"])

myMap= new Map([
    ["name", "Jorge"],
    ["email", "jsebastianSorian@gmail.com"],
    ["age", 32]
])

myString="¡Hola, JavaScript!"

for(let valor of myArray){
    console.log(valor)
}
for(let valor of myMap){
    console.log(valor)
}
for(let valor of mySet){
    console.log(valor)
}
for(let valor of myString){
    console.log(valor)
}
//Siempre que estemos creando bucles, nos aseguremos de que no se crea un bucle infinito.

// break y continue


for(let i = 0; i<10;i++){
    if(i==5){
        continue
    }else if(i==7){
        break
    }
    console.log(`Hola ${i}`)
}
