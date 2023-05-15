import React from 'react';
import PropTypes from 'prop-types';

function PortfolioBox({ image, title }) {
  return (
    <div className="dv-box">
      <img src={image} alt="Portfolio" />
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label>{title}</label>
    </div>
  );
}

PortfolioBox.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default PortfolioBox;
