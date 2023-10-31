
import './App.css';
import Input from './Input.js'
import Square from './Square.js'
import {useState} from 'react'

function App() {
  const [color,setColor] = useState('')
  return (
    <div className="App">
      <Input 
        color={color}
        setColor={setColor}
      />
      <Square 
        colorName={color}
      />
    </div>

  );
}

export default App;
