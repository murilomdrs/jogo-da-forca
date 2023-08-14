const palavras = ['Santander', 'Cachorro', 'Aeroporto', 'Morango', 'Teclado', 'Caneta', 'Cafeteira', 'Frontend', 'Backend', 'Desenvolvedor'];
const palavra = document.querySelector("#palavra");
let palavraMascarada = '';

function sorteioPalavra() {
  const indiceSorteado = Math.floor(Math.random() * palavras.length);
  return palavras[indiceSorteado];
};

function esconderPalavra() {
  for(let letra = 0; letra < palavraEscolhida.length; letra++) {
    palavraMascarada += ' - '
  }
}

function exibirPalavra() {
  palavra.innerHTML = palavraMascarada
}

// Iniciando o jogo da forca
const palavraEscolhida = sorteioPalavra();
esconderPalavra()
exibirPalavra()

console.log(palavraEscolhida)
console.log(palavraMascarada)
