
import './App.css';
import {useState} from 'react';

function App() {
  // let name = 'Ling';
  const [name, setName] = useState('Ling');

  const handleClick = () => {
    if(name == 'Hedy'){
      setName('Ling');
    }else{
    setName('Hedy');
  }
  }


  return (
    <div className="App">
      <h2>Event click</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
     
    </div>
  );
}

export default App;
