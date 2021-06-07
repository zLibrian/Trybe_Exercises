import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li className="noListStyle">{value}</li>
  );
}

const toDoArray = [ 'Do the dinner', 'Take a Shower', 'Do the dishes', 'Clean the house', 'Go sleep' ];

const newArray = toDoArray.map((toDo, index) => {
  return Task(toDo);
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ol>
         {newArray}
        </ol>
      </header>
    </div>
  );
}

export default App;
