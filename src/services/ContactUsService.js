const ContactUsService = {
  getData: async () => {
    let data = await fetch('data/contactus_data.json');
    data = await data.json();

    return data;
  },
};

export default ContactUsService;
