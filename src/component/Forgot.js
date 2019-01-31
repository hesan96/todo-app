import React, { Component } from 'react'

import './Forgot.css'

import createHistory from 'history/createBrowserHistory'

const history = createHistory() 

class Forgot extends Component {

  constructor (props) {
    super(props)
    this.signFunction = this.signFunction.bind(this)
  }

  signFunction () {
    // const history = createHistory()
    const location = {
      pathname: '/forgot'
    }
    // eslint-disable-next-line
    this.props.history.push('/login')
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

            <label>Email</label>
            <input
              className='size'
              type='text'
              name='emailId'
              // value={this.state.fields.emailId}
              // onChange={this.handleChange}
              placeholder='Enter email address'
            />

<div className='button'>
        <button>Forgot</button>
      </div>
      <div className='right' onClick={this.signFunction}>
                Sign In
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Forgot
