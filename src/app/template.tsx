// import DefaultFooter from '@/components/core/footer/DefaultFooter'
// import DefaultNavbar from '@/components/core/navbar/DefaultNavbar'
// import { Toaster } from '@/components/ui/toaster'
import React from 'react';

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <DefaultNavbar /> */}
      <div className="mt-44 md:mt-50 min-h-[90vh] ">{children}</div>
      {/* <DefaultFooter /> */}
      {/* <Toaster /> */}
    </div>
  );
};

export default template;
