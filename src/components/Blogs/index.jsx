import React, { useEffect, useState } from 'react';
import BlogBox from './BlogBox';
import imgBanner from '../../assets/aboutus/banner.jpg';
import blogImage1 from '../../assets/blogs/blog1.jpg';
import BlogsService from '../../services/BlogsService';
import './Style.css';

function Blogs() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const blogData = await BlogsService.getData();
    setData(blogData);
  };

  useEffect(() => {
    document.title = 'Blogs';
    getData();
  }, []);

  return (
    <>
      <div className="dv-banner" style={{ backgroundImage: `url(${imgBanner})` }}>
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="label-banner">Blogs</label>
      </div>
      <div className="dv-main pb-0">
        <section>
          <div className="row">
            {data.map((item) => (
              <div className="col-md-4 mb-5 pb-4" key={item.id}>
                <BlogBox
                  image={blogImage1}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Blogs;
