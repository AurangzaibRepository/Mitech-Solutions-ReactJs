/* eslint-disable no-undef */
import React from 'react';
import {
  render,
  screen,
  fireEvent,
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

it('Submit failure', async () => {
  const { container } = render(<Form />);
  const spans = await container.getElementsByClassName('spn-error');

  fireEvent.submit(screen.getByRole('button'));
  expect(spans.length).toBe(4);
});
