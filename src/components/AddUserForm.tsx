import React from 'react';
import FormError from './FormError';

const AddUserForm = ({ saveUser }: { saveUser: any }) => {
  const [branchId, setBranchId] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [middleName, setMiddleName] = React.useState('');
  const [position, setPosition] = React.useState('');

  const [branchIdError, setBranchIdError] = React.useState('');
  const [userNameError, setUserNameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [firstNameError, setFirstNameError] = React.useState('');
  const [lastNameError, setLastNameError] = React.useState('');
  const [middleNameError, setMiddleNameError] = React.useState('');
  const [positionError, setPositionError] = React.useState('');

  const handleReset = () => {
    setBranchId('');
    setUserName('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setMiddleName('');
    setPosition('');
    setBranchIdError('');
    setUserNameError('');
    setPasswordError('');
    setFirstNameError('');
    setLastNameError('');
    setMiddleNameError('');
    setPositionError('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let isValid = true;

    if (!branchId || branchId.toString().length < 4 || !Number(branchId)) {
      setBranchIdError('Branch ID is required, and should be a number');
      isValid = false;
    } else {
      setBranchIdError('');
    }
    if (!userName) {
      setUserNameError('Username is required');
      isValid = false;
    } else {
      setUserNameError('');
    }
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }
    if (!firstName) {
      setFirstNameError('First Name is required');
      isValid = false;
    } else {
      setFirstNameError('');
    }
    if (!lastName) {
      setLastNameError('Last Name is required');
      isValid = false;
    } else {
      setLastNameError('');
    }
    if (!middleName) {
      setMiddleNameError('Middle Name is required');
      isValid = false;
    } else {
      setMiddleNameError('');
    }
    if (!position) {
      setPositionError('Position is required');
      isValid = false;
    } else {
      setPositionError('');
    }

    if (isValid) {
      saveUser({
        branchId,
        userName,
        password,
        firstName,
        lastName,
        middleName,
        position,
      });
    }
  };
  return (
    <form className="adduser-form mt-5" onSubmit={handleSubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Add User</h3>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Brenach ID"
            value={branchId}
            onChange={event => {
              setBranchId(event.target.value);
            }}
          />
          {branchIdError && <FormError error={branchIdError} />}
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={userName}
            onChange={event => {
              setUserName(event.target.value);
            }}
          />
          {userNameError && <FormError error={userNameError} />}
        </div>

        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={firstName}
            onChange={event => {
              setFirstName(event.target.value);
            }}
          />
          {firstNameError && <FormError error={firstNameError} />}
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Middle Name"
            value={middleName}
            onChange={event => {
              setMiddleName(event.target.value);
            }}
          />
          {middleNameError && <FormError error={middleNameError} />}
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={lastName}
            onChange={event => {
              setLastName(event.target.value);
            }}
          />
          {lastNameError && <FormError error={lastNameError} />}
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Position"
            value={position}
            onChange={event => {
              setPosition(event.target.value);
            }}
          />
          {positionError && <FormError error={positionError} />}
        </div>

        <div className="form-group mt-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
          />
          {passwordError && <FormError error={passwordError} />}
        </div>
        <button type="submit" className="btn btn-primary mt-3 m-2">
          Submit
        </button>

        <button
          type="reset"
          className="btn btn-light mt-3 m-2"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
};
export default AddUserForm;
