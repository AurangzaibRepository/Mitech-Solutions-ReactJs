/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '..';

test('Test Navbar', () => {
  render(<BrowserRouter><Navbar /></BrowserRouter>);

  userEvent.click(screen.getByText('Services'));

  expect(
    screen.getByText('MiTech Solutions'),
  ).toBeInTheDocument();

  expect(
    screen.getByText('Services'),
  ).toBeInTheDocument();
});
