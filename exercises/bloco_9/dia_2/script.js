const fetchJoke = async () => {
  const param = { headers: { Accept: 'application/json' } };
    const myFetch = await fetch('https://icanhazdadjoke.com/', param);
     const response = await myFetch.json();
     const documento = document.getElementById('jokeContainer');
     documento.innerHTML = await response.joke;

};

fetchJoke();
