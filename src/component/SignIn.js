import React, {Component} from 'react'
import './LoginPage.css'


class SignIn extends Component {
    render(){
        return (
            <div className='loginpage'>
             <img
              className='img'
              src={require('./../welcome.jpg')}
              alt='welcome'
            />

          </div>
          )
    }
}

export default SignIn
