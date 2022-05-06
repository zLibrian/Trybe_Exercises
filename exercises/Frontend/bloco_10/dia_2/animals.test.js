const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
   new Promise((resolve, reject) => {
    setTimeout(() => {
      const objAnimal = Animals.find((animal) => animal.name === name);
      if(objAnimal) {
        return resolve(objAnimal);
      }
      return reject('Nenhum animal com esse nome!');
    })
    }, 2000)
);
// (findAnimalByName('Dorminhoco').then((result) => console.log(result)));

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const objAnimal = Animals.find((animal) => animal.age === age);
      if(objAnimal) {
        return resolve(objAnimal);
      }
      return reject('Nenhum animal com essa idade'); 
    },200)
  })
}


const getAnimal = (name, age) => {
  if (!name && !age) return 'Nome ou idade precisam ser declarados';

  if(name && age) return findAnimalByName(name).then(animal => animal);

  if(name) {
    return findAnimalByName(name).then(animal => animal);
  }
  else if(age) {
    return findAnimalByAge(age).then(animal => animal);
  }
  
  return findAnimalByName(name).then(animal => animal);
};

console.log(getAnimal('Dorminhoco'));
describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    it('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    it('Retorna um erro', () => {
      // expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });

  describe('Quando existe o animal com a idade procurada', () => {
    it('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('', 1).then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  })
  
  describe('Quando nao existe animal com a idade especificada', () => {
    it('Retorna um erro quando o animal com a idade especificada nao é encontrado', () => {
      expect.assertions(1); 
      return getAnimal('', 3).catch(err => {
        expect(err).toEqual('Nenhum animal com essa idade');
      })
    })
  })
});
