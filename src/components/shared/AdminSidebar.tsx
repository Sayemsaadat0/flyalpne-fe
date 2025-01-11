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
          {item.icon && <item.icon />}
          <span>{item.label}</span>
        </Link>
        {/* {item.children && <div className="space-y-4 mt-4">{renderSidebarItems(item.children)}</div>} */}
      </div>
    ));
  };

  return (
    <div>
      <div className="h-[6rem] flex items-center justify-center">
        {/* <Logo /> */}
        Logo
      </div>
      <div className="flex flex-col gap-4 font-medium ml-8">
        {renderSidebarItems(adminSidebarItems as TSidebarItem[])}
      </div>
    </div>
  );
};

export default AdminSidebar;
