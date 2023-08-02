/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
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
});
