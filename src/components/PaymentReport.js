import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenClip, faTrash } from '@fortawesome/free-solid-svg-icons';

const PaymentReport = () => {
  const payments = [
    { type: 'Reimbursement', amount: '$120,00', status: 'Success' },
    { type: 'Shooping Shoes', amount: '$132,00', status: 'Success' },
    { type: 'Shooping Bag', amount: '$110,00', status: 'Waiting' },
    { type: 'Dribbble Pro', amount: '$102,00', status: 'Success' },
    { type: 'Figma Pro', amount: '$103,00', status: 'Waiting' },
  ];

  const handleStatusChange = (payment) => {
    // Implement your logic to handle status changes, e.g., update status or show options
    console.log('Change status for:', payment); // Placeholder for now
  };

  const handleEdit = (payment) => {
    // Implement your edit logic here, e.g., open a modal or navigate to an edit page
    console.log('Edit payment:', payment); // Placeholder for now
  };

  const handleDelete = (payment) => {
    // Implement your delete confirmation and logic here
    console.log('Delete payment:', payment); // Placeholder for now
  };

  return (
    <div className="bg-white p-6 rounded-3xl">
      <h3 className="text-2xl font-medium">Payment Report</h3>
      <table className="min-w-full mt-4">
        <thead>
          <tr className="bg-dark-white">
            <th className="text-sm text-left p-2 text-gray font-thin">Type of Payment</th>
            <th className="text-sm text-left p-2 text-gray font-thin">Payment Amount</th>
            <th className="text-sm text-left p-2 text-gray font-thin">Payment Status</th>
            <th className="text-sm text-left p-2 text-gray font-thin">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td className="p-3">{payment.type}</td>
              <td className="font-semibold text-gray text-center">{payment.amount}</td>
              <td className="text-center py-1 px-1 rounded-full">
                <button
                  className={`focus:outline-none hover:bg-gray-200 rounded-full p-2 text-xs
                    ${payment.status === 'Success' ? 'bg-success-light text-success-dark' : 'bg-waiting-light text-waiting-dark'}`}
                  onClick={() => handleStatusChange(payment)}
                >
                  {payment.status}
                </button>
              </td>
              <td className="text-center">
                <div className="flex justify-center items-center space-x-2">
                  <button className="focus:outline-none hover:bg-gray-200 rounded-full p-1" onClick={() => handleEdit(payment)}>
                    <FontAwesomeIcon icon={faPenClip} />
                  </button>
                  <button className="focus:outline-none hover:bg-red-100 rounded-full p-1 text-red-500" onClick={() => handleDelete(payment)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentReport;
