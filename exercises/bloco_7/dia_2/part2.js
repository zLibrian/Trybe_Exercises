// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addKey = (obj, key, value) => {
  obj[key] = value;
};

addKey(lesson2, 'turno', 'noite');

// console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (object) => Object.keys(object);
// console.log(listKeys(lesson2));

// Crie uma função para mostrar o tamanho de um objeto.
const showObjectSize = (object) => Object.keys(object).length;
// console.log(showObjectSize(lesson3));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = (object) => Object.values(object);
// console.log(listValues(lesson1));

const allLessons = Object.assign({},  {lesson1, lesson2, lesson3} );

const arrayComAsInformacoes = Object.keys(allLessons);
// console.log (arrayComAsInformacoes[0]);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const returnTotalStudents = (object) => {
  let numeroStudents = 0;
  const arrayWithAllLessons = Object.values(object);
  for (let index in arrayWithAllLessons){
    numeroStudents += arrayWithAllLessons[index].numeroEstudantes;
  }
  return numeroStudents;
}

console.log(returnTotalStudents(allLessons));
// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// Copiar
// console.log(getValueByNumber(lesson1, 0));
// // Output: 'Matématica'
// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: