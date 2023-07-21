/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../index';

test('Test contact', () => {
  render(<Contact />);

  const element = screen.getByText('Contact us');

  expect(element).toBeInTheDocument();
});
