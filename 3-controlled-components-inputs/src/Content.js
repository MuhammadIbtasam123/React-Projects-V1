import ItemList from "./ItemList"

// another way of accessing props by destructuring 
const Content = ({items,handleCheck,handleDelete}) => {

  return (
    <>
    { (items.length) ? 
      ( <ItemList 
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
      /> ) : 
      (<p style={{color:'red'}}>Items not found</p>)
    }
    </>
  )
}

export default Content


