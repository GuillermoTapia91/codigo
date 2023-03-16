// Objeto Math
// Math.pow(base.exponente)

console.log(Math.pow(2, 2))
console.log(Math.pow(2.4, 5))

//Math.round: redondea un decimal al entero mas proximo hacia arriba o hacia abajo, .5 hacia arriba,.4 o menos hacia abajo

console.log(Math.round(6.45))
console.log(Math.round(6.57))

// Math.floor =redondea un decimal a un entero hacia abajo.

console.log(Math.floor(6.99))

//Math.ceil =redondea un decimal a un entero hacia arriba.
console.log(Math.ceil(6.0001))

// Math.max = indica valor mayor de un conjunto de números

console.log(Math.max(1,2,3,4,5))

// Math.min = indica valor menor de un conjunto de números
console.log(Math.min(1,2,3,4,5))

const numero = [1,2,3,4,5]
console.log(Math.max(...numero)) // spread operator 

//Math.random() = genera un número aleatorio entre el desde 0 y el 1,sin considerar 1
console.log(Math.random())

// Object.keys() nos devuelve un arreglo con el nombre de todas las propiedades de un objeto.

// const libro1 = {
//   autor: 'Borges',
//   genero: 'Policial',
//   año: 1990
// }

// const todasLasPropiedades1 = Object.keys(libro1)
// console.log(todasLasPropiedades1)

// Object.values() devuelve todos los valores de nuestro objeto

const libro2 = {
  autor: 'Borges',
  genero: 'Policial',
  año: 1990
}

const todasLasPropiedades2 = Object.values(libro2)
console.log(todasLasPropiedades2)

//codigo Frontend

const nombre  = "Guillermo"
const apellido = "Tapia"
const edad = 31

const resultado = nombre + apellido + edad
console.log(resultado)

const resultado2 = "hola "+ nombre + " " + apellido + " "+ "tu edad es " + edad
console.log(resultado2)

//Template string: una forma de concatenar cadenas de manera mas sencilla

const resultado3 = `Hola ${nombre} ${apellido} tu edad es ${edad}`
console.log(resultado3)

const resultado4 = `
Hola ${nombre} ${apellido}
tu edad es ${edad}
`
console.log(resultado4)

// toLowerCase, toUpperCase (convierte a minúsuclas o mayúsculas un string)
const nombre = "Mariana"
console.log(nombre.toLowerCase())
console.log(nombre.toUpperCase())

// trim (elimina sólo los espacios en blanco al inicio y al final de la cadena)

const fruta = ' platano '
console.log(fruta.trim())

// includes = nos indica si una cadena de texto se encuentra dentro de otra cadena de texto, devuelve: true o false

const bootcamp = 'Fullstack Codigo'
console.log(bootcamp.includes('stack'))