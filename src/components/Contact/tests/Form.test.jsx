/* eslint-disable no-undef */
import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
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

  fireEvent.submit(screen.getByRole('button'));

  const spans = await container.getElementsByClassName('spn-error');
  await waitFor(() => expect(spans.length).toBe(4));
});

it('Submit success', async () => {
  const { container } = render(<Form />);

  fireEvent.input(screen.getByRole('textbox', { name: 'Name:' }), {
    target: {
      value: 'John',
    },
  });

  fireEvent.input(screen.getByRole('textbox', { name: 'Email:' }), {
    target: {
      value: 'john@gmail.com',
    },
  });

  fireEvent.input(screen.getByRole('textbox', { name: 'Subject:' }), {
    target: {
      value: 'Enquiry subject',
    },
  });

  fireEvent.input(screen.getByRole('textbox', { name: 'Message:' }), {
    target: {
      value: 'Test message',
    },
  });

  fireEvent.submit(screen.getByRole('button'));

  const spans = await container.getElementsByClassName('spn-error');
  await waitFor(() => expect(spans.length).toBe(0));
});
