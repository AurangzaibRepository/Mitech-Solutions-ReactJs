import React, { useEffect, useState } from 'react';
import ContactUsService from '../../services/ContactUsService';
import ContactInformation from './ContactInformation';
import FormSection from './FormSection';
import imgBanner from '../../assets/aboutus/banner.jpg';
import './Style.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [whatsAppNumber, setWhatsAppNumber] = useState('');

  const getData = async () => {
    const data = await ContactUsService.getData();
    setEmail(data.email);
    setPhoneNumber(data.phone_number);
    setWhatsAppNumber(data.whatsapp_number);
  };

  useEffect(() => {
    document.title = 'Contact us';
    getData();
  }, []);

  return (
    <>
      <div className="dv-banner" style={{ backgroundImage: `url(${imgBanner})` }}>
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="label-banner">Contact us</label>
      </div>
      <div className="dv-main">
        <ContactInformation
          email={email}
          phoneNumber={phoneNumber}
          whatsAppNumber={whatsAppNumber}
        />
        <br />
        <FormSection />
      </div>
    </>
  );
}

export default Contact;
