import React from 'react';
import { PropTypes } from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todos } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  setUpdate: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  todos: PropTypes.node.isRequired,
};

export default TodosList;
