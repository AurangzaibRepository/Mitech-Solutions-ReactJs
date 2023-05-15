import React from 'react';
import PropTypes from 'prop-types';
import imgHistory from '../../assets/aboutus/company-history.png';

function CompanyHistory({ history }) {
  return (
    <section>
      <div className="row">
        <div className="col-md-8">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="page-header">Our Company History</label>
          <br />
          <span className="page-contents">{history}</span>
        </div>
        <div className="col-md-4">
          <img id="img-history" src={imgHistory} alt="Company history" />
        </div>
      </div>
    </section>
  );
}

CompanyHistory.propTypes = {
  history: PropTypes.string.isRequired,
};

export default CompanyHistory;
