const ServicesService = {
  getData: async () => {
    let data = await fetch('data/services_data.json');
    data = await data.json();

    return data;
  },
};

export default ServicesService;
