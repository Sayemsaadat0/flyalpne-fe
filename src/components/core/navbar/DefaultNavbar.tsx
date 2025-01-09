'use client';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ProfileMenuForHomepage from '../DropdownMenuContent/ProfileMenuForHomepage';
import { ProfileMenu } from '../Dashboard/User Dashboard Container/ProfileMenu';
// import Logo from '../Logo/Logo';
import { SearchInput } from '../input/SearchInput';
// import { CartIcon } from '../icons/publicIcon/PublicPageIcons';
import MenuIcon from '../icons/publicIcon/MenuIcon';
import { CartIcon } from '../icons/publicIcon/PublicPageIcons';
import Logo from '../Logo/Logo';

const NavbarCategory = () => {
  const category = [
    {
      title: 'Desktop',
      url: '/',
    },
    {
      title: 'Mouse',
      sub_Category: [
        {
          title: 'Wired',
          url: '/wired',
        },
        {
          title: 'Wireless',
          url: '/wireless',
        },
      ],
    },
  ];

  const NavItems = [
    {
      pathname: 'Products',
      path_route: '/products',
      icon: <ShoppingBag size={'24'} />,
    },
    {
      pathname: 'Home',
      path_route: '/',
      // icon: <DashboardIcon size={'24'} />,
    },
    {
      pathname: 'Vendors',
      path_route: '/singleSeller/sdfssdddf',
      // icon: <DashboardIcon size={'24'} />,
    },
    {
      pathname: 'Blogs',
      path_route: '/blogs',
      // icon: <DashboardIcon size={'24'} />,
    },
  ];

  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between gap-10 ">
      <div>
        {/* <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="space-x-3">
              <MenuIcon />
              <p>All Category</p>
            </MenubarTrigger>
            <MenubarContent>
              {category.map((item, index) => (
                <div key={index}>
                  Check if subcategories exist
                  {item.sub_Category ? (
                    <MenubarSub>
                      <MenubarSubTrigger className="group">
                        <span className="group-hover:translate-x-3 transition-all duration-500">
                          {item.title}
                        </span>
                      </MenubarSubTrigger>
                      <MenubarSubContent>
                        {item.sub_Category.map((subItem, subIndex) => (
                          <MenubarItem key={subIndex} asChild>
                            <Link href={subItem.url} className="group ">
                              <span className="group-hover:translate-x-3 transition-all duration-500">
                                {subItem.title}
                              </span>
                            </Link>
                          </MenubarItem>
                        ))}
                      </MenubarSubContent>
                    </MenubarSub>
                  ) : (
                    <MenubarItem asChild>
                      <Link href={item.url} className="group ">
                        <span className="group-hover:translate-x-3 transition-all duration-500">
                          {item.title}
                        </span>
                      </Link>
                    </MenubarItem>
                  )}
                </div>
              ))}
            </MenubarContent>
          </MenubarMenu>
        </Menubar> */}
      </div>
      <div className="hidden md:flex lg:hidden">
        <ProfileMenuForHomepage />
      </div>
      <div className="md:hidden">
        <ProfileMenu />
      </div>
      <div className="lg:flex gap-5 hidden">
        {NavItems.map((item) => (
          <div className="min-w-20" key={Math.random()}>
            <Link
              href={item.path_route}
              className={`${pathname === item?.path_route ? 'text-f-primary-1 font-semibold' : 'hover:text-f-primary-1 transition-all '}`}
            >
              <span className="flex items-center gap-2">
                {item?.icon} {item.pathname}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// Default Navbar
const DefaultNavbar: React.FC = () => {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    if (window.scrollY >= 100) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    };
  }, []);

  return (
    <div
      className={`py-2 z-50 bg-f-white-200 transition-all ease-in-out w-full fixed top-0 left-0  `}
      // ${navBg ? '' : 'absolute top-5 md:top-0'}
    >
      <nav className="fly-commonContainer">
        <div className="hidden md:block">
          {!navBg && (
            <div className="flex text-sm justify-between border-b border-b-f-black-100 pb-1">
              <div>
                <p>Need Help? +001 123 456 789</p>
              </div>
              <div className="flex">
                <Link className="border-r border-f-black-100 px-2" href={'/faq'}>
                  About Us
                </Link>
                <Link className="border-r border-f-black-100 px-2" href={'/faq'}>
                  Contact Us
                </Link>
                <Link className="border-r border-f-black-100 px-2" href={'/faq'}>
                  Order Tracking
                </Link>
                <Link className=" px-2 " href={'/faq'}>
                  FAQs
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="flex relative justify-between items-center border-b border-b-f-black-100 py-1">
          <div className="hidden md:block">
            <Logo />
          </div>
          <div className="flex w-full md:w-1/2 justify-center items-center gap-5">
            <div className="w-full">
              <SearchInput />
            </div>
            <Link href="/user/cart" className="relative">
              <CartIcon className="text-f-primary-1" size={'32'} />
              <span className="absolute text-center -top-0 bg-f-primary-2-400 text-f-white-200 w-5 h-5 flex  items-center justify-center rounded-full text-[10px] -right-2">
                99+
              </span>
            </Link>
          </div>
          <div className="hidden lg:block text-sm">
            <div className="flex gap-5 items-center">
              <ProfileMenuForHomepage />
            </div>
          </div>
        </div>

        <div className="pt-3">
          <div>
            <NavbarCategory />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DefaultNavbar;
