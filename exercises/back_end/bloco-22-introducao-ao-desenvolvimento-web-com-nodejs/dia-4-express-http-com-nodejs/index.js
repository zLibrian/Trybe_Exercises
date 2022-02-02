const bodyParser = require('body-parser'); // Middleware responsavel por deixar acessivel à nossa aplicacao o req.body
const cors = require('cors'); // Middleware responsavel por aceitar requisicoes de outras aplicacoes. Sem ele o navegador nao permitira acesso à nossa API
const express = require('express'); // Requerindo o modulo do express 
const { drinks, recipes } = require('./data'); // Common JS pra pegar dados entre arquivos

const app = express(); // Instância uma aplicação express 

// App.use(middleware()) faz com que o middleware em questao se torne global na aplicacao
// (só é visivel pelos códigos escritos abaixo da declarao dele!)

app.use(cors(), bodyParser.json()); // Define que esses middlewares serao globais e
// que nos permitirão aceitar requisicoes de outras aplicacoes e usar req.body. 

// Diz qual porta o app ira utilizar para se comunicar
app.listen(3000, () => console.log('Escutando na porta %s', 3000));

// Middleware = Entendemos como middleware, em express, todas
// as funcoes que sao utilizadas em alguma rota, seja direta ou indiretamente. 

// Todo middleware pode receber 3 parametros, sendo ele:
// req (requisicao do client),
// res (resposata que o servidor enviará)
// next() (funcao que permite utilizar mais de um middleware em cada rota.
// Vale ressaltar que deve ser chamada no final do código pq ela finaliza o fluxo daquele determindo middleware)

// Um middleware responsavel por retornar todas as bebidas em ordem alfabetica.
const handleGetDrinks = (req, res) => {
  const orderedByName = [...drinks].sort((a, b) => a.name.localeCompare(b.name));
  res.status(200).json(orderedByName);
};

const handleGetRecipes = (req, res) => {
  // const { token } = req.headers;
  // console.log(token);
  const orderedByName = [...recipes].sort((a, b) => a.name.localeCompare(b.name));
  res.status(200).json(orderedByName);
};

// res.status(numeroStatus) - define qual codigo sera retornado ao client
// res.send('mesangem') - envia uma mensagem de qualquer tipo ao client.
// res.json(obj) - sinaliza que o retorno será do tipo JSON - substitui o uso de res.send()

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

// Rotas da nossa aplicacao. Toda e qualquer rota segue a estrutura de:
// app.verbo('caminhoDaRota', middlewares);

// Os principais verbos amplamente utilizados sao: GET, POST, PUT, DELETE.
// No final das contas isso se torna um CRUD (Create, read, Update, Delete)

// Verbo GET
// Verbo padrao nas pesquisas de navegador e é o verbo responsavel pela acao de requisicao de dados para leitura.
// Retorna status 200 que significa que a requisicao ocorreu com sucesso, ou status 404 de requisicao com erro,
app.get('/drinks', handleGetDrinks);
app.get('/drinks/search', handleGetDrinkByName);
app.get('/drinks/:id', handleGetDrinkById);

app.get('/recipes/search', handleGetRecipeBySearch);
app.get('/recipes/:id', handleGetRecipesById);
app.get('/recipes', handleGetRecipes);

// Verbo POST
// Responsavel pela acao de insercao de dados na nossa aplicacao(banco de dados).
// Retorna status 201 que significa que algo foi criado com sucesso
app.post('/recipes', validatePrice, (req, res) => {
  const { name, price, waitTime } = req.body;
  const newId = recipes[recipes.length - 1].id + 1;
  recipes.push({ newId, name, price, waitTime });
  res.status(201).json({ message: 'Receita adicionada com sucesso !!!' });
});

app.post('/drinks', validatePrice, (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Bebida adicionada com sucesso' });
});

// Verbo PUT
// Responsavel pela acao de alteracao de dados já existentes
// Retorna status 204 que significa 'No content', ou seja, que ele nao está contente xD
// Status 204 significa que a operacao deu sucesso mas o servidor nao retornou nada para o client
app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id, 10));
  recipes[recipeIndex] = { ...recipes[recipeIndex], name, waitTime };
  res.status(204).end();
});

// Verbo DELETE
// Verbo responsavel pela acao de deletar dados da nossa aplicacao.
// Retorna status 204 
app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === +id);
  recipes.splice(recipeIndex, 1);
  res.status(204);
});

// app.all diz que qualquer rota que nao tenha sido declarada anteriormente,
// cairá aqui e retorna o que o middleware especificar
app.all('*', (req, res) => (
  res.status(404).json({ message: `The path'${req.path}' doesn't exists` })
));
