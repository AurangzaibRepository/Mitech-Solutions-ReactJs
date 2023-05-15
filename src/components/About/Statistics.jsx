import React from 'react';
import PropTypes from 'prop-types';

function Statistics({ statistics }) {
  return (
    <section id="section-statistics">
      <div className="row">
        {statistics.map((item) => (
          <div className="col-md-3 text-center" key={item.id}>
            <span className="spn-number">{item.count}</span>
            <br />
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="label-stats">{item.title}</label>
          </div>
        ))}
      </div>
    </section>
  );
}

Statistics.propTypes = {
  statistics: PropTypes.instanceOf(Array).isRequired,
};

export default Statistics;
