import React from 'react';
import imgLogos from '../../assets/aboutus/customer-logos.png';

function Customers() {
  return (
    <section>
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="page-header text-center">Our Customers</label>
      <img id="img-customer-logos" src={imgLogos} alt="Customers" />
    </section>
  );
}

export default Customers;
