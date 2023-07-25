/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Mission from '../Mission';

const mockData = {
  mission: 'Our mission is to empower businesses with their technology by providing superior service, expertise and innovative products that satisfy the needs and exceed the expectations of our customers We have stayed true to our core values over the years and have created a company that our employees and clients are proud to associate with.',
  vision: 'To build a better world with Information Technology and most trusted IT advisor and key partner to our clients that recognized by our clients for delivering excellence.',
};

test('Test mission', () => {
  render(<Mission mission={mockData.mission} vision={mockData.vision} />);

  expect(
    screen.getByText('Our Mission'),
  ).toBeInTheDocument();

  expect(
    screen.getByText('Our Vision'),
  ).toBeInTheDocument();

  expect(
    screen.getByText(/Our mission is to/),
  ).toBeInTheDocument();

  expect(
    screen.getByText(/To build a better world/),
  ).toBeInTheDocument();

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', 'vision.png');
  expect(image).toHaveAttribute('alt', 'Vision');
});
