import React from 'react';
import PropTypes from 'prop-types';
import imgBusiness from '../../assets/home/customized-business.png';

function CustomizedBusiness({
  customizedBusiness,
  userSupport,
}) {
  return (
    <section id="section-business">
      <div className="row">
        <div className="col-md-6">
          <div className="pt-5">
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="page-header">{customizedBusiness.title}</label>
            <br />
            <span className="page-contents">{customizedBusiness.description}</span>
            <br />
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="page-header mt-3">{userSupport.title}</label>
            <br />
            <span className="page-contents">{userSupport.description}</span>
          </div>
        </div>
        <div className="col-md-6">
          <img src={imgBusiness} alt="Business" />
        </div>
      </div>
    </section>
  );
}

CustomizedBusiness.propTypes = {
  customizedBusiness: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  userSupport: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default CustomizedBusiness;
