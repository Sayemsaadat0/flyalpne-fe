'use client';
import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';
// import SignoutIcon from '../icons/Dashboard/SignoutIcon';
import ArrowIcon from '../icons/publicIcon/ArrowIcon';
import SignoutIcon from '../icons/dashboard/SignoutIcon';
// import { signOut } from 'next-auth/react';
type MenuItem = {
  path: string;
  label: string;
};

const DashboardTopNavbar: FC = () => {
  const { back, forward } = useRouter();
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    {
      path: '/dashboard/analytics',
      label: 'Analytics',
    },
    {
      path: '/dashboard/service',
      label: 'Service',
    },
    {
      path: '/dashboard/blogs',
      label: 'Blogs',
    },
    {
      path: '/dashboard/contact',
      label: 'Contact',
    },
    {
      path: '/dashboard/order',
      label: 'Order',
    },
    {
      path: '/dashboard/price',
      label: 'Price',
    },
    {
      path: '/dashboard/sample',
      label: 'Sample',
    },
    {
      path: '/dashboard/testimonial',
      label: 'Testimonial',
    },
  ];

  // Find the matching menu item based on the current pathname
  const currentMenuItem = menuItems.find((item) => pathname.startsWith(item.path));

  return (
    <div className="px-8 bg-oc-white-500 py-6 border-b border-b-oc-primary-1-900 flex justify-between">
      <div className="flex gap-4 items-center">
        <div className="flex gap-2">
          <div
            onClick={back}
            className="p-4 bg-oc-white-600/60 border cursor-pointer border-oc-primary-1-900 rounded-full hover:bg-oc-primary-1-900 hover:text-oc-primary-1-50"
          >
            <ArrowIcon className="rotate-180" />
          </div>
          <div
            className="p-4 bg-oc-white-600/60 cursor-pointer border border-oc-primary-1-900 rounded-full hover:bg-oc-primary-1-900 hover:text-oc-primary-1-50"
            onClick={forward}
          >
            <ArrowIcon />
          </div>
        </div>
        <div>
          <p className="leading-none text-w-title-1-Medium-22">Admin Dashboard</p>
          {/* Display the label based on the current pathname */}
          <p className="text-w-paragraph-regular-20 text-oc-white-700">
            {currentMenuItem ? currentMenuItem.label : 'Dashboard'}
          </p>
        </div>
      </div>

      <div
        // onClick={() => signOut()}
        className="flex text-w-paragraph-regular-20 cursor-pointer hover:text-oc-primary-1-800 items-center  gap-2"
      >
        <SignoutIcon size={'24'} /> Sign out
      </div>
    </div>
  );
};

export default DashboardTopNavbar;
