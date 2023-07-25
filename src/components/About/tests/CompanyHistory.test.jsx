/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import CompanyHistory from '../CompanyHistory';

const mockData = "We believe that the customer deserves the best possible service. We endeavor to bring you competitive prices backed by the best possible after sales service. Mitech2u was established in 2011 and as of 2016 have repaired and upgraded more than 1000's of computers.We offer full computer service and repair for low prices, different kind of products with reasonable price. We offer a wide range of services to home users and small to medium sized businesses. Our senior engineers have each been repairing computers for the best part of 10 years and with this wealth of experience to call upon you can rest assured that you, your' computer and your' data are in safe hands.";

test('Test company history', () => {
  render(<CompanyHistory history={mockData} />);

  expect(
    screen.getByText('Our Company History'),
  ).toBeInTheDocument();

  expect(
    screen.getByText('We believe that', { exact: false }),
  ).toBeInTheDocument();

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', 'company-history.png');
  expect(image).toHaveAttribute('alt', 'Company history');
});
