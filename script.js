// Array de palavras para o jogo
const palavras = [
  "tecnologia",
  "carreira",
  "computador",
  "javascript",
  "ada",
  "santander",
  "frontend",
  "backend",
  "caracteres"
];
  
// Elementos do DOM

const tagPalavra = document.getElementById("tagPalavra");
const tagLetraInformada = document.getElementById("tagLetraInformada");
const tagBtVerificaLetra = document.getElementById("tagBtVerificaLetra");
const tagTotErros = document.getElementById("tagTotErros");
const tagBtSorteiaPalavra = document.getElementById("tagBtSorteiaPalavra");
const tagDica = document.getElementById("tagDica");

let palavraSelecionada = "";
let palavraEscondida = [];
let letrasErradas = 0;
let letrasChutadas = [];

function sortearPalavra() {
  palavraSelecionada = palavras[Math.floor(Math.random() * palavras.length)]; // arrendoda o numero escolhido//
  palavraEscondida = new Array(palavraSelecionada.length).fill("_"); // length guarda as palavras e transforma em outra array
  tagPalavra.textContent = palavraEscondida.join(" "); // transforma um array em uma string//
  letrasErradas = 0;
  tagTotErros.textContent = letrasErradas;
}

function atualizarPalavraEscondida(letra) {
  let acertou = false;
  for (let i = 0; i < palavraSelecionada.length; i++) {
    if (palavraSelecionada[i] === letra) {
      palavraEscondida[i] = letra;
      acertou = true;
    }
  }
  tagPalavra.textContent = palavraEscondida.join(" ");
  return acertou;
}

function verificarFimDeJogo() {
  if (palavraEscondida.indexOf("_") === -1) {
    tagDica.textContent = "Parabéns! Você ganhou!";
    tagBtVerificaLetra.disabled = true;
  } else if (letrasErradas === 7) {
    tagDica.textContent = "Você perdeu! Tente novamente.";
    tagBtVerificaLetra.disabled = true;
  }
}

function imprimeLetrasChutadas(array) {
  let tagLetrasChutadas = document.getElementById("letrasChutadas");
  tagLetrasChutadas.innerText = "Letras chutadas: " + array;
}

tagBtVerificaLetra.addEventListener("click", () => {
  const letra = tagLetraInformada.value.toLowerCase(); // toLowerCase transforma em minusculo
  tagLetraInformada.value = "";
  letrasChutadas.push(letra);

  if (letra.length !== 1 || !letra.match(/[a-z]/)) {
    alert("Digite uma letra válida.");
    return;
  }
  atualizarPalavraEscondida(letra);
  if (atualizarPalavraEscondida(letra) === true) {
    tagDica.textContent = "Letra correta! Continue tentando.";
  } else {
    letrasErradas++;
    tagTotErros.textContent = letrasErradas;
    tagDica.textContent = "Letra errada. Tente novamente.";
  }

  imprimeLetrasChutadas(letrasChutadas);
  verificarFimDeJogo();
});

tagBtSorteiaPalavra.addEventListener("click", function () {
  tagBtVerificaLetra.disabled = false;
  sortearPalavra();
});
  
// Inicializa o jogo
sortearPalavra();