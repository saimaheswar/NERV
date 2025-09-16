import React from 'react';

const ProductBottle = ({ className = '', style = {} }) => {
  return (
    <div className={`relative z-10 ${className}`} style={style}>
<img
  src="/my-bottle.png"
  alt="My Product Bottle"
  className="w-[19rem] md:w-[20rem] lg:w-[34rem] h-auto mx-auto"
  loading="lazy"
  decoding="async"
/>
    </div>
  );
};

export default ProductBottle;