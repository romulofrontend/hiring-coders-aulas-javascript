function soma (numero1, numero2){
  var resultado  = numero1 + numero2;
  return resultado;
}

var resultadoSoma01 = soma(1,2);

var resultadoSoma02 = soma(10,20);

var resultadoSoma03 = soma(100,200);

console.log(resultadoSoma01)
console.log(resultadoSoma02)
console.log(resultadoSoma03)


function welcomeUser (userName){
  console.log(`Olá ${userName}!`)
}

console.log(welcomeUser("Romulo"));
console.log(welcomeUser("Guilherme"));
console.log(welcomeUser("Rosa"));