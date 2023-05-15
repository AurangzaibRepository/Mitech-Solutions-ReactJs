import React from 'react';
import PropTypes from 'prop-types';

function PackageBox({
  dvClass,
  image,
  title,
  price,
  buttonClass,
}) {
  return (
    <div className={`dv-package text-center ${dvClass}`}>
      <img src={image} alt="Package" />
      <br />
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="package-title mt-2">{title}</label>
      <br />
      <sup className="package-sub-title">RM</sup>
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="package-price">{price}</label>
      <sup className="package-sub-title">/One Time Payment</sup>
      <br />
      <div className="text-center mt-4">
        <button type="button" href="#" className={`btn btn-primary ${buttonClass}`}>CALL US NOW</button>
      </div>
    </div>
  );
}

PackageBox.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  dvClass: PropTypes.string.isRequired,
  buttonClass: PropTypes.string,
};

PackageBox.defaultProps = {
  buttonClass: '',
};

export default PackageBox;
