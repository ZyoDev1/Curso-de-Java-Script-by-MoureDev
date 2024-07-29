// if, else if,else

//if (si)  Ejecuta un bloque de código si una condición es verdadera.

let age= 37
if(age==37){
    //Bloque de código
    console.log("La edad es 37")
}


//else(si no)
if(age==37){
    console.log("La edad es 37")
    }else{//else (si no)
    console.log("La edad no es 37")
}

//else if (si no,si)

if(age==37){
    console.log("La edad es 37")
}else if(age<18){
    console.log("Es menor de edad")
}else{//else (si no)
    console.log("La edad no es 37, ni menor de edad")
}

//Operador terniario (Forma rápida de acabar un condicional simple)

const message = age == 37 ?"La edad es 37":"La edad no es 37"
console.log(message)

//Switch  Forma rápidA de meter muchos else if pero solo cuando se compara UNA ÚNICA VARIABLE

let day = 3

let dayName

switch (day){
    case 0:
        dayName="Lunes"
        break
    case 1:
        dayName="Martes"  
        break
    case 2:
        dayName="Miercoles"
        break
    case 3:
        dayName="Jueves"
        break
    case 4:
        dayName="Viernes"
        break
    case 5:
        dayName="Sabado"
        break
    case 6:
        dayName="Domingo"
        break
    default:
        dayName="Número de día incorrecto"
}

console.log(dayName)