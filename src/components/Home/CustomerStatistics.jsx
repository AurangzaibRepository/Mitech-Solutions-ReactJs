import React from 'react';
import PropTypes from 'prop-types';
import {
  faUsers,
  faPlane,
  faTelevision,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import CustomerStatisticsBox from './CustomerStatisticsBox';

function CustomerStatistics({ data }) {
  const iconList = [
    faUsers,
    faPlane,
    faTelevision,
    faThumbsUp,
  ];

  return (
    <section id="section-customer">
      <div>
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label id="label-header">Happy customers become loyal customers</label>
        <div className="row mt-5 dv-main p-0">
          {data.map((item, index) => (
            <div className="col-md-3 text-center" key={item.id}>
              <CustomerStatisticsBox
                icon={iconList[index]}
                statistics={item.statistics}
                statisticText={item.statistic_text}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

CustomerStatistics.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default CustomerStatistics;
