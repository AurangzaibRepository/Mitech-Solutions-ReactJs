/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '..';

test('Test Navbar', () => {
  render(<BrowserRouter><Navbar /></BrowserRouter>);

  expect(
    screen.getByText('MiTech Solutions'),
  ).toBeInTheDocument();

  expect(
    screen.getByRole('link', { name: 'Services' }),
  ).toHaveAttribute('href', '/services');

  expect(
    screen.getByRole('link', { name: 'Portfolio' }),
  ).toHaveAttribute('href', '/portfolio');

  expect(
    screen.getByRole('link', { name: 'Blogs' }),
  ).toHaveAttribute('href', '/blogs');

  expect(
    screen.getByRole('link', { name: 'About us' }),
  ).toHaveAttribute('href', '/about');

  expect(
    screen.getByRole('link', { name: 'Contact us' }),
  ).toHaveAttribute('href', '/contact');
});
