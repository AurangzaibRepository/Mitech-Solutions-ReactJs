import React from 'react';
import {
  render,
  screen,
  within,
} from '@testing-library/react';
import ProfessionalServices from '../ProfessionalServices';

const mockData = [
  {
    id: 1,
    property: 'Website Development',
  },
  {
    id: 2,
    property: 'Software Development',
  },
  {
    id: 3,
    property: 'Mobile Apps Development',
  },
  {
    id: 4,
    property: 'SEO',
  },
];
