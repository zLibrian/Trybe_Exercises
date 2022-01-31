const { describe, it } = require('mocha');
const { should } = require('chai').should();

const ws = 0;

describe('Teste', () => {
  it('absurdo', () => {
    ws.should.be.a('number');
  });
});