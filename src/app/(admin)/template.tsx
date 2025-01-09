// import AuthPage from '@/components/auth/AuthPage';
import DefaultFooter from '@/components/core/footer/DefaultFooter';
import DashboardTopNavbar from '@/components/core/navbar/DashboardTopNavbar';
import AdminSidebar from '@/components/shared/AdminSidebar';
import { Toaster } from '@/components/ui/toaster';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex  dark:bg-dark-gradient">
        <NextTopLoader color="#1745c4" showSpinner={false} />
        <div className="fixed left-0 hidden lg:block  max-h-screen min-h-screen customScrollbar overflow-auto w-[250px] overflow-y-auto shadow-xl z-20">
          <AdminSidebar />
        </div>
        <div className="w-full lg:ml-[250px]">
          <div className="sticky top-0 z-50  border-b bg-white dark:border-b-oc-black-300 dark:bg-dark-gradient">
            <DashboardTopNavbar />
          </div>
          <div className="">
            <div className="p-4 md:p-8 min-h-[calc(100vh-100px)] z-40 relative">{children}</div>
            <DefaultFooter />
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default template;
