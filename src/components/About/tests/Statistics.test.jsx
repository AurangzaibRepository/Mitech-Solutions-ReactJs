import React from 'react';
import { render, screen } from '@testing-library/react';
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
