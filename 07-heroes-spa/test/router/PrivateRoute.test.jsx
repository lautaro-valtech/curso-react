import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Pruebas en <PrivateRoute />', () => {
  test('Debe mostrar el children si está autenticado', () => {
    Storage.prototype.setItem = jest.fn();
    const contextValue = { logged: true, user: { id: 1, name: 'Samanta' } };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <PrivateRoute>
            <h1>Página Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Página Privada')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
