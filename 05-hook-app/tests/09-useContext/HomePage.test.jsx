import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/userContext';

describe('Pruevas en <HomePage />', () => {
  test('Debe mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('Debe mostrar el componente con el usuario', () => {
    const user = { id: 1, name: 'lautaro' };

    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const headingTag = screen.getByRole('heading', { level: 1 });
    expect(headingTag.innerHTML).toContain(user.name);

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain(user.id.toString());
    expect(preTag.innerHTML).toContain(user.name);
  });
});
