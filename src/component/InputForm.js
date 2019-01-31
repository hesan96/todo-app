import React, { Component } from 'react'
import Button from './Button'
import './InputForm.css'

class InputForm extends Component {
  constructor () {
    super()
    this.state = {
      fields: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitbtn = this.submitbtn.bind(this)
  }

  handleChange (e) {
    let fields = this.state.fields
    fields[e.target.name] = e.target.value
    this.setState({
      fields
    })
  }
  submitbtn (e) {
    e.preventDefault()
    if (this.validateForm()) {
      let fields = {}
      fields['emailId'] = ''
      fields['password'] = ''
      this.setState({ fields: fields })
      alert('SUBMITTED')
    }
  }

  validateForm () {
    let fields = this.state.fields
    let errors = {}
    let valid = true

    if (!fields['emailId']) {
      valid = false
      errors['emailId'] = '* Please enter your email-ID'
    }

    if (typeof fields['emailId'] !== 'undefined') {
      // regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      )
      if (!pattern.test(fields['emailId'])) {
        valid = false
        errors['emailId'] = '*Please enter valid email-ID.'
      }
    }

    if (!fields['password']) {
      valid = false
      errors['password'] = '*Please enter your password.'
    }

    if (typeof fields['password'] !== 'undefined') {
      if (
        !fields['password'].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        valid = false
        errors['password'] =
          '*Password must  have min 8 variables including uppercase , lowercase, number and a special character.'
      }
    }

    this.setState({ errors })
    return valid
  }

  render () {
    return (
      <div>
        <form method='post' name='submitbtn' onSubmit={this.submitbtn}>
          <label>Email</label>
          <input
            className='size'
            type='text'
            name='emailId'
            value={this.state.fields.emailId}
            onChange={this.handleChange}
            placeholder='Enter email address'
          />
          <div className='errorMsg'>{this.state.errors.emailId}</div>
         <label>Password</label>
          <input
            className='size'
            type='password'
            name='password'
            value={this.state.fields.password}
            onChange={this.handleChange}
            placeholder='Enter password'
          />
          <div className='errorMsg'>{this.state.errors.password}</div>
          <Button />
        </form>
      </div>
    )
  }
}

export default InputForm
