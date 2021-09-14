import React from 'react';
import '../Styles/App.scss';

const Todo = ({ affair, todo }) => {
  return (
    <div className='Todo__Item'>
      <input
        type='checkbox'
        checked={affair.done}
        onChange={() => todo.completeTodo(affair.id)}
      />
      {affair.title}
      &nbsp;
      <button onClick={() => todo.deleteTodo(affair.id)}>Удалить</button>
    </div>
  );
};

export default Todo;
