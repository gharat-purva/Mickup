import React from 'react';
import { FaImage } from 'react-icons/fa';

const EmployeeTimeOff = () => {
  const employees = [
    { name: 'Jhonson', reason: 'Personal Issue', date: '25 March, 2023' },
    { name: 'Farchan', reason: 'Famili Trip', date: '21 March, 2023' },
    { name: 'Donaa', reason: 'Famili Trip', date: '12 March, 2023' },
    { name: 'Dzaky', reason: 'Engagement', date: '4 March, 2023' },
    { name: 'Dhani', reason: 'Engagement', date: '1 March, 2023' },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-medium">Employee Time off</h3>
        <span className="text-lesser-black text-xl font-thin cursor-pointer">View All</span>
      </div>
      <table className="min-w-full">
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td className="p-2"><FaImage className="text-lesser-black bg-light-gray rounded-full p-1 text-4xl" /></td>
              <td className="p-2">{employee.name}</td>
              <td className="p-2 text-gray text-center">{employee.reason}</td>
              <td className="p-2 text-gray text-center">{employee.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTimeOff;
