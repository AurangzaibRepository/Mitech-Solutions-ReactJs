import React from 'react';
import PropTypes from 'prop-types';

function CoreServices({ data }) {
  return (
    <>
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="footer-header">Our Core Services</label>
      <ul className="footer-contents">
        {data.map((item) => (
          <li key={item.id}>{item.property}</li>
        ))}
      </ul>
    </>
  );
}

CoreServices.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default CoreServices;
