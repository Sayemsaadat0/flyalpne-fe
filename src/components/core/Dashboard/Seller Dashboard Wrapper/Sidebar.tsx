import { useState } from 'react';
import CommonMenu from './CommonMenu';
// import Logo from '../../logo/Logo';
import { CircleUser } from 'lucide-react';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-full max-h-screen flex-col gap-2 justify-center items-center">
      <div className="flex-1 mt-5">
        <nav className="grid items-start px-2 gap-y-2 text-sm font-medium lg:px-4">
          {/* to avoid writting the same menu link twice for mobile and desktop, we are using the same component for both the menu */}
          <CommonMenu
            open="false"
            setOpen={setOpen} // Close menu when a link is clicked
          />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
