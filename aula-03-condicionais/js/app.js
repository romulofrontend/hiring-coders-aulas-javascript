var nome = "Carlos";

//CONDICIONAIS IF, ELSE IF, ELSE
if (nome === "Romulo") {
  console.log("Nome: Romulo");
} else if (nome === "Guilherme") {
  console.log("Nome: Guilherme");
} else {
  console.log("Nome inválido");
}


//CONDICIONAIS SWITCH
var sobrenome = "Rosa";

switch (sobrenome) {
  case "Guilherme":
    console.log("Sobrenome: Guilherme");
    break;
  case "Silva":
    console.log("Sobrenome: Silva");
    break;
  case "Rosa":
    console.log("Sobrenome: Rosa");
    break;
  default:
    console.log("Nenhum dos sobrenomes válidos");
}