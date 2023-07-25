/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Statistics from '../Statistics';

const mockData = [
  {
    id: 1,
    title: 'Completed Projects',
    count: 2,
  },
  {
    id: 2,
    title: 'Programming',
    count: 4,
  },
];

test('Test statistics', () => {
  const { container } = render(<Statistics statistics={mockData} />);

  const itemList = container.getElementsByClassName('label-stats');
  expect(itemList).toHaveLength(2);
});
