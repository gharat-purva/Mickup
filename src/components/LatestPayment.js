import React from 'react';
import { FaImage } from 'react-icons/fa';

const LatestPayment = () => {
  return (
    <div className="bg-white p-6 rounded-3xl mt-16 w-80 ml-36">
      <h2 className="text-2xl font-medium mb-4">Latest Payment</h2>
      <ul>
        <li className="flex justify-between mb-2">
          <FaImage className="text-lesser-black bg-light-gray rounded-full p-1 text-4xl" />
          <div>
            <span>Dwianak Eliza</span>
            <span className='block text-gray text-sm'>Project Manager</span>
          </div>
          <span className="text-green-500 font-medium">$2,102</span>
        </li>
        <li className="flex justify-between mb-2">
          <FaImage className="text-lesser-black bg-light-gray rounded-full p-1 text-4xl" />
          <div>
            <span>Azzahra Farelika</span>
            <span className='block text-gray text-sm'>Lead of Designer</span>
          </div>
          <span className="text-green-500 font-medium">$3,102</span>
        </li>
        <li className="flex justify-between mb-2">
          <FaImage className="text-lesser-black bg-light-gray rounded-full p-1 text-4xl" />
          <div>
            <span>Desvi Waraswati</span>
            <span className='block text-gray text-sm'>Co Founder</span>
          </div>
          <span className="text-green-500 font-medium">$4,102</span>
        </li>
      </ul>
      <div className="text-center">
      <button className=" bg-purple-200 p-2 px-9 border border-light-gray rounded-3xl">
            View All 
          </button>
      </div>
    </div>
  );
};

export default LatestPayment;
