import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ConsultingService({
  icon,
  title,
  description,
}) {
  return (
    <>
      <div className="dv-icon text-center">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label>
          <span>
            <FontAwesomeIcon icon={icon} />
          </span>
        </label>
      </div>
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="label-consulting">{title}</label>
      <br />
      <span className="spn-consulting">{description}</span>
    </>
  );
}

ConsultingService.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.shape({}).isRequired,
};

export default ConsultingService;
