import React from 'react'

const date = new Date()
const Footer = () => {
  return (
    <div style={{'background':'cyan'}}>
        <h2>Copyright {date.getFullYear()}</h2>
        <h2>{date.getDay()}/{date.getMonth()}/{date.getFullYear()}</h2>
    </div>

  )
}

export default Footer