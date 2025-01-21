import SellerDashboardWrapper from '@/components/core/Dashboard/Seller Dashboard Wrapper/SellerDashboardWrapper';
import React from 'react';

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SellerDashboardWrapper>{children}</SellerDashboardWrapper>
    </div>
  );
};

export default template;
