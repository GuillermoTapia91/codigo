function esVocal(letra) {
  if(letra.length>1) return "solo escribe una letra"
  if(letra==="a") return "Es vocal"
  if(letra==="e") return "Es vocal"
  if(letra==="i") return "Es vocal"
  if(letra==="o") return "Es vocal"
  if(letra==="u") return "Es vocal"
  return "dato incorrecto"
}

console.log(esVocal("ab"))

function isVowel(letra) {
  if (!letra || typeof letra !== "string") return "Dato incorrecto";

  if (letra.length > 1) return "Maximo debe ser 1 caracter";

  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.includes(letra.toLowerCase()) ? "Es vocal" : "No es vocal";
}

console.log(isVowel("e"));
console.log(isVowel("x"));
console.log(isVowel("ae"));
console.log(isVowel("A"));
console.log(isVowel(1));
console.log(isVowel());
console.log(isVowel(null));
console.log(isVowel([]));