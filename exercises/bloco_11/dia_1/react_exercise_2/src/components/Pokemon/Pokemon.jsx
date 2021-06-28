import React, { Component } from 'react';
import './pokemon.css'
class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image, moreInfo } } = this.props;
    const { value, measurementUnit } = averageWeight;
    return (
      <section className="pokemon">
        <div className="pokemonInfo">
          <p>Name: { name }</p>
          <p>Type: { type }</p>
          <p>Avarage weight: { value } { measurementUnit }</p>
        </div>
        <a href={ moreInfo } className="pokemonImage">
          <img src={ image }  alt={ name } />
          <p>Pokemon Info</p>
        </a>
      </section>
    );
  }
}

export default Pokemon;
