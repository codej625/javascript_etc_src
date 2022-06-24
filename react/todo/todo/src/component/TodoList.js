import React from 'react';
import TodoListItem from './TodoListItem';


const TodoList = ({items}) => {
  return (
    <React.Fragment>
      <ul>{items}</ul>
      <TodoListItem />
    </React.Fragment>
  );
}

export default TodoList;
