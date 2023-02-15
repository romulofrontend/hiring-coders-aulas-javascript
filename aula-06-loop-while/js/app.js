//ESTRUTURA DE REPETICAO

//WHILE - Enquanto...
var numeroSorteado = 10;
var possivelValor = 0;
var achou = false;

while (!achou) {
  possivelValor += 1;
  if (numeroSorteado === possivelValor) {
    achou = true
    console.log(`${possivelValor} corresponde ao número sorteado ${numeroSorteado}`);
  } else {
    console.log(`${possivelValor} não corresponde ao número sorteado ${numeroSorteado}`);
  }  
}


//WHILE - TABUADA
var repeticoes = 0;
var tabuada = 10;
while (repeticoes <= 10){
  let resultado = tabuada * repeticoes;
  console.log(`${tabuada} x ${repeticoes} = ${resultado}`);
  repeticoes++;
}