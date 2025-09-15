import React from 'react';

const ProductBottle = ({ className = '', style = {} }) => {
  return (
    <div className={`relative z-10 ${className}`} style={style}>
      {/* Realistic bottle shape based on LYCHEE reference */}
      <div className="w-72 h-96 relative">
        {/* Bottle Cap */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-gray-800 rounded-t-md border-2 border-gray-900"></div>
        
        {/* Bottle neck */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-gray-300 to-gray-200 rounded-sm"></div>
        
        {/* Main bottle body - curved like LYCHEE */}
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-64 h-80 bg-gradient-to-b from-pink-100 to-pink-200 rounded-t-xl rounded-b-3xl shadow-2xl relative overflow-hidden">
          {/* Pink liquid inside */}
          <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-pink-500 to-pink-400 rounded-b-3xl opacity-90"></div>
          
          {/* Main Label - Black background like LYCHEE */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gray-900 rounded-lg shadow-xl flex flex-col items-center justify-center p-4 z-10">
            <div className="text-3xl font-bold text-white mb-1">NERV</div>
            <div className="text-xs text-pink-400 font-semibold mb-1">PINK FUNCTIONAL</div>
            <div className="text-xs text-pink-300 text-center mb-1">BEVERAGE</div>
            <div className="text-lg font-bold text-white">500 ml</div>
          </div>

          {/* Bottom accent like LYCHEE */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-40 h-16 bg-pink-600 rounded-lg opacity-80 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-xs font-semibold">COGNITIVE ENHANCEMENT</div>
              <div className="text-xs">125mg CAFFEINE + L-THEANINE</div>
            </div>
          </div>

          {/* Highlight reflection */}
          <div className="absolute top-16 left-8 w-6 h-24 bg-white opacity-30 rounded-full transform rotate-12"></div>
          
          {/* Bottom curve highlight */}
          <div className="absolute bottom-4 right-8 w-8 h-8 bg-white opacity-20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductBottle;