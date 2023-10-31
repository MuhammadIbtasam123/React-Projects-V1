import React from 'react'

const Comment = ({display,API_URL_comment}) => {
    return (
        <>
          <div>
            <button 
                className="border-nav"
                onClick={()=> display(API_URL_comment)}
                >COMMENT
            </button>
          </div>
    
        </>
      )
}

export default Comment