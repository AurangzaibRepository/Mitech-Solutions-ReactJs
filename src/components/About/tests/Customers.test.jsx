/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Customers from '../Customers';

test('Test customers', () => {
  render(<Customers />);

  const element = screen.getByText('Our Customers');

  expect(element).toBeInTheDocument();

  const image = screen.getByRole('img');

  expect(image).toHaveAttribute('alt', 'Customers');
  expect(image).toHaveAttribute('src', 'customer-logos.png');
});
