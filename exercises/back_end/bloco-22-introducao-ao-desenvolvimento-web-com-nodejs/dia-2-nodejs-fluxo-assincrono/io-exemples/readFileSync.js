const fs = require('fs')

const nomeArquivo = 'meuArquivo.txt';

try {
  const data = fs.readFileSync(nomeArquivo, 'utf-8');
  console.log(data);
} catch (error) {
  console.error(`Erro ao ler o arquivo: ${error.path}`);
  console.log(error);
}