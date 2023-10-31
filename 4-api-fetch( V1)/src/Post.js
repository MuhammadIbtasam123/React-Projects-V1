import React from 'react'

const Post = ({display,API_URL_post}) => {
    return (
        <>
          <div>
            <button 
                className="border-nav"
                onClick={()=> display(API_URL_post)}
                >POST
            </button>
          </div>
    
        </>
      )
}

export default Post