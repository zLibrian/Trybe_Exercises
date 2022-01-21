const fs = require('fs').promises;

const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const readAndWriteMultipleFile = (arrayStrings) => {
  arrayStrings.map((string, index) => fs.writeFile(`file${+index + 1}.txt`, string));
};

readAndWriteMultipleFile(array);

const main = async () => {
  const files = Array.from({ length: 5 }, (_s, index) => `file${index + 1}.txt`);
  const arrayDePromises = files.map((file) => fs.readFile(file, 'utf-8'));
  const result = await Promise.all(arrayDePromises);
  fs.writeFile('fileAll.txt', result.join(' '));
};

main();

// readAndWriteMultipleFile(array);