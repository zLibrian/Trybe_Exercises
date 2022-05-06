const { uppercase } = require('./uppercaseExercise');


describe('Testa a funcao upperCase', () => {
  it('Retorna a string original pórem totalmente em maiuscula', (done) => {
     uppercase('Kevin', (string) => {
       expect(string).toBe('KEVIN');
       done();
      });
  });
});