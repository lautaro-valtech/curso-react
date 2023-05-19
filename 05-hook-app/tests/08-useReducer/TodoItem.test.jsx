import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer';

describe('Pruebas en <TodoItem />', () => {
  const todo = {
    id: 1,
    description: 'Piedra del alma',
    done: false,
  };

  const onToggleTodoMock = jest.fn();
  const onDeleteTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe mostrar el TODO pendiente a completar', () => {
    render(
      <TodoItem
        {...todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  test('Debe mostrar el TODO completado', () => {
    todo.done = true;

    render(
      <TodoItem
        {...todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('El span debe llamar al onToggleTodo cuando se hace onClick', () => {
    render(
      <TodoItem
        {...todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('El button debe llamar el onDeleteTodo', () => {
    render(
      <TodoItem
        {...todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const deleteButton = screen.getByRole('button', { name: 'Borrar' });
    fireEvent.click(deleteButton);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
