import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogBox from '../BlogBox';

const mockData = [
  {
    id: 1,
    title: 'How to get Windows 11 for free',
    description: 'Technically, Windows 11 isn’t free.',
  },
  {
    id: 2,
    title: 'Should you upgrade to Windows 11? Here’s a list of missing features',
    description: 'Windows 11 is here and it’s now widely available for the majority of the users.',
  },
];
