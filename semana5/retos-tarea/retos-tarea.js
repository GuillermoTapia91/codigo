// // Problema 1
// // Escribe una función que reciba un número y devuelva el doble de ese número.
// const doubleNumber = (number1) => `El doble de ${number1} es ${(2*number1)}`;
// console.log(doubleNumber(4));


// // Problema 2
// // Escribe una función que reciba un número y devuelva el triple de ese número.

// const tripleNumber = (number2) => `El triple de ${number2} es ${3*number2}`;
// console.log(tripleNumber(20));


// // Problema 3
// // Escribe una función que reciba un número y devuelva el cuadrado de ese número.

// const squareNumber = (number3) => `El cuadrado de ${number3} es ${Math.pow(number3,2)}`
// console.log(squareNumber(4));

// // Problema 4
// // Escribe una función que reciba un número y devuelva el cubo de ese número.

// const cubeNumber = (number4) => `El cubo de ${number4} es ${Math.pow(number4,3)}`
// console.log(cubeNumber(4));

// // Problema 5
// // Completar las condiciones de los if del siguiente script para que los mensajes se muestren siempre de forma correcta:

// const numero1 = 5;
// const numero2 = 8;
 
// if(numero1 < numero2) {
//   console.log("numero1 no es mayor que numero2");
// }

// if(numero2 > 0) {
//   console.log("numero2 es positivo");
// }

// if(numero1 > 0) {
//   console.log("numero1 es negativo o distinto de cero");
// }

// if((numero1+1) <= numero2 ) {
//   console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
// }


// // Problema 6
// // Escribe una función que reciba un número y devuelva el doble de ese número si es par o el triple de ese número si es impar.

// const DoubleTripleNumber = (number6) => {
//   if (number6 % 2 === 0) return `El doble de ${number6} es ${number6*2}`
//   if (number6 % 2 === 1) return `El triple de ${number6} es ${number6*3}` 
// }

// console.log(DoubleTripleNumber(4))
// console.log(DoubleTripleNumber(5))

// // Problema 7
// // Escribir una funcion que calcule el factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores.

// // n x (n-1) x (n-2) x ... 
// // Así, el factorial de 5 es igual a:

// // 5! = 5 x 4 x 3 x 2 x 1 = 120

// const factorial = (number7) => {
//   let n=number7
//   for (let i=1;i < number7;i++ ) {
//     n=n*i
//   }  
//   return `El factorial de ${number7} es ${n}`
// }
// console.log(factorial(6))


// Problema 8
// Escribir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplos de palíndromos:

// La ruta nos aporto otro paso natural

// Sé verlas al revés

// Anita lava la tina

// Dabale arroz a la zorra el abad

// nota: Las tildes y los espacios no deben ser tenidos en cuenta.

// const EsPalindromo = (texto) => {
//   if ( texto.toLowerCase().replaceAll(" ","").split("").join("") === texto.toLowerCase().replaceAll(" ","").split("").reverse().join("")) return `El texto ${texto} es palíndromo`
//   return `El texto ${texto} no es palíndromo`
  
// }

// console.log(EsPalindromo("Dabale arroz a la zorra el abad"))


// Problema 9
// Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log().

// const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

// for (let mes of meses) console.log(mes);


// Problema 10
// A partir del siguiente array que se proporciona:

const valores = [true, 5, false, "hola", "amigos", 20, 3.4, 10];
// Determinar cuales con los tipos de datos que contiene el array. Utilizar funciones para resolverlo.

const TypeData = (arreglo) => {
  for (let dato in arreglo) {
    console.log(`El tipo de dato de ${arreglo[dato]} es ${typeof(arreglo[dato])}`)
  }
} 
TypeData(valores)












