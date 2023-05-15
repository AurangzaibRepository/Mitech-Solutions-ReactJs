import React, { useState, useEffect } from 'react';
import ContactInformation from './ContactInformation';
import CoreServices from './CoreServices';
import ProfessionalServices from './ProfessionalServices';
import Softwares from './Softwares';
import FooterService from '../../services/FooterService';
import './Style.css';

function Footer() {
  const [contactInformationData, setContactInformationData] = useState();
  const [coreServicesData, setCoreServicesData] = useState();
  const [professionalServiceData, setProfessionalServicesData] = useState();
  const [softwaresData, setSoftwaresData] = useState();

  const getData = async () => {
    const data = await FooterService.getData();
    setContactInformationData(data.contact_information);
    setCoreServicesData(data.core_services);
    setProfessionalServicesData(data.professional_services);
    setSoftwaresData(data.softwares);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="footer">
      <div className="row">
        <div className="col-md-3">
          {contactInformationData && <ContactInformation data={contactInformationData} />}
        </div>
        <div className="col-md-3">
          {coreServicesData && <CoreServices data={coreServicesData} />}
        </div>
        <div className="col-md-3">
          {professionalServiceData && <ProfessionalServices data={professionalServiceData} />}
        </div>
        <div className="col-md-3">
          {softwaresData && <Softwares data={softwaresData} />}
        </div>
      </div>
    </div>
  );
}

export default Footer;
