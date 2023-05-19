import { useState } from 'react';

import PropTypes from 'prop-types';

import { useForm } from '../hooks';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();

    if (!description.trim().length) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description.trim(),
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='description'
        value={description}
        onChange={onInputChange}
        placeholder='¿Qué hay que hacer?'
        className='form-control'
      />

      <button type='submit' className='btn btn-outline-primary mt-1'>
        Agregar
      </button>
    </form>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

TodoAdd.defaultProps = {
  onNewTodo: () => {},
};
