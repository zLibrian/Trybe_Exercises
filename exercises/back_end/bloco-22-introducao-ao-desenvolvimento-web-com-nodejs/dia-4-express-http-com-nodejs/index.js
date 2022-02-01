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

const handleGetRecipeBySearch = (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => (
    r.name.toLowerCase().includes(name.toLowerCase())
    && r.price <= parseInt(maxPrice, 10)
  ));
  res.status(200).json(filteredRecipes);
};

const handleGetRecipesById = (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id, 10));
  if (!recipe) return res.status(404).send('Receita nao encontrada');
  res.status(200).json(recipe);
};

const handleGetDrinkByName = (req, res) => {
  const { name } = req.query;
  const filtereDrink = drinks.filter((drink) => drink.name.includes(name));
  res.status(200).json(filtereDrink);
};

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (typeof (price) !== 'number' || price < 0) {
    return res.status(404).json({ message: 'Invalid data!' });
  }
  next();
};
app.get('/drinks', handleGetDrinks);
app.get('/drinks/search', handleGetDrinkByName);
app.get('/drinks/:id', handleGetDrinkById);

app.get('/recipes/search', handleGetRecipeBySearch);
app.get('/recipes/:id', handleGetRecipesById);
app.get('/recipes', handleGetRecipes);

// ...

app.post('/recipes', validatePrice, (req, res) => {
  const { name, price, waitTime } = req.body;
  const newId = recipes[recipes.length - 1].id + 1;
  recipes.push({ newId, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!' });
});

app.post('/drinks', validatePrice, (req, res) => {
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