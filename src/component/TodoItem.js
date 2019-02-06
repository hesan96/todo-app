import React, { Component } from 'react'
import TodoHeader from './TodoHeader'
import './Todo.css'
import TodoList from './TodoList'

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

  deleteList = (index, e) => {
    const lists = Object.assign([], this.state.lists)
    lists.splice(index, 1)
    this.setState({ lists: lists })
    e.preventDefault() // Let's stop this event.
    e.stopPropagation()
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

  reorder = (startIndex, endIndex) => {
    console.error('index', startIndex, endIndex)
    const { lists } = this.state
    console.error('lists', lists)
    const result = Array.from(lists)
    console.error('result', result)
    const [removed] = result.splice(startIndex, 1)
    console.error('removd', removed)
    result.splice(endIndex, 0, removed)

    this.setState({ lists: result })
    console.error('result', result)
  }

  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    this.reorder(result.source.index, result.destination.index)
  }

  render () {
    return (
      <div className='todo'>
        <TodoHeader addList={this.addList} />

        <TodoList
          list={this.state.lists}
          deleteList={this.deleteList}
          selectList={this.selectList}
          onDragEnd={this.onDragEnd}
        />
      </div>
    )
  }
}

export default TodoItem
