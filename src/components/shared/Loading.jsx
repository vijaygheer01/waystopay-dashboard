import React from 'react'

const Loading = () => {
  return (
    <div className='main-content d-flex justify-content-center align-items-center min-vh-100'> 
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default Loading