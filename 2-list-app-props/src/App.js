import { useState } from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
/*          SUMMARY OF PROPS
 1- Props are basically is the short for property. When you have to pass the data from 
 parent to child to child, it is called prop drilling. 
 2- You can pass a function, an object as props from one component to another.

 in previous list-app code we have state maintain in content component. In here we have state 
 maintain in App component and we pass array of object, function that cah ges state from App
 component to Content component and use the in either 2 ways:
 1- {items, handlecheck} (destrcturing way)
 2- function content(props)
 then use {props.items} JS method.
*/
function App() {
  const [items,setItems] = useState([
    {
      id: 1,
      item: 'Chicken Karahi',
      checked: true
    },
    {
      id: 2,
      item: 'Chicken Biryani',
      checked: false
    },
    {
      id: 3,
      item: 'Chicken BBQ',
      checked: false
    }
  ]);

  const handleCheck = (id)=>{

    const newItems = items.map( (item) => item.id === id ? {...item, 
      checked : !item.checked } : item);
    setItems(newItems);
    localStorage.setItem('ShoppingList',JSON.stringify(newItems));

  }

  const handleDelete = (id)=>{
    const newItems = items.filter( (item)=> !(item.id === id && item.checked === true))
    setItems(newItems);
    localStorage.setItem('ShoppingList',JSON.stringify(newItems));
}

  return (
    <div className="App">
      <Header 
        name='IBTASAM'
        title='Grocery List'
      />
      {/* See how you pass the data from App to Content and Footer Component */}
      <Content 
        items= {items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
