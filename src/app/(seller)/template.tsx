import SellerDashboardWrapper from '@/components/core/Dashboard/Seller Dashboard Wrapper/SellerDashboardWrapper';
import React from 'react';

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <SellerNavbar />
      <div className="mt-44 mb-20 md:mt-50 min-h-[50vh] ">{children}</div>
      <SellerFooter /> */}
      <SellerDashboardWrapper>{children}</SellerDashboardWrapper>
    </div>
  );
};

export default template;
