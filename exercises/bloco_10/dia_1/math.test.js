const math = require('./math');
 
describe('Testa funcoes ./math', () => {
  it('Mock multiplicar function with 10 as default return', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
    expect(math.multiplicar()).toBe(10);
  });
  
  // it('Mock soma function ', () => {
  //   const mockSomar = jest.spyOn(math, 'somar');
  //   mockSomar.mockResolvedValue(5);
  //   expect(mockSomar(2, 3)).resolves.toStrictEqual(55);
  // });

  test("Testa chamada, retorno e parâmetros passados para soma com entrada de dois valores", async () => {
    const mockSomar = jest.spyOn(math, "somar");
    mockSomar.jest.implementaiton
    mockSomar.mockResolvedValue(5);
  
    mockSomar(2, 3);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(2, 3);
    await expect(mockSomar(2, 3)).resolves.toBe(55);
  });

  // test("Testa chamada, retorno e parâmetros passados para soma com entrada de dois valores", () => {
  //   const mockSomar = jest.spyOn(math, "somar");
  //   mockSomar.mockResolvedValue(5);
  //   mockSomar(2, 3);
  //   expect(mockSomar(2, 3)).resolves.toBe(5);
  // });
});