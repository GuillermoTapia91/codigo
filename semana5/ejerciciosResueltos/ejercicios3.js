function numeroRandom(min,max) {
  min1 = Math.ceil(min);
  max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1) + min1);
}

console.log(numeroRandom(15,34))