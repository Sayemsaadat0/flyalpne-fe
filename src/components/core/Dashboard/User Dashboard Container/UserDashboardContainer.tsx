'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaAngleDown } from 'react-icons/fa';
import MobileMenu from './MobileMenu';
import { ProfileMenu } from './ProfileMenu';
import Sidebar from './Sidebar';
import { ProfileFooter } from '../../footer/ProfileFooter';

const UserDashboardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid">
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] ">
        <div className="hidden border-r bg-muted/40 md:block ">
          <Link href="/" className="mt-3 flex justify-center items-center">
            <Image src="/Logo1.png" alt="Logo" width={128} height={128} className="w-32" />
          </Link>
          {/* ------------ Sidebar / Desktop Menu Here ---------------- */}
          <div className="mt-20">
            <Sidebar />
          </div>
        </div>
        <div className="flex flex-col ">
          <header className="flex h-14 items-center gap-4 py-8 border-b justify-between bg-muted/40 px-4 lg:px-6">
            {/* ------------ Mobile Menu Here (the menu for mobile view) ---------------- */}
            <MobileMenu />

            <div></div>

            <div className="w-full flex-1 gap-5 text-sm lg:text-balance text-[#0E266C] font-extrabold justify-center hidden lg:flex">
              <Link href="/"> Home</Link>
              <Link href="/services"> Services</Link>
              <Link href="/products" className="flex gap-1 items-center">
                Products <FaAngleDown />
              </Link>
              <Link href="/trending"> Trending</Link>
              <Link href="/sale"> Sale</Link>
              <Link href="/about"> About us</Link>
            </div>
            {/* --- Dropdown menu when the user clicks 'user picture at the top right corner' */}
            <div>
              <ProfileMenu />
            </div>
          </header>
          <div className="mx-10 my-5">{children}</div>
        </div>
      </div>

      <div className="bg-orange-400 w-full">
        <ProfileFooter />
      </div>
    </div>
  );
};

export default UserDashboardContainer;
