/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Partners from '../Partners';

const mockData = {
  trusted_partner: {
    title: 'Your Trusted Partner',
    description: "Mitech2u is one the most Trusted Source in Malaysia.Our main line of products are recycled, refurbished and new IT equipment such as laptops, desktops, LCD's, tabs, networking products and computer accessories etc. We are the cheapest, safest and most efficient way to buy your computers. We help you to get best deals on the market so you save 1000 over ringgits on your order",
  },
  refurbished_partner: {
    title: 'Your Reliable Refurbished Partner',
    description: 'The largest range of refurbished laptop available at our warehouse. Variety of models Dell, HP, Lenovo , Acer adn so on.',
  },
};

test('Test partners', () => {
  const { container } = render(<Partners
    trustedPartner={mockData.trusted_partner}
    refurbishedPartner={mockData.refurbished_partner}
  />);

  expect(
    screen.getByText(/Need assistance/i),
  ).toBeInTheDocument();

  const headerElements = container.getElementsByClassName('page-header');
  expect(headerElements).toHaveLength(2);

  const contentElements = container.getElementsByClassName('page-contents');
  expect(contentElements).toHaveLength(2);

  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);

  const images = screen.getAllByRole('img');
  expect(images).toHaveLength(2);
});
