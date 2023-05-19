import { useEffect, useReducer } from 'react';

import { TodoAdd, TodoList, todoReducer } from './';

// const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    dispatch({
      type: '[TODO] Add todo',
      payload: newTodo,
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove todo',
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Toggle todo',
      payload: id,
    });
  };

  return (
    <>
      <h1>
        TodoApp: 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
