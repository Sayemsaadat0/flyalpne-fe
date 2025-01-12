import UserDashboardContainer from '@/components/core/Dashboard/User Dashboard Wrapper/UserDashboardContainer';
import ProfileNavbar from '@/components/core/Dashboard/User Dashboard Wrapper/UserDashboardContainer';
import { Toaster } from '@/components/ui/toaster';
import React from 'react';

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <UserDashboardContainer>{children}</UserDashboardContainer>
      <Toaster />
    </div>
  );
};

export default template;
