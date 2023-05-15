import React, { useEffect, useState } from 'react';
import PortfolioBox from '../Home/PortfolioBox';
import imgPortfolio from '../../assets/home/portfolio1.png';
import PortfolioService from '../../services/PortfolioService';

function Portfolio() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const portfolioData = await PortfolioService.getData();
    setData(portfolioData);
  };

  useEffect(() => {
    document.title = 'Portfolio';
    getData();
  });

  return (
    <div className="dv-main pt-0 pb-0">
      <section id="section-portfolio">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="header text-center">Take a look at our Portfolio</label>
        <div className="row mt-5" id="dv-contents">
          {
            data.map((item) => (
              <div className="col-md-3 mb-5 pb-4" key={item.id}>
                <PortfolioBox
                  image={imgPortfolio}
                  title={item.title}
                />
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
