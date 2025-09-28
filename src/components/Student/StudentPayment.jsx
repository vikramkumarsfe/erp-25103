import React, { useState } from 'react';
import Layout from './Layout'; // Import Layout from the separate file
import {
  // Payment Icons
  QrCode2, AccountBalance, CreditCard, AccountBalanceWallet, Close, CheckCircle, Warning, Download, Visibility,
} from '@mui/icons-material';

// --- Payment Data and Components (Unique to this page) ---

/**
 * Data for the summary cards at the top of the payments page.
 */
const summaryCardsData = [
  {
    title: "College Fee",
    amount: "$2,500.00",
    status: "Paid",
    color: "var(--gradient-start)",
    statusBg: "bg-green-100",
    statusText: "text-green-800",
    action: null,
  },
  {
    title: "Hostel Fee",
    amount: "$800.00",
    status: "Pending",
    color: "red-500",
    statusBg: "bg-red-100",
    statusText: "text-red-800",
    action: 'Pay Now',
  },
  {
    title: "Other Fees",
    amount: "$150.00",
    status: "Pending",
    color: "yellow-500",
    statusBg: "bg-yellow-100",
    statusText: "text-yellow-800",
    action: 'Pay Now',
  },
];

/**
 * Data for the detailed payment history table.
 */
const paymentHistoryData = [
  {
    type: "College Fee - Sem 1",
    amount: "$2,500.00",
    dueDate: "Aug 15, 2023",
    status: "Paid",
    statusColor: "green",
    action: { label: "Download Receipt", icon: Download, isButton: true, style: 'text-indigo-600 hover:text-indigo-900' },
  },
  {
    type: "Hostel Fee - Oct",
    amount: "$800.00",
    dueDate: "Oct 25, 2023",
    status: "Pending",
    statusColor: "red",
    isBlinking: true,
    action: { label: "Pay Now", isModal: true, isButton: true, style: 'text-white bg-red-500 hover:bg-red-600 py-1 px-3 rounded-md text-xs' },
  },
  {
    type: "Library Fine",
    amount: "$15.00",
    dueDate: "Sep 30, 2023",
    status: "Paid",
    statusColor: "green",
    action: { label: "Download Receipt", icon: Download, isButton: true, style: 'text-indigo-600 hover:text-indigo-900' },
  },
  {
    type: "Exam Fee",
    amount: "$150.00",
    dueDate: "Nov 10, 2023",
    status: "Processing",
    statusColor: "yellow",
    isSpinning: true,
    action: { label: "View Details", icon: Visibility, isButton: true, style: 'text-gray-500 hover:text-gray-700' },
  },
];

const PaymentStatusIcon = ({ status, isSpinning }) => {
  const baseClasses = `w-4 h-4 mr-1.5 ${isSpinning ? 'animate-spin' : ''}`;
  if (status === 'Paid') {
    return <CheckCircle className={baseClasses} />;
  }
  if (status === 'Pending') {
    return <Warning className={baseClasses} />;
  }
  // For processing, we use a custom SVG for the loading spinner
  if (status === 'Processing') {
    return (
      <svg className={baseClasses} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
      </svg>
    );
  }
  return null;
};

const PaymentRow = ({ data, openModal }) => {
  const { type, amount, dueDate, status, statusColor, isBlinking, isSpinning, action } = data;
  const statusClasses = `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-${statusColor}-100 text-${statusColor}-800 ${isBlinking ? 'pending-blink' : ''}`;

  const renderAction = () => {
    if (action.isModal) {
      // Use the openModal function passed from the parent state
      return (
        <button className={`font-medium text-xs ${action.style}`} onClick={() => openModal(data.amount, data.type)}>
          {action.label}
        </button>
      );
    }
    return (
      <button className={`font-medium flex items-center gap-1 mx-auto ${action.style}`}>
        {action.icon && <action.icon style={{ fontSize: 16 }} />} {action.label}
      </button>
    );
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{type}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{amount}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dueDate}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <span className={statusClasses}>
          <PaymentStatusIcon status={status} isSpinning={isSpinning} />
          {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
        {action && renderAction()}
      </td>
    </tr>
  );
};

