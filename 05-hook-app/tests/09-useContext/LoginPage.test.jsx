import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/userContext';

describe('Pruebas en <LoginPage />', () => {
  test('Debe mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByTestId('pre-tag');
    expect(preTag.innerHTML).toBe('null');
  });

  test('Debe llamar al setUser cuando se hace click en el botón', () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonElement = screen.getByRole('button', {
      name: 'Establecer usuario',
    });

    fireEvent.click(buttonElement);

    expect(setUserMock).toHaveBeenCalledWith({
      id: 1,
      name: 'Lautaro',
      email: 'test@example.com',
    });
  });
});
