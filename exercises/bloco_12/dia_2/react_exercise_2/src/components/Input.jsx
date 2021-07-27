import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { onChange, name } = this.props;
    return (
      <input onChange={onChange} placeholder="Digite seu nome" name={name}/>
    );
  }
}

export default Input;
