import React from 'react'

const List = ({item}) => {
  return (
    <ul>
      {item.map((element)=>(
        <li>
          {JSON.stringify(element, null, 2)}
        </li>
      ))}

    </ul>
  )
}

export default List