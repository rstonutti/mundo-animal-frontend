import React, { useReducer } from 'react';
import { AppRouter } from './routes/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('token')) || { logged: false };
};

export const MundoAnimalApp = () => {

  const [jwt, dispatch] = useReducer(authReducer, {}, init)

  return (
    <AuthContext.Provider value={{jwt, dispatch}}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
