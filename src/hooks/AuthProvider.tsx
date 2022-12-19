import { createContext, useContext, useMemo } from 'react';
import React from 'react';
import { State } from '../@types/StateType';
import { ChildrenPropsType } from '../@types/ChildrenPropsType';
import LocalStorageHandler from '../utils/LocalStorageHandler';
import { AuthContextType } from '../@types/AuthContextType';

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: ChildrenPropsType) => {
  const localStorageHandler = new LocalStorageHandler();
  const user = localStorageHandler.getUsername();

  const login = (
    branchId: number,
    username: string,
    password: string,
    state: State
  ): string | boolean => {
    const user = state.users.find(
      user =>
        user.branchId === branchId &&
        user.userName === username &&
        user.password === password
    );

    console.log(user);

    if (typeof user === 'undefined') {
      return false;
    }

    localStorageHandler.setUsername(user.userName);

    return user.userName;
  };

  const logout = () => {
    localStorageHandler.setUsername(null);
    window.location.replace('/login');
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
