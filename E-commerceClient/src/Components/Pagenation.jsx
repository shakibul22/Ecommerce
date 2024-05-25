import React from "react";

// eslint-disable-next-line react/prop-types
const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-10 space-x-2">
      {pageNumbers.map((number) => (
        <a
          key={number}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPageChange(number);
          }}
          className={`px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none ${
            currentPage === number ? "bg-primary/20 ring ring-primary" : "hover:bg-gray-100"
          }`}
        >
          {number}
        </a>
      ))}
      {currentPage < totalPages && (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPageChange(currentPage + 1);
          }}
          className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 border rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      )}
    </div>
  );
};

export default PaginationComponent;
