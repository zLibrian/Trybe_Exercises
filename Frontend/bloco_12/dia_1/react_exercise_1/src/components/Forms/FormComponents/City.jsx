import React, { Component } from 'react';
import Input from '../../GenericComponents/Input';

class CityInput extends Component {
  render() {
    const { onChange, value, onBlur } = this.props;
    return (
      <Input 
        name="city"
        text="City"
        type="text"
        value={ value }
        onChange={ onChange }
        maxLength="28"
        isRequired={ true }
        onBlur={ onBlur }
      />
    );
  }
}

export default CityInput;
