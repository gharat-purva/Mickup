import React from 'react';
import { FaCircle, FaUsers, FaEllipsis, FaChevronDown } from 'react-icons/fa6';

const Overview = () => {
  return (
    <div>
      <h1 className="text-4xl font-medium mb-4">Overview</h1>
    
    <div className="bg-white p-6 rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-medium">Total Employees</h2>
        <div className="relative">
          <button className="flex items-center bg-purple-200 p-2 px-9 border border-light-gray rounded-3xl">
            All Time <FaChevronDown className="text-white bg-lesser-black rounded-full ml-1 p-1" />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center">

        <div className="flex flex-col items-center bg-gray-100 p-4 border border-light-gray rounded-3xl w-1/3">
          <FaUsers className="text-5xl text-purple mb-2 bg-light-purple rounded-full p-2 m-8" />
          <span className="text-3xl font-bold">98</span>
          <span className="text-gray mt-2">Others</span>
        </div>

        <div className="flex flex-col items-center bg-gray-100 p-4 border border-light-gray rounded-3xl w-1/3">
          <FaEllipsis className="text-5xl text-purple mb-2 bg-light-purple rounded-full p-2 m-8" />
          <span className="text-3xl font-bold">32</span>
          <span className="text-gray mt-2">Onboarding</span>
        </div>

        <div className="flex flex-col items-center bg-gray-100 p-4 border border-light-gray rounded-3xl w-1/3">
          <FaCircle className="text-5xl text-purple mb-2 bg-light-purple rounded-full p-2 m-8" />
          <span className="text-3xl font-bold">98</span>
          <span className="text-gray mt-2">Offboarding</span>
        </div>

      </div>

    </div>
    </div>
  );
};

export default Overview;
