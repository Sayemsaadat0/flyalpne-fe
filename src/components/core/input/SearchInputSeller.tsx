import React from 'react';

export const SearchInputSeller = () => {
  return (
    <div className="border border-s-primary-1 overflow-hidden rounded-[10px] w-full flex items-center">
      <input className=" w-full p-2  outline-none " type="text" placeholder="Products..." />
      <div>
        <button className="bg-s-primary-1 text-f-white-200 p-2 cursor-pointer">Search</button>
      </div>
    </div>
  );
};
