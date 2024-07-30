// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let variable ="1"
let myName
if(variable=="1"){
    myName="Jorge"
    console.log(myName)
}else{
    console.log("La variable no es correcta")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "Jorge"
let password = 123456

if(user=="Jorge" && password==123456){
    console.log("Usuario y password correctos")
}else{
    console.log("Usuario y password incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number=5

if(number>0){
    console.log("El numero es positivos")
} else if(number==0){
    console.log("El número es igual a 0")
} else{
    console.log("El numero es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age =17.5
let añosRestantes = 18-age

if(age>=18){
    console.log("Puede votar")
} else{
    console.log(`Es menor de edad y le faltan ${añosRestantes} años para poder votar`)
}


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const edad = age <18 ? "Menor" : "Adulto"
console.log(edad)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Febrero"
let estacion

if(mes=="Enero"|| mes=="Febrero"||mes=="Marzo"){
    estacion="Invierno"
} else if(mes=="Abril"|| mes=="Mayo"||mes=="Junio"){
    estacion = "Primavera"
}else if(mes=="Julio"|| mes=="Agosto"||mes=="Septiembre"){
    estacion = "Verano"
}else if(mes=="Octubre"|| mes=="Noviembre"||mes=="Diciembre"){
    estacion = "Otoño"
}else{
    estacion="No has elegido una opción valida"
}

console.log(estacion)
   
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let diasMes;

if (mes == "Enero" || mes == "Mayo" || mes == "Marzo" || 
    mes == "Julio" || mes == "Agosto" || mes == "Octubre" || 
    mes == "Diciembre") {
  diasMes = 31;
} else if (mes == "Febrero") {
  diasMes = 28;
} else if (mes == "Abril" || mes == "Septiembre" || 
           mes == "Junio" || mes == "Noviembre") {
  diasMes = 30;
} else {
  diasMes = "No has elegido una opción válida";
}

console.log(diasMes);

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language ="it"

switch(language){
    case "es":
        console.log("El idioma elegido es Español")
        break
    case "en":
        console.log("The language selected is English")
        break
    case "it":
        console.log("La lingua scelta è l'italiano")
        break
    default:
        console.log("No has elegido un idioma Valido")    
    }  
// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case "Enero":
    case "Febrero":
    case "Marzo":
      estacion = "Invierno";
      break;
    case "Abril":
    case "Mayo":
    case "Junio":
      estacion = "Primavera";
      break;
    case "Julio":
    case "Agosto":
    case "Septiembre":
      estacion = "Verano";
      break;
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
      estacion = "Invierno";
      break;
    default:
      estacion = "Mes no válido";
  }
  console.log(estacion);

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let diasMesSwitch

switch (mes) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
      diasMesSwitch = 31;
      break;
    case "Febrero":
      diasMesSwitch = 28;
      break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
      diasMesSwitch = 30;
      break;
    default:
      diasMesSwitch = "No has elegido una opción válida";
  }
  console.log(diasMesSwitch);