// --- Modal Component (Controlled by state) ---

const PaymentModal = ({ isModalOpen, closeModal, amount, feeType }) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" style={{ animation: 'modal-fade-in 0.3s ease-out forwards' }}>
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900 gradient-text">Complete Your Payment</h2>
            <button className="text-gray-400 hover:text-gray-600" onClick={closeModal}>
              <Close />
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-6 bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Amount to be paid</p>
            <p className="text-3xl font-bold text-gray-900">{amount}</p>
            <p className="text-sm text-gray-500 mt-1">For: {feeType}</p>
          </div>
          <div className="space-y-4">
            <label htmlFor="payment-mode" className="block text-sm font-medium text-gray-700">Select Payment Mode</label>
            <div id="payment-mode" className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center p-4 border rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-[var(--gradient-start)] focus:outline-none">
                <QrCode2 className="mr-2" /> UPI
              </button>
              <button className="flex items-center justify-center p-4 border rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-[var(--gradient-start)] focus:outline-none">
                <AccountBalance className="mr-2" /> Net Banking
              </button>
              <button className="flex items-center justify-center p-4 border rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-[var(--gradient-start)] focus:outline-none">
                <CreditCard className="mr-2" /> Card
              </button>
              <button className="flex items-center justify-center p-4 border rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-[var(--gradient-start)] focus:outline-none">
                <AccountBalanceWallet className="mr-2" /> Wallet
              </button>
            </div>
          </div>
          <div className="mt-8">
            <button className="w-full text-white font-bold py-3 px-6 rounded-lg gradient-bar pay-now-button hover:shadow-lg transition-shadow">Confirm Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Main Page Component (The default export) ---

const StudentPayment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAmount, setModalAmount] = useState('');
  const [modalFeeType, setModalFeeType] = useState('');

  const openModal = (amount, feeType) => {
    setModalAmount(amount);
    setModalFeeType(feeType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalAmount('');
    setModalFeeType('');
  };

  return (
    <Layout>
      <main className="flex-1 p-4 lg:p-8 main-bg overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 fade-in">
            <h2 className="text-3xl font-bold text-gray-900">My Payments & Receipts</h2>
            <p className="text-gray-500 mt-1">View and manage all your payments here.</p>
          </div>

          {/* Payment Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {summaryCardsData.map((card, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-6 flex flex-col card-hover-effect border-l-4 border-${card.color} fade-in`}
                style={{ animationDelay: `${100 * (index + 1)}ms`, borderColor: card.color.startsWith('var') ? card.color : undefined }}
              >
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{card.title}</h3>
                <p className="text-3xl font-bold text-gray-900">{card.amount}</p>
                <p className="text-sm text-gray-500">Total Due</p>
                <div className="mt-auto pt-4">
                  {card.action === 'Pay Now' ? (
                    <button
                      className="w-full text-white font-semibold py-2 px-4 rounded-lg gradient-bar hover:shadow-lg pay-now-button transition-shadow"
                      onClick={() => openModal(card.amount, card.title)}
                    >
                      {card.action}
                    </button>
                  ) : (
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${card.statusBg} ${card.statusText}`}>
                      <span className={`w-2.5 h-2.5 mr-2 bg-green-500 rounded-full`}></span>
                      {card.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* All Payments Table */}
          <div className="bg-white rounded-lg shadow-md p-6 fade-in" style={{ animationDelay: '400ms' }}>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">All Payments</h3>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 text-sm font-medium rounded-md bg-[var(--gradient-start)] text-white">All</button>
                <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">Paid</button>
                <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">Pending</button>
                <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">Overdue</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Type</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paymentHistoryData.map((data, index) => (
                    <PaymentRow key={index} data={data} openModal={openModal} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <PaymentModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        amount={modalAmount}
        feeType={modalFeeType}
      />
    </Layout>
  );
};

export default StudentPayment;
