import React, { useEffect, useState } from 'react';
import SliderSection from './SliderSection';
import Partners from './Partners';
import CustomerStatistics from './CustomerStatistics';
import Packages from './Packages';
import AppsDevelopment from './AppsDevelopment';
import Portfolio from './Portfolio';
import ITConsulting from './ITConsulting';
import CustomizedBusiness from './CustomizedBusiness';
import DisasterRecovery from './DisasterRecovery';
import HomeService from '../../services/HomeServices';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Style.css';

function Home() {
  const [partnerData, setPartnerData] = useState();
  const [customerStatistics, setCustomerStatistics] = useState();
  const [packages, setPackages] = useState();
  const [appDevelopment, setAppDevelopment] = useState();
  const [portfolio, setPortfolio] = useState();
  const [itConsulting, setITConsulting] = useState();
  const [customizedBusiness, setCustomizedBusiness] = useState();
  const [disasterRecovery, setDisasterRecovery] = useState();

  const getData = async () => {
    const data = await HomeService.getData();
    setPartnerData(data.partner);
    setCustomerStatistics(data.customer_statistics);
    setPackages(data.packages);
    setAppDevelopment(data.app_development);
    setPortfolio(data.portfolio);
    setITConsulting(data.it_consulting);
    setCustomizedBusiness(data.business);
    setDisasterRecovery(data.disaster_recovery);
  };

  useEffect(() => {
    document.title = 'Home';
    getData();
  }, []);

  return (
    <>
      <SliderSection />
      <div className="dv-main pt-0 pb-0">
        {partnerData
        && (
        <Partners
          trustedPartner={partnerData.trusted_partner}
          refurbishedPartner={partnerData.refurbished_partner}
        />
        )}
      </div>
      {customerStatistics && <CustomerStatistics data={customerStatistics} />}
      <div className="dv-main pt-0 pb-0">
        {packages && <Packages data={packages} />}
        {appDevelopment && <AppsDevelopment data={appDevelopment} />}
        {portfolio && <Portfolio data={portfolio} />}
      </div>
      {itConsulting && <ITConsulting data={itConsulting} />}
      <div className="dv-main pt-0 pb-0">
        {customizedBusiness
        && (
        <CustomizedBusiness
          customizedBusiness={customizedBusiness.customized_business}
          userSupport={customizedBusiness.user_support}
        />
        )}
        {disasterRecovery && <DisasterRecovery data={disasterRecovery} />}
      </div>
    </>
  );
}

export default Home;
