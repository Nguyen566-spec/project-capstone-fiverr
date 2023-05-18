import React from "react";

type Props = {
  
};

const Pagination = (props: Props) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between">
        <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700 flex flex-wrap flex-row gap-2">
              Showing
              <span className="font-medium">1</span>
              to
              <span className="font-medium">10</span>
              of
              <span className="font-medium">97</span>
              results
            </p>
          </div>
        </div>
        <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Previous
        </button>
        <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
