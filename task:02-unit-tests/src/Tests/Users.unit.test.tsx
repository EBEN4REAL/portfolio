// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Users from '../Components/Users';
import {getUsers} from "../Services/users"
import { config } from "../config";


describe("Users component", () => {
  it('Fetches at least one user from the API', async () => {
    const users = await getUsers(`${config.APP_BASE_URL}/users`)
    expect(users.length).toBeGreaterThan(0);
  });
})