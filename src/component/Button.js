import React, { Component } from 'react'

import './Button.css'

class Button extends Component {


  
  render () {
    return (
      <div className='button'>
        <button onClick={()=>window.open("http://localhost:3000/sign_in" , "_blank")}> Sign In</button>
      </div>
    )
  }
}

export default Button
