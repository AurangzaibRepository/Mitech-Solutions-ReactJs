import React, { useEffect, useState } from 'react';
import Mission from './Mission';
import CompanyHistory from './CompanyHistory';
import Statistics from './Statistics';
import Customers from './Customers';
import AboutUsService from '../../services/AbousUsService';
import imgBanner from '../../assets/aboutus/banner.jpg';

function About() {
  const [data, setData] = useState();

  const getData = async () => {
    const aboutUsData = await AboutUsService.getData();
    setData(aboutUsData);
  };

  useEffect(() => {
    document.title = 'About us';
    getData();
  }, []);

  return (
    <>
      <div className="dv-banner" style={{ backgroundImage: `url(${imgBanner})` }}>
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="label-banner">About us</label>
      </div>
      <div className="dv-main">
        {data
        && (
          <>
            <Mission
              mission={data.mission}
              vision={data.vision}
            />
            <br />
            <CompanyHistory history={data.history} />
            <br />
            <Statistics statistics={data.statistics} />
          </>
        )}
        <br />
        <Customers />
      </div>
    </>
  );
}

export default About;
