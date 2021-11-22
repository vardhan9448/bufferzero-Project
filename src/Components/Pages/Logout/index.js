import React from 'react'

const Logout = () => {
    localStorage.setItem('isLogin', false)
    return (
        <div>
            <h3>your logged out</h3>
            
        </div>
    )
}

export default Logout
