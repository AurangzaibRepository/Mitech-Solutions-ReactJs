import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import imgA from '../../assets/home/carousel1.jpg';
import imgB from '../../assets/home/carousel2.jpg';
import imgC from '../../assets/home/carousel3.jpg';

function SliderSection() {
  return (
    <div className="dv-carousel">
      <Carousel
        centerMode
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
      >
        <div>
          <img src={imgA} alt="Product" />
        </div>
        <div>
          <img src={imgB} alt="Product" />
        </div>
        <div>
          <img src={imgC} alt="Product" />
        </div>
      </Carousel>
    </div>
  );
}

export default SliderSection;
