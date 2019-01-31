import React, { Component } from 'react'

class createHistory extends Component {
  render () {
    return createnewHistory({
      initialEntries: ['/'], // The initial URLs in the history stack
      initialIndex: 0, // The starting index in the history stack
      keyLength: 6, // The length of location.key
      // A function to use to confirm navigation with the user. Required
      // if you return string prompts from transition hooks (see below)
      getUserConfirmation: null
    })
  }
}
export default createHistory
