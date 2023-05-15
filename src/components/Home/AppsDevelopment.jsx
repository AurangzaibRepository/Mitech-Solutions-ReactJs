import React from 'react';
import PropTypes from 'prop-types';
import img from '../../assets/home/app-development.png';

function AppsDevelopment({ data }) {
  return (
    <section id="section-app-development">
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="header text-center">Website & Mobile Apps Development</label>
      <div className="row mt-5">
        <div className="col-md-6">
          <img src={img} alt="Apps development" />
        </div>
        <div className="col-md-6">
          <div className="ps-2 pt-4">
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
            <label className="page-header">{data.title}</label>
            <br />
            <span className="page-contents">{data.caption}</span>
            <ul className="mt-3">
              {data.properties.map((item) => (
                <li key={item.id}>{item.property}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

AppsDevelopment.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    properties: PropTypes.instanceOf(Array).isRequired,
  }).isRequired,
};

export default AppsDevelopment;
