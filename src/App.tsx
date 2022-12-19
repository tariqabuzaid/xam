import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from './hooks/AuthProvider';
import ProtectedRoute from './routers/ProtectedRoute';
import LoginScreen from './screen/public/LoginScreen';
import TableScreen from './screen/protected/TableScreen';
import './App.css';

function App() {
  const { user } = useAuth();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={user}>
              <TableScreen />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </>
  );
}

export default App;
