const BlogsService = {
  getData: async () => {
    let data = await fetch('data/blogs_data.json');
    data = await data.json();

    return data.data;
  },
};

export default BlogsService;
