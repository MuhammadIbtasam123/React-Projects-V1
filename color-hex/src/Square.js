import React from 'react'

const Square = ({colorName}) => {
  return (
    <>
      <div style={{
        backgroundColor:`${colorName}`
      }}>hello</div>
      <p>{ (colorName) && `color name :${colorName} `}</p>
    </>
  )
}

export default Square