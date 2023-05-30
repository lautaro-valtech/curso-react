import { authReducer, types } from '../../../src/auth';

describe('Pruebas en authReducer', () => {
  test('Debe retornar el estado por defecto', () => {
    const currentState = { logged: false };
    const newState = authReducer(currentState, {});

    expect(newState).toBe(currentState);
  });

  test('Debe llamar al login, autenticar y establecer el user', () => {
    const currentState = { logged: false };
    const action = {
      type: types.login,
      payload: {
        id: 1,
        name: 'Fernando Herrera',
      },
    };
    const newState = authReducer(currentState, action);

    expect(newState).toEqual({
      ...newState,
      logged: true,
      user: action.payload,
    });
  });

  test('Debe llamar al logout, borrar el name del usuario y logged en false', () => {
    const currentState = {
      logged: true,
      user: { id: 1, name: 'Fernando Herrera' },
    };
    const action = {
      type: types.logout,
    };
    const newState = authReducer(currentState, action);

    expect(newState).toEqual({
      logged: false,
    });
  });
});
