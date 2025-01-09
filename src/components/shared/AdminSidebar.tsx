import { adminSidebarItems } from '@/data/admin.sidebar.dummy.data';
import { TSidebarItem } from '@/types/types';
import Link from 'next/link';
// import Logo from '../core/Logo/Logo';

const AdminSidebar = () => {
  const renderSidebarItems = (items: TSidebarItem[]) => {
    return items.map((item, index) => (
      <div key={index} className="">
        {/* Main Item */}
        <Link href={item.url ?? ''} className="flex items-center gap-2">
          {item.icon && <span>{item.icon}</span>}
          <span>{item.label}</span>
        </Link>

        {/* Recursive Render for Submenu */}
        {item.children && <div className="space-y-2 mt-2">{renderSidebarItems(item.children)}</div>}
      </div>
    ));
  };

  return (
    <div>
      <div className="h-[6rem] flex items-center justify-center">
        {/* <Logo /> */}
        Logo
      </div>
      <div className="flex flex-col gap-2 font-medium ml-8">
        {renderSidebarItems(adminSidebarItems)}
      </div>
    </div>
  );
};

export default AdminSidebar;
