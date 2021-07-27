const { getUserName } = require('./getUserName');

describe('getUserName function tests with resolves/rejects', () => {
  describe('tests if the id exists', () => {
    expect.assertions(2);
    it('tests if the result when success', () => {
      expect.assertions(1);
      return expect(getUserName(4)).resolves.toBe('Mark');
    });

    it('tests if the id doesnt exist', () => {
      expect.assertions(1);
      return expect(getUserName(0)).rejects.toEqual({"error": "User with 0 not found."})
    })
  });


  describe('Testing getUserName with async/await', () => {
    it('tests if the id exists with async/await', async () => {
      expect.assertions(1);
      await expect(getUserName(5)).resolves.toBe('Paul');
    });
    
    it('tests if the id doesnt exist with async/await', async () => {
      expect.assertions(1);
      await expect(getUserName(0)).rejects.toEqual({"error": "User with 0 not found."});
    })
  });
});
