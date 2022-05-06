import React, { Component } from 'react';
import './pokemonStyle.css';
class Pokemon extends Component {
  render() {
    const { name, type, image, averageWeight: { value, measurementUnit } } = this.props.pokemon;
    return (
      <div className="pokeChart">
        <div className="pokeCard">
          <p>Name: {name}</p>
          <p>Type: {type}</p>
          <p>Weight: {value} {measurementUnit}</p>
        </div>
        <img src={image} alt={name}></img>
      </div>
    );
  };
};

export default Pokemon;
