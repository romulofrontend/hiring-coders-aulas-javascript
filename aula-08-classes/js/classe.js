class Matematica{
  soma(valorA, valorB) {
    return valorA + valorB;
  }
  subtracao(valorA, valorB) {
    return valorA - valorB;
  }
  multiplicacao(valorA, valorB) {
    return valorA * valorB;
  }
  divisao(valorA, valorB) {
    return valorA / valorB;
  }
  resto(valorA, valorB) {
    return valorA % valorB;
  }
}

var instanciaMatematica = new Matematica();

var resultadoSoma = instanciaMatematica.soma(1000, 2000);
var resultadoSubtracao = instanciaMatematica.subtracao(1000, 500);
var resultadoMultiplicacao = instanciaMatematica.multiplicacao(1000, 6);
var resultadoDivisao = instanciaMatematica.divisao(1000, 5);
var resultadoResto = instanciaMatematica.resto(1000, 3);

console.log(resultadoSoma)
console.log(resultadoSubtracao)
console.log(resultadoMultiplicacao)
console.log(resultadoDivisao)
console.log(resultadoResto)