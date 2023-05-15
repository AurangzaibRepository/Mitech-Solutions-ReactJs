import React from 'react';
import PropTypes from 'prop-types';
import CarouselSlider from './CaraouselSlider';
import imgLaptopA from '../../assets/services/quality-laptops1.jpg';
import imgLaptopB from '../../assets/services/quality-laptops2.jpg';

function QualityLaptops({
  title,
  caption,
  properties,
}) {
  return (
    <div className="row mt-5">
      <div className="col-md-6 d-flex align-items-center">
        <div className="dv-contents">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="page-header">{title}</label>
          <br />
          <span className="page-contents">{caption}</span>
          <ul className="mt-3">
            {properties.map((item) => (
              <li key={item.id}>{item.property}</li>
            ))}
          </ul>
          <button type="button" className="btn btn-primary">Laptops Price List</button>
        </div>
      </div>
      <div className="col-md-6">
        <CarouselSlider
          imageList={[imgLaptopA, imgLaptopB]}
          alt="Laptop"
        />
      </div>
    </div>
  );
}

QualityLaptops.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  properties: PropTypes.instanceOf(Array).isRequired,
};

export default QualityLaptops;
