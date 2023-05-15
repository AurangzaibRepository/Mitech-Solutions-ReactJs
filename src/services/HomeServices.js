const HomeService = {
  getData: async () => {
    let data = await fetch('data/home_data.json');
    data = await data.json();

    return data;
  },
};

export default HomeService;
