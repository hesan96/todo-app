import React, { Component } from 'react'
import TodoHeader from './TodoHeader'
import './Todo.css'
import TodoList from './TodoList'
import TodoData from './TodoData'

class TodoItem extends Component {
  

    state = {
      lists: [
        {
          name: 'apple',
          isSelected: false
        },
        {
          name: 'ball',
          isSelected: false
        },
        {
          name: 'cat',
          isSelected: false
        },
        {
          name: 'doll',
          isSelected: false
        }
      ]
    }
  

  deleteList = index => {
    const lists = Object.assign([], this.state.lists)
    lists.splice(index, 1)
    this.setState({ lists: lists })
  }

  addList = (item, pos) => {
    const { lists } = this.state
    const newItem = {
      name: item,
      isSelected: false
    }

    lists.splice(pos - 1, 0, newItem)
    this.setState({ lists: lists })
  }

  selectList = index => {
    const { lists } = this.state
    lists[index].isSelected = !lists[index].isSelected
    this.setState({ lists: lists })
  }

  render () {
    return (
      <div className='todo'>
        <TodoHeader addList={this.addList} />

        <TodoList
          list={this.state.lists}
          deleteList={this.deleteList}
          selectList={this.selectList}
        />
      </div>
    )
  }
}

export default TodoItem
