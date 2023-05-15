import React from 'react';
import PropTypes from 'prop-types';
import imgVision from '../../assets/aboutus/vision.png';

function Mission({ mission, vision }) {
  return (
    <section>
      <div className="row">
        <div className="col-md-6 text-center">
          <img src={imgVision} alt="Vision" />
        </div>
        <div className="col-md-6">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="page-header">Our Mission</label>
          <br />
          <span className="page-contents">{mission}</span>
          <br />
          <br />
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="page-header">Our Vision</label>
          <br />
          <span className="page-contents">{vision}</span>
        </div>
      </div>
    </section>
  );
}

Mission.propTypes = {
  mission: PropTypes.string.isRequired,
  vision: PropTypes.string.isRequired,
};

export default Mission;
