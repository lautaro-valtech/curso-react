import { useContext } from 'react';
import { UserContext } from './context/userContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre data-testid='pre-tag'>{JSON.stringify(user, null, 3)}</pre>

      <button
        className='btn btn-primary'
        onClick={() =>
          setUser({ id: 1, name: 'Lautaro', email: 'test@example.com' })
        }
      >
        Establecer usuario
      </button>
    </>
  );
};
