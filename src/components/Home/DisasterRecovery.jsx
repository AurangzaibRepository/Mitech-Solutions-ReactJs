import React from 'react';
import PropTypes from 'prop-types';
import imgRecovery from '../../assets/home/disaster-recovery.png';

function DisasterRecovery({ data }) {
  return (
    <section id="section-recovery">
      <div className="row">
        <div className="col-md-6">
          <img src={imgRecovery} alt="Recovery" />
        </div>
        <div className="col-md-6">
          <div className="pt-5 ps-3">
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="page-header">{data.title}</label>
            <br />
            <span className="page-contents">{data.caption}</span>
            <ul className="mt-3">
              {data.properties.map((item) => (
                <li key={item.id}>{item.property}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

DisasterRecovery.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    properties: PropTypes.instanceOf(Array).isRequired,
  }).isRequired,
};

export default DisasterRecovery;
