import React from 'react';
import { useAuth } from '../hooks/AuthProvider';

const ToNav = () => {
  const { user, logout } = useAuth();

  return (
    <div className="top-nav">
      <h2>{user}</h2>
      <a
        onClick={e => {
          e.preventDefault();
          logout();
        }}
        className="btn btn-primary"
        style={{ cursor: 'pointer' }}
      >
        Logout
      </a>
    </div>
  );
};

export default ToNav;
