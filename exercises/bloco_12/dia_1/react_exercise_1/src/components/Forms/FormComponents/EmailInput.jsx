import React, { Component } from 'react';
import Input from '../../GenericComponents/Input';

class EmailInput extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <Input 
        name="email"
        text="Email"
        type="text"
        value={ value }
        onChange={ onChange }
        maxLength="50"
        isRequired={ true }
      />
    );
  }
}

export default EmailInput;
