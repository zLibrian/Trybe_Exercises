const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 45.0, waitTime: 25 },
];

module.exports = {
  drinks,
  recipes,
};

Array.prototype.remove = function (from, to) {
  const rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

const teste = [
  {
    id: 2,
    name: 'Macarrão a Bolonhesa',
    price: 35,
    waitTime: 25,
  },
  {
    id: '4',
    name: 'Frango empanado',
    price: '60',
  },
  {
    id: '4',
    name: 'Frango empanado',
    price: '60',
  },
  {
    id: '4',
    name: 'Frango empanado',
    price: '60',
  },
  {
    id: 1,
    name: 'Lasanha',
    price: 40,
    waitTime: 30,
  },
  {
    id: 3,
    name: 'Macarrão com molho branco',
    price: 45,
    waitTime: 25,
  },
];

console.log(teste.length); 
teste.remove(0);
console.log(teste.length); 
