import React from 'react';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import EmployeeTimeOff from './components/EmployeeTimeOff';
import PaymentReport from './components/PaymentReport';
import PerformanceChart from './components/PerformanceChart';
import LatestPayment from './components/LatestPayment';
import '@fortawesome/fontawesome-free/css/all.css';

const Dashboard = () => {
  return (
    <div className="bg-dark-white min-h-screen">
      <Navbar />
      <div className="mx-auto p-4">
        <div className='bg-white p-4 rounded-3xl mb-4 flex flex-col md:flex-row md:items-center md:justify-between'>
          <div>
            <h1 className="text-4xl font-medium"><span className='text-gray'>Good Morning,</span> Nirmala Sari</h1>
            <p className="text-gray mb-3">Ultrices nulla lectus mi nibh risus cursus.</p>
          </div>
          <button className='bg-lesser-black text-white rounded-3xl p-2 text-sm mt-4 md:mt-0'>Manage Team</button>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Overview />
          <PerformanceChart />
          <LatestPayment />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EmployeeTimeOff />
          <PaymentReport />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
