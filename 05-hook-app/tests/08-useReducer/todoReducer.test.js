import { todoReducer } from '../../src/08-useReducer';

describe('Pruebas en todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false,
    },
  ];

  test('Debe regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('Debe agregar un TODO', () => {
    const action = {
      type: '[TODO] Add todo',
      payload: {
        id: 2,
        description: 'Nuevo Demo #2',
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('Debe eliminar un TODO', () => {
    const action = {
      type: '[TODO] Remove todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test('Debe realizar un Toggle del TODO', () => {
    const action = {
      type: '[TODO] Toggle todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState[0].done).toBe(true);
  });
});
