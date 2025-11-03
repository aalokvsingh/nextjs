'use client'; // Must be a client component!

import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <html>
      <body className="flex h-screen items-center justify-center bg-gray-100">
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2 text-red-600">
            Something went wrong 😢
          </h2>
          <p className="text-gray-600 mb-4">{error.message}</p>
          <button
            onClick={() => reset()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
