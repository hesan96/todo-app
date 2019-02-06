import React, { Component } from 'react'
import TodoData from './TodoData'
import './TodoList.css'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: grid * 2,
  background: isDragging ? null : 'white',
  ...draggableStyle
})

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? null : 'white',
  padding: grid
})

class TodoList extends Component {
 

  render () {
    return (
      <DragDropContext onDragEnd={this.props.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div  
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.props.list.map((item, index) => (
                <Draggable key={index} draggableId={`id${index}`} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <TodoData
                        details={item}
                        itemIndex={index}
                        delEvent={this.props.deleteList}
                        selEvent={this.props.selectList}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

export default TodoList
