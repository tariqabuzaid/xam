import React from 'react';
import FormError from '../../components/FormError';
import { useAuth } from '../../hooks/AuthProvider';
import { useAppState } from '../../hooks/AppStateContext';
import { useNavigate } from 'react-router-dom';

const LoginScreen: React.FC = () => {
  const [branchId, setBranchId] = React.useState<number>(0);
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const [branchIdError, setBranchIdError] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const [formError, setFormError] = React.useState('');

  const navigate = useNavigate();
  const { login } = useAuth();
  const { state } = useAppState();

  const validateForm = () => {
    let isValid = true;

    setFormError('');

    if (!Number(branchId) || branchId.toString().length < 4) {
      setBranchIdError('Branch ID must be a number and at least 4 digits long');
      isValid = false;
    } else {
      setBranchIdError('');
    }

    if (!username) {
      setUsernameError('Please enter a username');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Please enter a password');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      const user = login(branchId, username, password, state);

      if (user) {
        window.location.replace('/');
      } else {
        setFormError('Invalid credentials');
      }
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          {formError && <FormError error={formError} style="box" />}
          <div className="form-group mt-3">
            <label>Branch Id</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Branch Id"
              onChange={event => {
                setBranchId(parseInt(event.target.value));
              }}
              data-testid="test-branchId"
            />
            {branchIdError && (
              <FormError
                error={branchIdError}
                data-testid="test-branchId-error"
              />
            )}
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
              onChange={event => {
                setUsername(event.target.value);
              }}
              data-testid="test-username"
            />
            {usernameError && <FormError error={usernameError} />}
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={event => {
                setPassword(event.target.value);
              }}
              data-testid="test-password"
            />
            {passwordError && <FormError error={passwordError} />}
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              data-testid="test-login-btn"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
