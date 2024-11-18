import React from 'react';

export default function Events() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Content will be added in the next implementation */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">No Events Yet</h2>
          <p className="text-gray-600">Check back later for upcoming events.</p>
        </div>
      </div>
    </div>
  );
}