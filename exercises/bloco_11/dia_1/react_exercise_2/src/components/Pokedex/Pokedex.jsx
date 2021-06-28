import React, { Component } from 'react';
import data from '../../data';
import Pokemon from '../Pokemon/Pokemon';
import './pokedex.css'
class Pokedex extends Component {
  render() {
    return (
      <section className="pokedex">
        { data.map((pokemon) => <Pokemon pokemon={ pokemon } key={ pokemon.id } /> )}
      </section>
    );
  }
}

export default Pokedex;
