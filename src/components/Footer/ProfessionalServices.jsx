import React from 'react';
import PropTypes from 'prop-types';

function ProfessionalServices({ data }) {
  return (
    <>
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="footer-header">Professional Services</label>
      <ul className="footer-contents">
        {data.map((item) => (
          <li key={item.id}>{item.property}</li>
        ))}
      </ul>
    </>
  );
}

ProfessionalServices.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default ProfessionalServices;
