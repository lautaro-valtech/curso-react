import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
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

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
