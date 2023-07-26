/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Portfolio from '../index';

test('Test portfolio', () => {
  render(<Portfolio />);

  expect(
    screen.getByText('Take a look at our Portfolio'),
  ).toBeInTheDocument();
});
