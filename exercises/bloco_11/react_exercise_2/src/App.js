import logo from './logo.svg';
import './App.css';
import Image from './image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alt='Gatinho' className='App-logo'/>
          <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alt='Gatinho' className='App-logo'/>
          <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alt='Gatinho' className='App-logo'/>
          <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alt='Gatinho' className='App-logo'/>
          <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alt='Gatinho' className='App-logo'/>
          <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alt='Gatinho' className='App-logo'/>
          <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alt='Gatinho' className='App-logo'/>
        </div>
    
      </header>
    </div>
  );
}

export default App;
