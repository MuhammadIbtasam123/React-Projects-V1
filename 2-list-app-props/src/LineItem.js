import React from 'react'

const LineItem = ({item,handleCheck,handleDelete}) => {
  return (
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
  )
}

export default LineItem