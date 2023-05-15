const PortfolioService = {
  getData: async () => {
    let data = await fetch('data/portfolio_data.json');
    data = await data.json();

    return data.data;
  },
};

export default PortfolioService;
