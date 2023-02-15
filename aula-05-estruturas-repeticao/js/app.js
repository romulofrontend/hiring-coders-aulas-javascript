//ESTTRUTURAS DE REPETIÇÃO

//FOR - Exemplo Tabuada
var tabuada = 7;

for (let i = 0; i <= 10; i++) {
  var resultado = tabuada * i;
  console.log(`${tabuada} x ${i} = ${resultado}`); 
}


//FOR - Exemplo Número Sorteado
var numeroSorteado = 8;
for (let i = 0; i <= 10; i++) {
  console.log(i)
  if (numeroSorteado === i) {    
    console.log(`Você acertou! O número sorteado é ${numeroSorteado}!`);
    break
    //apesar de usado nesse caso, não é recomendado fazer quebras subitas no código
  }
}