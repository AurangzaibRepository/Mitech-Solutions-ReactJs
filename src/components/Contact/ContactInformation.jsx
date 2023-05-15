import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

function ContactInformation({
  email,
  phoneNumber,
  whatsAppNumber,
}) {
  return (
    <section>
      <div className="row">
        <div className="col-md-4 dv-contact-information">
          <FontAwesomeIcon icon={faEnvelope} />
          <div className="dv-contact-text">
            <span className="spn-contact-label">Have any questions?</span>
            <br />
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="label-contact-value">{email}</label>
          </div>
        </div>
        <div className="col-md-4 dv-contact-information">
          <FontAwesomeIcon icon={faPhone} />
          <div className="dv-contact-text">
            <span className="spn-contact-label">Call us</span>
            <br />
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="label-contact-value">{phoneNumber}</label>
          </div>
        </div>
        <div className="col-md-4 dv-contact-information">
          <FontAwesomeIcon icon={faWhatsappSquare} />
          <div className="dv-contact-text">
            <span className="spn-contact-label">Whatsapp us</span>
            <br />
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="label-contact-value">{whatsAppNumber}</label>
          </div>
        </div>
      </div>
    </section>
  );
}

ContactInformation.propTypes = {
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  whatsAppNumber: PropTypes.string.isRequired,
};

export default ContactInformation;
