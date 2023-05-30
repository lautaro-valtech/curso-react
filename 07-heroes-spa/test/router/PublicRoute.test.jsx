import { render, screen } from '@testing-library/react';

import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('Pruebas en <PublicRoute />', () => {
  test('Debe mostrar el children si no está autenticado', () => {
    const contextValue = { logged: false };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Página Pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Página Pública')).toBeTruthy();
  });

  test('Debe navegar si está autenticado', () => {
    const contextValue = { logged: true, user: { id: 1, name: 'Strider' } };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path='login'
              element={
                <PublicRoute>
                  <h1>Página Pública</h1>
                </PublicRoute>
              }
            />

            <Route path='/' element={<h1>Página Privada</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Página Privada')).toBeTruthy();
  });
});
