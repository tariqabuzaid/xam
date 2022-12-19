import React from 'react';
import { waitFor, render, getByTestId } from '@testing-library/react';

import '@testing-library/jest-dom';

import LoginScreen from '../LoginScreen';
import { User } from '../../../@types/StateType';
import { StaticRouter } from 'react-router-dom/server';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '../../../hooks/AuthProvider';

const renderComponent = () =>
  render(
    <StaticRouter location={''}>
      <AuthProvider>
        <LoginScreen />
      </AuthProvider>
    </StaticRouter>
  );

it('should render login screen properly', async () => {
  const { findByTestId } = renderComponent();

  const branchId = findByTestId('test-branchId');
  expect(branchId).toBeTruthy();

  const username = findByTestId('test-username');
  expect(username).toBeTruthy();

  const password = findByTestId('test-password');
  expect(password).toBeTruthy();
});

it('should displays all form labels correctly', async () => {
  const { queryByText } = renderComponent();

  expect(queryByText('Branch Id')).toBeInTheDocument();
  expect(queryByText('Username')).toBeInTheDocument();
  expect(queryByText('Password')).toBeInTheDocument();
});

it('Should show validation messages for each login form input', async () => {
  const { queryByText, getByTestId } = renderComponent();

  const button = getByTestId('test-login-btn');

  act(() => {
    userEvent.click(button);
  });

  await waitFor(() => {
    expect(
      queryByText('Branch ID must be a number and at least 4 digits long')
    ).toBeInTheDocument();

    expect(queryByText('Please enter a username')).toBeInTheDocument();
    expect(queryByText('Please enter a password')).toBeInTheDocument();
  });
});

it('Show validation message when authentication failed', async () => {
  const { queryByText, getByTestId } = renderComponent();

  const button = getByTestId('test-login-btn');

  userEvent.type(getByTestId('test-branchId'), '1235');
  userEvent.type(getByTestId('test-username'), 'test');
  userEvent.type(getByTestId('test-password'), 'test');

  act(() => {
    userEvent.click(button);
  });

  await waitFor(() => {
    expect(queryByText('Invalid credentials')).toBeInTheDocument();
  });
});

it('Show validation message when authentication failed', async () => {
  const { queryByText, getByTestId } = renderComponent();

  const button = getByTestId('test-login-btn');

  userEvent.type(getByTestId('test-branchId'), '10001');
  userEvent.type(getByTestId('test-username'), 'testuser01');
  userEvent.type(getByTestId('test-password'), 'pa55w0rd001');

  act(() => {
    userEvent.click(button);
  });

  await waitFor(() => {
    expect(queryByText('Invalid credentials')).not.toBeInTheDocument();
  });
});
