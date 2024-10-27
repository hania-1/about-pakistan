import React, { useEffect, useState } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const simulateLocationCheck = () => {
    // Simulating all users are from Pakistan
    const isInPakistan = true; 
    return isInPakistan;
  };

  useEffect(() => {
    const isInPakistan = simulateLocationCheck();
    if (isInPakistan) {
      setIsVisible(true);
    }
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 animate-fadeIn">
          <div className="bg-gradient-to-r from-green-900 to-white rounded-lg p-8 shadow-lg transform transition-transform duration-500 scale-100 hover:scale-105">
            <h2 className="text-2xl font-bold text-white text-center">🎉 Welcome to Our Website! 🎉</h2>
            <p className="text-black text-center mt-2 mb-4">
              We're excited to have you here, especially our visitors from Pakistan!
            </p>
            <button
              onClick={() => setIsVisible(false)}
              className="mt-4 bg-white text-green-600 font-semibold px-6 py-2 rounded shadow-lg transition-colors duration-300 hover:bg-zinc-300"
            >
              Continue to Site
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
