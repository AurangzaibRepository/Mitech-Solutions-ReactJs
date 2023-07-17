/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../index';

test('Test about', () => {
  render(<About />);

  const element = screen.getByText(/About/);

  expect(element).toBeInTheDocument();
});
