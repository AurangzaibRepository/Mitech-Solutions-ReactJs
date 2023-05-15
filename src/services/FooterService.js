const FooterService = {
  getData: async () => {
    let data = await fetch('data/footer_data.json');
    data = await data.json();

    return data;
  },
};

export default FooterService;
