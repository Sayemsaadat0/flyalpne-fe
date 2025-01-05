import React from 'react';

export const SearchInput = () => {
  return (
    <div className="border border-f-primary-1 overflow-hidden rounded-[6px] w-full flex items-center">
      <input className=" w-full p-2  outline-none " type="text" placeholder="Products..." />
      <div>
        <button className="bg-f-primary-1 text-f-white-200 p-2 cursor-pointer">Search</button>
      </div>
    </div>
  );
};
