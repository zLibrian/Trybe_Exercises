import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <button
        type="submit"
        onClick={ onClick }
      >
        {text}
      </button>
    );
  }
}

export default Button;
