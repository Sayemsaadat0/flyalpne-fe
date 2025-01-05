'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLink = ({ href, exact = false, children, className, handleLinkClick, ...props }: any) => {
  const pathname = usePathname();

  const isActive = exact
    ? pathname === href // Exact match
    : href !== '/' &&
      pathname?.startsWith(href) &&
      pathname?.split('/').length === href.split('/').length;

  const newClassName = isActive ? `${className} active` : className;

  return (
    <Link href={href} className={newClassName} onClick={handleLinkClick} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
