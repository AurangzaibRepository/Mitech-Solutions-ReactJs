/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import FormSection from '../FormSection';

test('Test form section', () => {
  render(<FormSection />);

  expect(
    screen.getByText('Write a message'),
  ).toBeInTheDocument();

  expect(
    screen.getByText('If you got any questions, please do not hesitate to send us a message. We reply within 24 hours !'),
  ).toBeInTheDocument();

  expect(
    screen.getByText('Our profiles in social media:'),
  ).toBeInTheDocument();

  expect(
    screen.getByTitle('Facebook icon'),
  ).toBeInTheDocument();

  expect(
    screen.getByTitle('Googleplus icon'),
  ).toBeInTheDocument();

  expect(
    screen.getByTitle('Twitter icon'),
  ).toBeInTheDocument();

  const anchor = screen.getAllByRole('link');
  expect(anchor[0]).toHaveAttribute('href', 'https://www.facebook.com');
});
