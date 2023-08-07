/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '..';

test('Test Navbar', () => {
  render(<Navbar />);

  expect(
    screen.getByText('MiTech Solutions'),
  ).toBeInTheDocument();
});
