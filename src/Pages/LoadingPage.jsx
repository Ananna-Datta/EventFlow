import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-cyan-400">
      <div className="text-center">
        <svg
          className="mx-auto mb-6 h-16 w-16 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        <h2 className="text-white text-2xl font-semibold tracking-wide">
          Loading, please wait...
        </h2>
        <p className="mt-2 text-blue-100">Fetching the latest events for you</p>
      </div>
    </div>
  );
};

export default LoadingPage;
