import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CustomerStatisticsBox({
  icon,
  statistics,
  statisticText,
}) {
  return (
    <>
      <FontAwesomeIcon icon={icon} />
      <br />
      <span className="spn-statistics">{statistics}</span>
      <br />
      <span className="spn-statistic-text">{statisticText}</span>
    </>
  );
}

CustomerStatisticsBox.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  statistics: PropTypes.number.isRequired,
  statisticText: PropTypes.string.isRequired,
};

export default CustomerStatisticsBox;
