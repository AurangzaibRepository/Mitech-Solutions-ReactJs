import React from 'react';
import PropTypes from 'prop-types';
import {
  faRocket,
  faUser,
  faComputer,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import imgBanner from '../../assets/aboutus/banner.jpg';
import ConsultingService from './ConsultingSevice';

function ITConsulting({ data }) {
  const iconList = [
    faRocket,
    faUser,
    faComputer,
    faLightbulb,
  ];

  return (
    <section
      id="section-consulting"
      className="d-flex align-items-center"
      style={{ background: `url(${imgBanner})` }}
    >
      <div>
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label id="label-header">
          IT Consulting and User Support from
          <span>MITECH2U</span>
        </label>
        <br />
        <span id="sub-header" className="mt-2">We keep businesses thriving with managed IT solutions and services.</span>
        <div className="row mt-5 dv-main p-0 pt-4">
          {data.map((item, index) => (
            <div className="col-md-3 text-center" key={item.id}>
              <ConsultingService
                title={item.title}
                description={item.description}
                icon={iconList[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

ITConsulting.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default ITConsulting;
