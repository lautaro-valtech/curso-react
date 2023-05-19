import { useState } from 'react';
import { UserContext } from './userContext';

// const user = {
//   id: 1,
//   name: 'Lautaro',
//   email: 'lautaro.coria@valtech.com',
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
