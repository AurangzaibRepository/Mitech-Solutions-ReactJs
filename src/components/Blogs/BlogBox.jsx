import React from 'react';
import PropTypes from 'prop-types';

function BlogBox({
  image,
  title,
  description,
}) {
  return (
    <>
      <div className="dv-blog">
        <img src={image} alt="Blog" />
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label className="title">{title}</label>
        <br />
        <span className="description">{description}</span>
      </div>
      <div className="d-flex justify-content-end mt-1">
        <button type="button" id="btn-read-more" className="btn btn-primary">Read more</button>
      </div>
    </>
  );
}

BlogBox.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BlogBox;
