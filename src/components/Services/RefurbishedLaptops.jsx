import React from 'react';
import PropTypes from 'prop-types';
import CarouselSlider from './CaraouselSlider';
import imgLaptopA from '../../assets/services/refurbished-laptops1.jpg';
import imgLaptopB from '../../assets/services/refurbished-laptops2.jpg';
import imgLaptopC from '../../assets/services/refurbished-laptops3.jpg';

function RefurbishedLaptops({
  title,
  caption,
  properties,
}) {
  return (
    <div className="row mt-5">
      <div className="col-md-6">
        <CarouselSlider
          imageList={[imgLaptopA, imgLaptopB, imgLaptopC]}
          alt="Laptop"
        />
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <div className="ps-3 dv-contents">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="page-header">{title}</label>
          <br />
          <span className="page-contents">{caption}</span>
          <ul className="mt-3">
            {properties.map((item) => (
              <li key={item.id}>{item.property}</li>
            ))}
          </ul>
          <button type="button" className="btn btn-primary">Desktops Price List</button>
        </div>
      </div>
    </div>
  );
}

RefurbishedLaptops.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  properties: PropTypes.instanceOf(Array).isRequired,
};

export default RefurbishedLaptops;
