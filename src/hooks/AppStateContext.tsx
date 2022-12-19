import React, { createContext, useContext, useReducer } from 'react';
import { AppContextType } from '../@types/AppContextType.d.';
import { ChildrenPropsType } from '../@types/ChildrenPropsType';
import { User, Action, State } from '../@types/StateType';

const initialState: State = {
  users: [
    {
      branchId: 10001,
      userName: 'testuser01',
      password: 'pa55w0rd001',
      firstName: 'John',
      middleName: 'Sanchez',
      lastName: 'Doe',
      position: 'Developer',
    },
    {
      branchId: 10002,
      userName: 'testuser02',
      password: 'pa55w0rd002',
      firstName: 'Ricardo',
      middleName: 'Dubov',
      lastName: 'Martinez',
      position: 'Lead Developer',
    },
    {
      branchId: 10003,
      userName: 'testuser03',
      password: 'pa55w0rd003',
      firstName: 'Gol',
      middleName: 'Denver',
      lastName: 'Roger',
      position: 'Project Manager',
    },
  ],
};

const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => null,
});

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'REMOVE_USER':
      let newState = state.users.filter(user => user !== action.payload);
      return {
        ...state,
        users: newState,
      };
    default:
      return state;
  }
}

function useAppState() {
  const context = useContext(AppContext);
  if (!context) throw new Error('AppContext must be used in AppStateProvider');

  return context;
}

function AppStateProvider({ children }: ChildrenPropsType) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

function addUser(dispatch: React.Dispatch<any>, user: User) {
  dispatch({
    type: 'ADD_USER',
    payload: user,
  });
}

function removeUser(dispatch: React.Dispatch<any>, user: User) {
  dispatch({
    type: 'REMOVE_USER',
    payload: user,
  });
}

function uniqueUsername(state: State, username: string) {
  let users = state.users.filter(u => u.userName === username);

  if (users.length > 0) {
    return false;
  }

  return true;
}

export { addUser, removeUser, useAppState, uniqueUsername };
export default AppStateProvider;
