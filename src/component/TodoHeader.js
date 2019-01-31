import React, { Component } from 'react'
import TodoData from './TodoData'
import './Todo.css'
class TodoHeader extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      position: ''
    }
  }

  handleItem = event => {
    this.setState({
      title: event.target.value
    })
  }

  handlePosition = event => {
    this.setState({
      position: event.target.value
    })
  }

  render () {
    return (
      <div className='main'>
        <div className='header'>
          <h1 className='heading'>TO DO LIST</h1>
          <div className='wrapper'>
            <input
              className='title'
              type='text'
              name='title'
              placeholder='title...'
              value={this.state.title}
              onChange={this.handleItem}
            />
            <input
              className='keyno'
              type='text'
              name='keyno'
              placeholder='position...'
              value={this.state.position}
              onChange={this.handlePosition}
            />

            <button
              className='addbtn'
              onClick={() =>
                this.props.addList(this.state.title, this.state.position)
              }
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default TodoHeader
