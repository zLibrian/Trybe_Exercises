const bodyParser = require('body-parser');
const express = require('express');
const { drinks, recipes } = require('./data');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('Escutando na porta %s', 3000));

const handleGetDrinks = (req, res) => {
  const orderedByName = [...drinks].sort((a, b) => a.name.localeCompare(b.name));
  res.status(200).json(orderedByName);
};

const handleGetRecipes = (req, res) => {
  const orderedByName = [...recipes].sort((a, b) => a.name.localeCompare(b.name));
  res.status(200).json(orderedByName);
};

const handleGetDrinkById = (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id, 10));
  if (!drink) return res.status(404).send('Drink not found!');
  return res.status(200).json(drink);
};

const handleGetBySearch = (req, res) => {
  const { name, maxPrice } = req.query;
  if (!name && !maxPrice) return res.status(404).send('Produto nao encontrado');
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price <= parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
};

const handleGetRecipesById = (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id, 10));
  if (!recipe) return res.status(404).send('Bebida nao encontrada');
  res.status(200).json(recipe);
};

app.get('/drinks', handleGetDrinks);
app.get('/recipes/:id', handleGetRecipesById);
app.get('/recipes/search', handleGetBySearch);
app.get('/recipes', handleGetRecipes);
app.get('/drink/:id', handleGetDrinkById);

// ...

app.post('/recipes', (req, res) => {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!' });
});

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Bebida adicionada com sucesso' });
});

app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id, 10));
  recipes[recipeIndex] = { ...recipes[recipeIndex], name, waitTime };
  res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === +id);
  recipes.splice(recipeIndex, 1);
  res.status(204).send('Receita removida com sucesso!!');
});

app.all('*', (req, res) => (
  res.status(404).json({ message: `The path'${req.path}' doesn't exists` })
));