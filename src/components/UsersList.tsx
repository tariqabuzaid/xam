import React from 'react';
import { useAppState } from '../hooks/AppStateContext';
import { removeUser } from '../hooks/AppStateContext';

const UsersList = () => {
  const { state } = useAppState();
  const { dispatch } = useAppState();

  return (
    <div className="userlist-table mt-5 p-2 table-responsive">
      <h3 className="Auth-form-title">Users</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Branch ID</th>
            <th scope="col">Username</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {state.users.map((user, index) => (
            <tr key={user.branchId}>
              <th scope="row">{index + 1}</th>
              <td>{user.branchId}</td>
              <td>{user.userName}</td>
              <td>
                {user.firstName} {user.middleName} {user.lastName}
              </td>
              <td>{user.position}</td>
              <td>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => {
                    if (confirm('Are you sure you want to delete?')) {
                      removeUser(dispatch, user);
                    }
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UsersList;
