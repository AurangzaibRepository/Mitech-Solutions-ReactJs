import React from 'react';
import PropTypes from 'prop-types';

function ContactInformation({ data }) {
  return (
    <>
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="footer-header">Contact Information</label>
      <div className="footer-contents">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="footer-subheader">Our address:</label>
        <br />
        <span className="pre-line">{data.address}</span>
        <br />
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="footer-subheader">Call us:</label>
        <br />
        <span>{data.contact_number}</span>
      </div>
    </>
  );
}

ContactInformation.propTypes = {
  data: PropTypes.shape({
    address: PropTypes.string.isRequired,
    contact_number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactInformation;
