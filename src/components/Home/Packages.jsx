import React from 'react';
import PropTypes from 'prop-types';
import PackageBox from './PackageBox';
import imgPackageA from '../../assets/home/PackageA.png';
import imgPackageB from '../../assets/home/PackageB.png';
import imgPackageC from '../../assets/home/PackageC.png';

function Packages({ data }) {
  const imageList = [
    imgPackageA,
    imgPackageB,
    imgPackageC,
  ];

  return (
    <section id="section-packages">
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className="header text-center">Mitech2u Web Development price and Packages</label>
      <div className="row mt-5">
        {data.map((item, index) => (
          <div className="col-md-4" key={item.id}>
            <PackageBox
              image={imageList[index]}
              title={item.title}
              price={item.price}
              dvClass={item.dvClass}
              buttonClass={item.buttonClass}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

Packages.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Packages;
