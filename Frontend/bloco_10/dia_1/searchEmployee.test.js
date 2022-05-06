//  Demais exercicios desse bloco
//  https://github.com/tryber/sd-011-project-playground-functions/pull/148

const { searchEmployee } = require('./searchEmployee');

const expectedResult = { id: '4678-2',
firstName: 'Paul',
lastName: 'Dodds',
specialities: ['Backend'] };

describe('Test searchEmployee function', () => {
  it('Checks if searchEmployee throws an error to an inexistent ID', () => {
    expect(() => searchEmployee('1234-5', '')).toThrow(Error('ID não identificada'));
  });
  it('Checks if searchEmployee throws an error to an inexistent Detail Information', () => {
    expect(() => searchEmployee('4678-2', 'favoritePokemon'))
      .toThrow(Error('Informação indisponível'));
  });
  it('Checks if searchEmployee returns the expect result when parameters = ("4678-2", lastName)',
    () => expect(searchEmployee('4678-2', 'specialities')).toEqual(expectedResult.specialities));
  it('Checks if searchEmployee throws an error when ID and Details are inexistents', () => {
    expect(() => searchEmployee('', '')).toThrow();
  });
});
