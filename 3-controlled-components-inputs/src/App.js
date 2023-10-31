import { useState,useEffect } from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import AddItem from './AddItem';
import Search from './Search';
import apiRequest from './apiRequest'
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
  const API_URL = 'http://localhost:3500/items'
  // const [items,setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
  const [items,setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search,setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  /*
    1- Use Effect Hook : Its run on every render, either you type character in input field or 
    reload page.
    2- By defualt behaviour is it render on any change/ or when component renders.
    3- Otherwise we specify the condition when it has to render, called it as dependency.
    4- Its execution is asynchoronous means every other part of code runs and it run in the last
     if needed. Like if the dependency (assume item state) on which the useEffect use to run is 
     changes at end then useEffect needed to be call else not.
     5- Code update: Now we know the use case that use Effect runs depends on its dependency 
     then we can add the load items (define in useState) part inside useEffect when like app 
     runs first time. This is IDEAL thing to do.
     6- Code update: Another thing we can do is to set useEffect when items added or deleted.
     for that follow useState and useEffect code changes shows how it works.

     Short Circut operator ( || ): Let suppose when you first load the items from local storage, at 
     initial there may be no data in storage then React throw error because it has to operate on 
     array but there is Null store in memory.
    
     1- const [items,setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
     2- useEffect(()=>{
     localStorage.setItem('ShoppingList',JSON.stringify(items));
     },[items])
     3- remove SetAndSaveItems function and Modify it with setItems.

*/
//default
// useEffect(()=>{
//   console.log('render')
// })

// Specify Dependency -> [] shows it renders only on load time.
// useEffect(()=>{
//   localStorage.setItem('ShoppingList',JSON.stringify(items));
// },[items])

useEffect(()=>{
  // fetching the items 
  const fetchItems = async () =>{
    try{
      const response = await fetch(API_URL)
      const data = await response.json()
      // if no response is there in between range of (200) throw error 
      if (!response.ok) throw Error('Didnt receive the required items!')
      setItems(data)
      // if there is no error then set state to null
      setFetchError(null)
    } catch (error){
      // if there is error then set state to what error you obtain that will corespond to the 
      // error message mention above in throw.
      setFetchError(error.message)
    }finally{
      setIsLoading(false)
    }
  }
  // now we need to call this function inside use effect function
  // now consider a scenario where data from api takes time.
  setTimeout(() => {
    (async ()=> await fetchItems())();
  }, 2000);

}

,[])

// [items] shows it renders when item is added or deleted.
// useEffect(()=>{
//   console.log('render')
// },[items])

  const SetandSaveItems = (ItemsList) =>{
    setItems(ItemsList);
  }

  const Additem = async (item)=>{
    /*
      means if there are items in items array of objects than access the last object in items 
      array and get the id of that object and add one to it. If there are no items in that 
      array then it set it to 1.
    */
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    /* Creating a new item object and add/modify properties related to that items. */
    const newItemObject = {id,item,checked:false}
    /* Now add the created new item in the list of items */
    const ItemsList = [...items,newItemObject]
    SetandSaveItems(ItemsList);

    // post items
    // 1- make objectPost , url wher to post 
    // 2- every post object contains 3 things method, header, body
    // 3- use async await.

    const postObject = {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newItemObject)
    }
    const result = await apiRequest(API_URL,postObject)
    if (result) setFetchError(result)

  }
  const handleCheck = async (id)=>{

    const newItems = items.map( (item) => item.id === id ? {...item,
      checked : !item.checked } : item);
      SetandSaveItems(newItems);

    //here to update item

    //1- first find the item who needed to be updated
    //2- it return a new array so access it using array if its only one element
    //3- we need another url that is api_url + id cancatenated.
    const myItem = newItems.filter((item)=> item.id===id)
    const updateObj={
      method:'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({checked:myItem[0].checked})
    }
    const reqURL = `${API_URL}/${id}`
    const result = await apiRequest(reqURL,updateObj)
    if (result) setFetchError(result)
  }

  const handleDelete = (id)=>{
    const newItems = items.filter( (item)=> !(item.id === id && item.checked === true))
    // console.log(newItems)
    SetandSaveItems(newItems);

    const myItem = items.filter( (item)=> (item.id === id && item.checked === true))
    const deleteObj={
      method:"DELETE"
    }
    const reqURL = `${API_URL}/${myItem[0].id}`
    const result = apiRequest(reqURL,deleteObj)
    if (result) setFetchError(result)

}

const HandleSubmit = (e)=>{
  // stopiing the default page reload behaviour
  e.preventDefault();
  if (!newItem) return;
  // Whenever you pass the item in input field the state updates.
  // AddItem function add the newItem in the list
  Additem(newItem)
  setNewItem("")
}

  return (
    <div className="App">
      <Header 
        name='AL-FATAH STORE'
        title='Grocery List'
      />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        HandleSubmit={HandleSubmit}
      />

      <Search 
        search={search}
        setSearch={setSearch}
      />

      <main>
      {isloading && <p style={{color:'green'}}>Items are Loading...</p>}
      {fetchError && <p style={{color:'red'}}> {`Error:${fetchError}`}</p>}
      {/* See how you pass the data from App to Content and Footer Component */}
      {!fetchError && !isloading && <Content 
        //Here we filter the items and then pass it to content component to render it on screen.
        //Those items are shown according to what you type in search state variable. 
        items={items.filter((item)=> item.item.toLowerCase().includes(search.toLowerCase()))}
        // items= {items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />}
      </main>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
