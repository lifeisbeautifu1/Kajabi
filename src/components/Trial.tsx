import React from 'react';

const Trial = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-6 border-b border-b-gray-200">
      <h1 className="text-4xl font-semibold w-1/2 text-center">
        Since we’re both serious about your business, let’s make it official.
        Try Kajabi free for 14 days.
      </h1>
      <button className="btn hover:bg-blue-600 font-normal">
        Start free trial
      </button>
    </div>
  );
};

export default Trial;
