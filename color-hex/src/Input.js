import React from 'react'

const Input = ({color,setColor}) => {

  const styleInput = {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      border:'1px solid black',
      width:'20%',
      height:'10%'
  }
  return (
    <form>
        <input 
            style={styleInput}
            type="text" 
            required
            placeholder='Enter color Name.. '
            value={color}
            onChange={(e)=>setColor(e.target.value)}
            
        />
    </form>
  )
}

export default Input