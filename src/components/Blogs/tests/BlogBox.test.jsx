/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogBox from '../BlogBox';
import blogImage1 from '../../../assets/blogs/blog1.jpg';

const mockData = {
  title: 'How to get Windows 11 for free',
  description: 'Technically, Windows 11 isn’t free.',
};

test('Test blog box', () => {
  render(<BlogBox
    image={blogImage1}
    title={mockData.title}
    description={mockData.description}
  />);

  expect(
    screen.getByText(/How to get Windows/),
  ).toBeInTheDocument();

  expect(
    screen.getByText(/Technically, Windows 11/),
  ).toBeInTheDocument();

  expect(
    screen.getByRole('button'),
  ).toBeInTheDocument();

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', 'blog1.jpg');
  expect(image).toHaveAttribute('alt', 'Blog');
});
