import React, {useState} from 'react'


//in this we learn about how list renders on front end.
//importance of 'key' with each list item-> identify uniquely by react.
//use of JSX, {JS} , map function, useState, advance condition 
// if...else /// ()?: /// () && <Admin /> (means if without else)

// SUMMARY
// React needs to know the id of the item you want to do something with.
// we use key={item.id} as used in li element.
// handle check basically handle/changes the current state of item/radio box by using the 
// id on which it is clicked.
// it apply .map() function that return new list and just changes where checked attribute of 
// object changes, rest remain same.
//Use of ()?: + spread operator (...item) which means in object all property remain same 
// just change chechk property

const Content = () => {

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
  ])

  const handleCheck = (id)=>{

    const newItems = items.map( (item) => item.id === id ? {...item, 
      checked : !item.checked } : item);
    setItems(newItems);
    localStorage.setItem('ShoppingList',JSON.stringify(newItems));

  }
  // filter return that element on which condition is true.
  // it does not return elements other than on which condition is true.
  // so here i dont want the item which is clciked + chechked status is true.
  // so basically this code i.e (item.id === id && item.checked === true) return the clicked and chechked item.
  // i want item other than that so i put ! i.e !(item.id === id && item.checked === true).
  const handleDelete = (id)=>{
    const newItems = items.filter( (item)=> !(item.id === id && item.checked === true))
    setItems(newItems);
    localStorage.setItem('ShoppingList',JSON.stringify(newItems));
}

  // const handleDelete = (id)=>{
  //     const newItems = items.filter( (item )=> (item.id !== id ) && item)
  //     setItems(newItems);
  //     localStorage.setItem('ShoppingList',JSON.stringify(newItems));
  // }

  return (
    <div>
      {items.length ?
      (<ul>
      {
        items.map((item)=>(
          <li key={item.id}>
            <input 
              type="checkbox" 
              //whenever you have to deal with arguments/parameters, pass a anonymous function inside handler
              onChange={()=>handleCheck(item.id)}
              checked={item.checked}
              style={{marginRight:'20px'}}
            />
              {item.item}

            <button style={{marginLeft:'20px'}} onClick={()=>handleDelete(item.id)}>Delete</button>
            </li>
        ))
      }
      </ul>) : 
      <p style={{color:'red'}}>Items not found</p>}
    </div>
  )
}

export default Content


/* 
 1- Props are basically is the short for property. When you have to pass the data from 
 parent to child to child, it is called prop drilling. 
 2- You can pass a function, an object as props from one component to another.
*/