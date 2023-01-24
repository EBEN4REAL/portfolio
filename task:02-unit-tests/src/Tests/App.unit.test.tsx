import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import {getUsers} from "../Services/users"
import { config } from "../config";


describe("App component", () => {
  it('renders learn react link', () => {
    render(<App />);
    const usersHeader = screen.getByText(/Users/i);
    expect(usersHeader).toBeInTheDocument();
  });

  it('Fetches at least one user from the API', async () => {
    const users = await getUsers(`${config.APP_BASE_URL}/users`)
    expect(users.length).toBeGreaterThan(0);
  });
})

