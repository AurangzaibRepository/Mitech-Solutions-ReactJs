/* eslint-disable no-undef */
import React from 'react';
import {
  render,
  screen,
  within,
} from '@testing-library/react';
import CoreServices from '../CoreServices';

const mockData = [
  {
    id: 1,
    property: 'Refurbished Desktops',
  },
  {
    id: 2,
    property: 'Refurbished Laptops',
  },
];

test('Test core services', () => {
  render(<CoreServices data={mockData} />);

  expect(
    screen.getByText('Refurbished Desktops'),
  ).toBeInTheDocument();

  expect(
    screen.getByText('Refurbished Laptops'),
  ).toBeInTheDocument();

  const list = screen.getByRole('list', {
    name: 'service-list',
  });

  const { getAllByRole } = within(list);
  const items = getAllByRole('listitem');
  expect(items.length).toBe(2);
});
