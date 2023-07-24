/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../Form';

test('Test form', () => {
  render(<Form />);

  const element = screen.getByText('Name:');

  expect(element).toBeInTheDocument();
});
