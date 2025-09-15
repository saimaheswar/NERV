import React from 'react';

const ProductBottle = ({ className = '' }) => {
  return (
    <div className={`relative z-10 ${className}`}>
      <div className="w-80 h-96 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-full rounded-b-lg shadow-2xl relative overflow-hidden">
        {/* Bottle Top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-800 rounded-t-lg"></div>
        
        {/* Main Label */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-64 h-48 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-4">
          <div className="text-4xl font-bold text-gray-900 mb-2">NERV</div>
          <div className="text-sm text-pink-600 font-semibold mb-2">FOCUS ENHANCING</div>
          <div className="text-xs text-gray-600 text-center">ZERO SUGAR • HYDRATION</div>
          
          {/* Pink accent */}
          <div className="absolute bottom-4 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
        </div>

        {/* Bottom section with key info */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-56 h-20 bg-gray-900 rounded-lg flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-xs font-semibold">ESSENTIAL FOCUS</div>
            <div className="text-xs">ENHANCES COGNITIVE PERFORMANCE</div>
            <div className="text-xs">NATURAL NOOTROPICS</div>
          </div>
        </div>

        {/* Nutritional info circle */}
        <div className="absolute bottom-2 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold">
          0
        </div>
      </div>
    </div>
  );
};

export default ProductBottle;