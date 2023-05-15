import React from 'react';
import PropTypes from 'prop-types';

function Softwares({ data }) {
  return (
    <>
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="footer-header">Our Softwares</label>
      <ul className="footer-contents">
        {data.map((item) => (
          <li key={item.id}>{item.property}</li>
        ))}
      </ul>
    </>
  );
}

Softwares.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Softwares;
