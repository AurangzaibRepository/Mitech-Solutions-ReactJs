/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactInformation from '../ContactInformation';

const mockData = {
  address: 'MITECH SOLUTIONS\nNo 7, Jalan HP 1/8, Hill Park\n43500, Semenyih, Selangor.',
  contact_number: '+60122163731',
};

test('Test contact information', () => {
  render(<ContactInformation data={mockData} />);

  expect(
    screen.getByText('Contact Information'),
  ).toBeInTheDocument();

  expect(
    screen.getByText('Our address:'),
  ).toBeInTheDocument();

  expect(
    screen.getByText('Call us:'),
  ).toBeInTheDocument();

  expect(
    screen.getByText(/MITECH SOLUTIONS No 7, Jalan HP 1\/8/),
  ).toBeInTheDocument();

  expect(
    screen.getByText('+60122163731'),
  ).toBeInTheDocument();
});
