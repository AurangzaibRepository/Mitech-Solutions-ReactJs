import React from 'react';
import PropTypes from 'prop-types';
import imgData from '../../assets/services/data-recovery.jpg';

function DataRecovery({
  title,
  caption,
  properties,
}) {
  return (
    <div className="row mt-5">
      <div className="col-md-6">
        <img
          className="full-width"
          src={imgData}
          alt="Data"
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
          <button type="button" className="btn btn-primary">Call to Discuss</button>
        </div>
      </div>
    </div>
  );
}

DataRecovery.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  properties: PropTypes.instanceOf(Array).isRequired,
};

export default DataRecovery;
