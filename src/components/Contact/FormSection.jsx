import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGooglePlus,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Form from './Form';

function FormSection() {
  return (
    <section>
      <div className="row">
        <div className="col-md-4">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="form-section-label">Write a message</label>
          <br />
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="form-section-message">If you got any questions, please do not hesitate to send us a message. We reply within 24 hours !</label>
          <br />
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="form-section-social-message">Our profiles in social media:</label>
          <br />
          <div className="form-section-icon-div">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGooglePlus} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="col-md-8">
          <Form />
        </div>
      </div>
    </section>
  );
}

export default FormSection;
