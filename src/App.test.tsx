import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('recharts', () => ({
  ResponsiveContainer: jest.fn(() => <div>Container</div>),
}));
test('renders Exactly challenge', () => {
  render(<App />);
  const title = screen.getByText(/Exactly challenge/i);
  expect(title).toBeInTheDocument();
});
