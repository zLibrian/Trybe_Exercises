import { Component } from 'react';
import './App.css';
import Input from './components/Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      // textInput: ''
    }
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges({ target: { value, name, checked, type } }) {
    const valuee = type === 'checkbox' ? checked : value
    this.setState({
      [name]: valuee
    })
    console.log(this.state);
  }
  componentDidUpdate(){

    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <form>
          <Input onChange={this.handleChanges} name="inputTextArea"/>
          <Input onChange={this.handleChanges} name="TCC"/>
          <input type="checkbox" onChange={this.handleChanges} name="Checkbox"/>
        </form>
      </div>
    );
  }
}

export default App;
