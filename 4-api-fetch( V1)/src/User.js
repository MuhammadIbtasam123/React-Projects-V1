import React from 'react'
const User = ({display,API_URL_user}) => {
  return (
    <>
      <div>
        <button 
            className="border-nav"
            onClick={()=> display(API_URL_user)}
            >User
        </button>
      </div>

    </>
  )
}

export default User