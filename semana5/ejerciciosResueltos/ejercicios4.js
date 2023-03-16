function esPositivo(numero) {
  if (Math.round(numero)>0) "Es positivo"
  else if (Math.round(numero)<0) "Es negativo"
  return  false
}



const esPositivo = (number) => { if (Math.round(number)>0) return"Es positivo"  
else if (Math.round(number)<0) return"Es negativo" 
return  false} 

console.log(esPositivo(4))

function isPositive(number) {
  if (number === 0) return false;
  return number > 0 ? `El numero ${number} es positivo` : `El numero ${numberEs} negativo`;
}

console.log(isPositive(4))