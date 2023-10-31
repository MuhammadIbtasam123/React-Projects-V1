import React from 'react'

const date = new Date()
const Footer = (props) => {
  return (
    <div style={{'background':'cyan'}}>
        <p>{props.length} List {(props.length === 1)? 'item':'items'}</p>
        <h2>Copyright {date.getFullYear()}</h2>
        <h2>{date.getDay()}/{date.getMonth()}/{date.getFullYear()}</h2>
    </div>

  )
}

export default Footer