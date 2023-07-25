/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactInformation from '../ContactInformation';

const mockData = {
  email: 'mitech2u@gmail.com',
  phone_number: '+60122163731',
  whatsapp_number: '+60122163731',
};

test('test contact information', () => {
  render(<ContactInformation
    email={mockData.email}
    phoneNumber={mockData.phone_number}
    whatsAppNumber={mockData.whatsapp_number}
  />);

  expect(
    screen.getByText('Call us'),
  ).toBeInTheDocument();

  expect(
    screen.getByText('Whatsapp us'),
  ).toBeInTheDocument();

  expect(
    screen.getByText('mitech2u@gmail.com'),
  ).toBeInTheDocument();

  expect(
    screen.getAllByText('+60122163731'),
  ).toBeInTheDocument();
});
