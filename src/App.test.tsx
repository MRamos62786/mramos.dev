import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Writing tests for your own website that only you will support is a bit silly... right??

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/marco ramos/i);
  expect(linkElement).toBeInTheDocument();
});
