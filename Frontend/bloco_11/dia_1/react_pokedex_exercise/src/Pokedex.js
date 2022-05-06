import React, { Component } from 'react';
import data from './data';
import Pokemon from './Pokemon';
import './pokemonStyle.css';

class Pokedex extends Component {
  render() {
    return (
      <section className='pokedex'>
        <header><h1>Pokedex</h1></header>
        <div className='pokedexBox'>
          {data.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id}/> )}
        </div>
      </section>
     
    );
  };
};

export default Pokedex;
