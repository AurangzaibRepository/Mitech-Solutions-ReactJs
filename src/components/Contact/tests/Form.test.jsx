/* eslint-disable no-undef */
import React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import Form from '../Form';

it('Render fields', () => {
  render(<Form />);
  expect(
    screen.getByLabelText('Name:'),
  ).toBeInTheDocument();

  expect(
    screen.getByLabelText('Email:'),
  ).toBeInTheDocument();

  expect(
    screen.getByLabelText('Subject:'),
  ).toBeInTheDocument();

  expect(
    screen.getByLabelText('Message:'),
  ).toBeInTheDocument();
});
