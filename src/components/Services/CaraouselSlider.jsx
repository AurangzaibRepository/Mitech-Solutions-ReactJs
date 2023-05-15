import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

function CarouselSlider({ imageList, alt }) {
  return (
    <Carousel
      centerMode={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      autoPlay
    >
      {imageList.map((image) => (
        <img className="full-width" src={image} alt={alt} />
      ))}
    </Carousel>
  );
}

CarouselSlider.propTypes = {
  imageList: PropTypes.instanceOf(Array).isRequired,
  alt: PropTypes.string.isRequired,
};

export default CarouselSlider;
