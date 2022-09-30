import React from 'react';
import { ListAssets } from './ListAssets';
import { render, screen } from '@testing-library/react';

jest.mock('recharts', () => ({
  ResponsiveContainer: jest.fn(() => <div>Container</div>),
}));

describe('ListAssets verification', () => {
  test('01', () => {
    render(<ListAssets />);
    // const linkElement = screen.getByText(/learn react/i);
    expect(
      screen.getByRole('table', { name: 'coins table' }),
    ).toBeInTheDocument();
  });
});
