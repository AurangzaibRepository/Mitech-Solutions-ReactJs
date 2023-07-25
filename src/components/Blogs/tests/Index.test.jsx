/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Blogs from '../index';

test('Test blogs', () => {
  render(<Blogs />);

  expect(
    screen.getByText('Blogs'),
  ).toBeInTheDocument();
});
