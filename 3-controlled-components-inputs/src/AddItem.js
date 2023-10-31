import React from 'react'

const AddItem = ({newItem, setNewItem, HandleSubmit}) => {
  return (
    <form onSubmit={HandleSubmit}>
      <label> Add Item</label>
      <input 
        type="text" 
        placeholder='Add item...'
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default AddItem