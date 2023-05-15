import React, { useEffect, useState } from 'react';
import RefurbishedLaptops from './RefurbishedLaptops';
import QualityLaptops from './QualityLaptops';
import SupportServices from './SupportServices';
import ManagedServices from './ManagedServices';
import DataRecovery from './DataRecovery';
import imgBanner from '../../assets/aboutus/banner.jpg';
import ServicesService from '../../services/ServicesService';
import './Style.css';

function Services() {
  const [refurbishedData, setRefurbishedData] = useState();
  const [qualityData, setQualityData] = useState();
  const [supportData, setSupportData] = useState();
  const [managedData, setManagedData] = useState();
  const [recoveryData, setRecoveryData] = useState();

  const getData = async () => {
    const data = await ServicesService.getData();
    setRefurbishedData(data.refurbished_laptops);
    setQualityData(data.quality_laptops);
    setSupportData(data.support_services);
    setManagedData(data.managed_services);
    setRecoveryData(data.data_recovery);
  };

  useEffect(() => {
    document.title = 'Services';
    getData();
  }, []);

  return (
    <>
      <div className="dv-banner" style={{ backgroundImage: `url(${imgBanner})` }}>
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="label-banner">Services</label>
      </div>
      <div className="dv-main pt-0">
        <section id="section-services">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label className="header text-center">The Largest Refurbished Computer/Laptops in Malaysia</label>
          {refurbishedData
          && (
            <RefurbishedLaptops
              title={refurbishedData.title}
              caption={refurbishedData.caption}
              properties={refurbishedData.properties}
            />
          )}
          {qualityData
          && (
          <QualityLaptops
            title={qualityData.title}
            caption={qualityData.caption}
            properties={qualityData.properties}
          />
          )}
          {supportData
          && (
          <SupportServices
            title={supportData.title}
            caption={supportData.caption}
            properties={supportData.properties}
          />
          )}
          {managedData
          && (
          <ManagedServices
            title={managedData.title}
            caption={managedData.caption}
            properties={managedData.properties}
          />
          )}
          {recoveryData
          && (
          <DataRecovery
            title={recoveryData.title}
            caption={recoveryData.caption}
            properties={recoveryData.properties}
          />
          )}
        </section>
      </div>
    </>
  );
}

export default Services;
