/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import SliderSection from '../SliderSection';

test('Test slider section', () => {
  render(<SliderSection />);

  const imageList = screen.getAllByRole('img');
  imageList.forEach((image) => expect(image).toHaveAttribute('alt', 'Product'));
});
