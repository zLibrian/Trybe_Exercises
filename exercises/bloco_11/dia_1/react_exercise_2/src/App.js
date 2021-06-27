import logo from './logo.svg';
import './App.css';
import Image from './image';
import catsData from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
          <Image source={ catsData } alt='Gatinho' className='App-logo' />
      </header>
    </div>
  );
}

export default App;
