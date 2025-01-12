import { useState } from 'react';
import CommonMenu from './CommonMenu';
// import Logo from '../../logo/Logo';
import { CircleUser } from 'lucide-react';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-full max-h-screen flex-col gap-2 justify-center items-center">
      <div className="flex flex-col justify-start  px-4 items-start gap-3">
        {/* <Logo /> */}
        <div className="flex justify-center items-center w-full">
          <div className="w-14 h-14 bg-f-primary-1-300 rounded-full flex justify-center items-center">
            <CircleUser className="h-6  w-6     text-white" />
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-sm">User Name</h2>
          <p className="text-sm">07654548247</p>
        </div>
      </div>
      <div className="flex-1 mt-5">
        <nav className="grid items-start px-2 gap-y-2 text-sm font-medium lg:px-4">
          {/* to avoid writting the same menu link twice for mobile and desktop, we are using the same component for both the menu */}
          <CommonMenu
            open={open}
            setOpen={setOpen} // Close menu when a link is clicked
          />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
