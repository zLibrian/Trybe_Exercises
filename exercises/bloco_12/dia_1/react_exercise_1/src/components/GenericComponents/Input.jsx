import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { name, type, text, value } = this.props;
    const { onChange, maxLength, isRequired, onBlur } = this.props;
    return (
      <label>
        { text }
        <input 
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
          maxLength={ maxLength }
          required={ isRequired }
          onBlur={ onBlur }
        />
      </label>
    );
  }
}

export default Input;
