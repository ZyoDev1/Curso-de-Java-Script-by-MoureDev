/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum (a,b){
    console.log(a+b)
}

sum(4,5)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos



function mayor(a,b,c,d){
    return Math.max(a,b,c,d)
}

console.log(mayor(1,2,3,4))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

    function numeroVocales(str){
        const vocales = str.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g);
        return  console.log(vocales.length)
    }

    numeroVocales("Hola Mundo")

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function arrayAMayusculas(arr) {
    return arr.map(str => str.toUpperCase());
}

console.log(arrayAMayusculas(["jorge", "maria", "pedro"]));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function numeroPrimo(a){
    if (a%2===0){
        console.log("true");
    }else{
        console.log("False")
    }
}

numeroPrimo()

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos



// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado