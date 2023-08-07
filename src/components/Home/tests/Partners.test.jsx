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
