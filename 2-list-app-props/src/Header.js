import React from 'react'

/*
    Way to Access props that is using props.name etc
*/
const Header = (props) => {
const name = props.name
  return (
    <div style={{'background':'cyan','margin':'0px'}}>      
        <h1>Hello {name}!</h1>
        <h1>{props.title}</h1>
    </div>
  )
}

/*
    DEFAULT PROPS : when parent can't pass props and child component expect the props then 
    the default value is set.
    To verify its working remove title from App component send as props.
*/

Header.defaultProps = {
    title : 'Default Title'
}

export default Header