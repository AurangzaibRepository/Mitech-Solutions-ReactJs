import React from 'react';
import {
  render,
  screen,
  within,
} from '@testing-library/react';
import Softwares from '../Softwares';

const mockData = [
  {
    id: 1,
    property: 'Customized Software',
  },
  {
    id: 2,
    property: 'Visitor Management System',
  },
  {
    id: 3,
    property: 'RO Listing app',
  },
  {
    id: 4,
    property: 'Sales & Marketing Software',
  },
];

test('Test softwares', () => {
  render(<Softwares data={mockData} />);
});
