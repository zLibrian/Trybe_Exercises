const fs = require('fs').promises;

fs.writeFile('./meuArquivo.txt', "meu texto de cu")
  .then(() => console.log("Arquivo de cu"))
  .catch((err) => console.log(err))