import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders app with "Users text"', () => {
  render(<App />);
  const userHeader = screen.getByText(/Users/i);
  expect(userHeader).toBeInTheDocument();
});
