import './App.css';
import {useEffect, useState} from 'react'
import User from './User';
import Post from './Post';
import Comment from './Comment';
import List from './List';

function App() {
  useEffect(() => {
  }, [])
  

  // API URL
  const API_URL_user = 'https://jsonplaceholder.typicode.com/users'
  const API_URL_post = 'https://jsonplaceholder.typicode.com/posts'
  const API_URL_comment = 'https://jsonplaceholder.typicode.com/comments'

  // What we get from API stored in item state
  const [item,setItem] = useState([])
  // To display or not the List component
  const [objVisible,setObjVisible] = useState(false)

  // Function to fetch data from API (GET request)
  const display = async(url)=>{

    const response = await fetch(url)
    console.log(response.status)
    if(!response.ok) throw Error ("Reload Page...")
    const data = await response.json()
    console.log(data)
    setItem(data)
    setObjVisible(true)

  }
  return (
  <>
      <div className="App">
        <User display={display} API_URL_user={API_URL_user} />
        <Post display={display} API_URL_post={API_URL_post}  />
        <Comment display={display} API_URL_comment={API_URL_comment}  />
      </div>
      { objVisible && <List key={item.id} item={item}/>}
  </>
  );
}

export default App;
