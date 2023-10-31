
import './App.css';
import {useState} from 'react'

//this basically a jsx a jvascript + Html code
//things to note you cannot render object (insted use array)
//anything inside {} is JS code

// A basic React counter App
//Concept  JSX + useState + useState + EventHandler previous state issue resolved using setState.
//So, it's a good practice to use the functional form of state updates, especially when the 
// new state depends on the previous state value. setCount((previousState)=> previousState+1 )
//a useState hook is basically a component different items state whhch may vary and the 
// component render automatically when changes occurr and react DOM see the changes and apply 
// affect without page reload. 


function App() {
  const buttonRight = {'marginRight':'10px'}
  const buttonLeft = {'margin-left':'10px'}
  const [count,setCount] = useState(5);

  const increment = ()=> {
    setCount((previousState)=> previousState+1 )

  }

  const decrement = ()=>{
    setCount((previousState)=> previousState-1 )
  }

  return (
    <div className="App">

      <h1>Counter App</h1>
      <button style={buttonRight} onClick={increment}>+</button>
      <span>{count}</span>
      {(count===0)?<button style={buttonLeft} disabled>-</button>:<button style={buttonLeft} onClick={decrement}>-</button>}
    </div>  
  );
}

export default App;
