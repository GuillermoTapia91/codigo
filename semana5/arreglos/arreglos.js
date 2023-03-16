const datosVariados = [1, "pepe", true, null, ["luis", "paco"]];

console.log(datosVariados[4][1]);

const edificio = [
  [1, 2, 3, 4, [1.1, 1.2, 1.3, 1.4]],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(edificio[0][4][2]);

// Para poder contar la cantidad de elementos un arreglo
console.log("cantidad de elementos", edificio.length);
console.log(edificio[0][4].length);
// nota length tambien puede contar la cantidad de un string
console.log("hola me llamo linder".length);
console.log(edificio[1][0]);
console.log(edificio[1][3]);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nombres = ["Ander", "Braulio", "Camila", "Diego", "Esmeralda"];
// Esto no es posible
// nombres = ["numeros"];
console.log("--- REVERSE ---");
numeros.reverse();
nombres.reverse();
console.log(numeros);
console.log(nombres);

const textoDeNombre = [ "Guillermo", "Alfredo", "Tapia"];
console.log(textoDeNombre.join(" "));
console.log(textoDeNombre.join("-"));
console.log(textoDeNombre.join("."));
console.log(textoDeNombre.join(" + "));
console.log(textoDeNombre.join(""));
console.log(textoDeNombre);

const cursos = "React, Angular, HTML, CSS, JavaScript";
const cursosArray = cursos.replaceAll(" ", "").split(",");
console.log(cursosArray);
console.log(cursos);


/*
 * Reto #6
 * INVIRTIENDO CADENAS
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una function que invierta el orden de una cadena de
 * texto.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function reverseWord1(word) {
  return word.split("").reverse().join("")
}

console.log(reverseWord1("hola mundo"))

const reverseWord2 = (word) => word.split("").reverse().join("");

console.log(reverseWord2("hola mundo"));