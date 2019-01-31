import React, { Component } from 'react'
import './TodoList.css'
import TodoList from './TodoList'

class TodoData extends Component {
  render () {
    const active = this.props.details.isSelected
    return (
      <div
        className={`listrow ${active ? 'selected' : null}`}
        onClick={() => this.props.selEvent(this.props.itemIndex)}
      >
        {active ? <img className='tick' src={require('./../../src/images/tick.jpg')} /> : null}

        <div className='list'>
          <span className='close'>
            {!active ? (
              <img
                onClick={() => this.props.delEvent(this.props.itemIndex)}
                className='img'
                src={require('./../../src/images/close_img.png')}
                alt='close-img'
              />
            ) : null}
          </span>

          <p>{this.props.details.name}</p>
        </div>
      </div>
    )
  }
}

export default TodoData
