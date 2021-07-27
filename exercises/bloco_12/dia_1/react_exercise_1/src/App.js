import React, { Component } from 'react';
import './App.css';
import Header from './components/Home/Header';
import Forms from './components/Forms/Forms';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Forms />
      </div>
    );
  }
}

export default App;
