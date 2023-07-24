/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import FormSection from '../FormSection';

test('Test form section', () => {
  render(<FormSection />);

  let element = screen.getByText('Write a message');
  expect(element).toBeInTheDocument();

  element = screen.getByTitle('Facebook icon');
  expect(element).toBeInTheDocument();

  const anchor = screen.getAllByRole('link');
  expect(anchor[0]).toHaveAttribute('href', 'https://www.facebook.com');
});
