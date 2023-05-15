import React from 'react';
import PropTypes from 'prop-types';
import PortfolioBox from './PortfolioBox';
import imgPortfolioServices from '../../assets/home/portfolio1.png';
import imgPortfolioDevelopment from '../../assets/home/portfolio2.png';
import imgPortfolioAyurveda from '../../assets/home/portfolio3.png';
import imgPortfolioSmart from '../../assets/home/portfolio4.png';

function Portfolio({ data }) {
  const imageList = [
    imgPortfolioServices,
    imgPortfolioDevelopment,
    imgPortfolioAyurveda,
    imgPortfolioSmart,
  ];

  return (
    <section id="section-portfolio">
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="header text-center">Take a look at our Portfolio</label>
      <div className="row mt-5 mb-4" id="dv-contents">
        {data.map((item, index) => (
          <div className="col-md-3" key={item.id}>
            <PortfolioBox
              image={imageList[index]}
              title={item.title}
            />
          </div>
        ))}
      </div>
      <div className="pt-1 text-center">
        <button type="button" className="btn btn-primary">More details</button>
      </div>
    </section>
  );
}

Portfolio.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Portfolio;
