import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#004AAD] to-[#00c6ff] text-white text-center px-6">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-2xl mb-2">Something went wrong...</p>
      {error?.status && (
        <p className="text-lg mb-4">
          <span className="font-semibold">Error {error.status}:</span> {error.statusText || error.message}
        </p>
      )}
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-2 bg-white text-[#004AAD] font-semibold rounded-full shadow hover:bg-gray-100 transition"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
