import React from 'react'

const Search = ({search ,setSearch}) => {
  return (
    <from>
        <label htmlFor="">Search</label>
        <input 
            type="text" 
            placeholder='Search items'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}        
        />
    </from>
  )
}

export default Search