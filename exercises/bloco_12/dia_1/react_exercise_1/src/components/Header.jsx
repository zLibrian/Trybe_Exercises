import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      color: '',
      clicks: 0,
    }
    this.handleChangeColor = this.handleChangeColor.bind(this); 
  }

  handleChangeColor(event) {
    this.setState((prevState, props) => ({
      clicks: prevState.clicks + 1,
    }))
    if(event.target.innerHTML % 2 === 0) {
      event.target.style.backgroundColor = 'red';
    }
    if(event.target.innerHTML % 2 !== 0) {
      event.target.style.backgroundColor = 'green';
    }
  }

  render() {
    return(
      <div>
        <span>Verde Quando par</span>
        <p onClick={this.handleChangeColor}>{this.state.clicks}</p>
      </div>
    );
  }
}

export default Header;
