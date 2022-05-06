import React, { Component } from 'react';
import Input from '../../GenericComponents/Input';

class CPFInput extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <Input 
        name="cpf"
        text="CPF"
        type="text"
        value={ value }
        onChange={ onChange }
        maxLength="11"
        isRequired={ true }
      />
    );
  }
}

export default CPFInput;
