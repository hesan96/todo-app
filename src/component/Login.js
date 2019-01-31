import React, { Component } from 'react'
import InputForm from './InputForm'
import './Login.css'


class Login extends Component {
  constructor (props) {
    super(props)
    this.clickFunction = this.clickFunction.bind(this)
  }

  clickFunction () {
    // const history = createHistory()
    const location = {
      pathname: '/login'
    }
    // eslint-disable-next-line
    this.props.history.push('/forgot')
  }

  render () {
    return (
      <div className='loginpage'>
        <div className='cen'>
          <div className='padd'>
            <img
              className='img'
              src={require('./../optus-logo.png')}
              alt='optus-logo'
            />

            <InputForm />

            <p>
              <div className='left'>
                <span>
                  <input
                    className='checkBox'
                    type='checkbox'
                    name='check'
                    value='remember'
                  />
                  Remember Me
                </span>
              </div>
              <div className='right' onClick={this.clickFunction}>
                Forgot Password?
              </div>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
