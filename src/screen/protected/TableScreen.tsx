import React from 'react';
import { User } from '../../@types/StateType';
import AddUserForm from '../../components/AddUserForm';
import TopNav from '../../components/TopNav';
import UsersList from '../../components/UsersList';
import { useAuth } from '../../hooks/AuthProvider';
import {
  addUser,
  useAppState,
  uniqueUsername,
} from '../../hooks/AppStateContext';

const TableScreen = () => {
  const { user } = useAuth();
  const { dispatch, state } = useAppState();

  function saveUser(user: User): void {
    if (uniqueUsername(state, user.userName)) {
      addUser(dispatch, user);
    } else {
      alert('Usrname already exists');
    }
  }
  return (
    <>
      <TopNav />
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12">
            <AddUserForm saveUser={saveUser} />
          </div>
          <div className="col-md-8 col-12">
            <UsersList />
          </div>
        </div>
      </div>
    </>
  );
};

export default TableScreen;
