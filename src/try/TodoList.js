import React, { Component } from 'react'
import TodoData from './TodoData'
import './TodoList.css'

class TodoList extends Component {
  render () {
    return this.props.list.map((item, index) => (
      <TodoData
        details={item}
        itemIndex={index}
        delEvent={this.props.deleteList}
        selEvent={this.props.selectList}
      />
    ))
  }
}

export default TodoList
