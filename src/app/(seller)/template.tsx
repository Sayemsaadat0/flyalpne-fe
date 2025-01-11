import SellerFooter from '@/components/core/footer/SellerFooter';
import SellerNavbar from '@/components/core/navbar/SellerNavbar';
import React from 'react';

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <SellerNavbar /> */}
      <div className="mt-44 mb-20 md:mt-50 min-h-[50vh] ">{children}</div>
      {/* <SellerFooter /> */}
    </div>
  );
};

export default template;
