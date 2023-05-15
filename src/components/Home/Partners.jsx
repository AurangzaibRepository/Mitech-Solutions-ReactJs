import React from 'react';
import PropTypes from 'prop-types';
import imgPartner1 from '../../assets/home/partner1.png';
import imgPartner2 from '../../assets/home/partner2.png';

function Partners({
  trustedPartner,
  refurbishedPartner,
}) {
  return (
    <section>
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="header text-center">Need assistance? Check out our Services</label>
      <div className="row mt-5 dv-partners">
        <div className="col-md-6">
          <img src={imgPartner1} alt="Partner" />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="ps-3">
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="page-header">{trustedPartner.title}</label>
            <br />
            <span className="page-contents">{trustedPartner.description}</span>
            <br />
            <button type="button" className="btn btn-primary mt-3">More Details</button>
          </div>
        </div>
      </div>
      <div className="row mt-5 dv-partners">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="page-header">{refurbishedPartner.title}</label>
            <br />
            <span className="page-contents">{refurbishedPartner.description}</span>
            <br />
            <button type="button" className="btn btn-primary mt-3">More Details</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="ps-3">
            <img src={imgPartner2} alt="Partner" />
          </div>
        </div>
      </div>
    </section>
  );
}

Partners.propTypes = {
  trustedPartner: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  refurbishedPartner: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Partners;
