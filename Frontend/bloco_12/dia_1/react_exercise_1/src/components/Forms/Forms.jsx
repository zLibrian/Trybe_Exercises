import React, { Component } from 'react';
import NameInput from '../Forms/FormComponents/NameInput';
import Button from '../GenericComponents/Button';
import CityInput from './FormComponents/City';
import CPFInput from './FormComponents/CPFInput';
import EmailInput from './FormComponents/EmailInput';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      houseType: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;

    if (name === 'name') {
      value = value.toUpperCase();
    }
    if (name === 'city') {
    }
    this.setState({
      [name]: value,
    })
  }

  handleClick(e) {
    // e.preventDefault();
    console.log(e.charCode)
  }

  handleBlur() {
    let { city } = this.state;
    // for(let index = 0; index < city.length; index += 1) {
    //   console.log(typeof(city[index]) === '5' ? 'cinco' : 'string');
    //   // RegExp
    // }
    const test = '125sss125FFFFFFFFFFFFFFFFFF668';
    const str = new RegExp("[0-9]", "g");
    // console.log(test.startsWith(str))
    // const regex = new RegExp("[^a-zA-Z ]", "a");
    console.log(test.replace(str, '5'));
// console.log(city.replace(/[a-zA-Z ]/g, ""));
// city.startsWith()
//     city = city.replace(regex, '');
// this.setState({city: city})
// console.log(city.replace(regex, ""));
  }

  render() {
    const { name, email, cpf, city, state, houseType } = this.state;
    return (
      <form onSubmit={ (e) => e.preventDefault()}>
        <NameInput value={ name } onChange={ this.handleChange } />
        <EmailInput value={ email } onChange={ this.handleChange } />
        <CPFInput value={ cpf } onChange={ this.handleChange } />
        <CityInput value={ city } onChange={ this.handleChange } onBlur={ this.handleBlur }/>
        <Button text="Enviar" onClick={ this.handleClick } />
      </form>
    );
  }
}

export default Forms;
