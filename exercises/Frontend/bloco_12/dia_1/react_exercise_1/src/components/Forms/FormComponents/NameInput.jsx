import React, { Component } from 'react';
import Input from '../../GenericComponents/Input';

class NameInput extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <Input 
        name="name"
        text="Nome Completo"
        type="text"
        value={ value }
        onChange={ onChange }
        maxLength="40"
        isRequired={ true }
      />
    );
  }
}

export default NameInput;
