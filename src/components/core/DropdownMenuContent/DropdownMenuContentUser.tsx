'use client';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { FaShoppingCart, FaStar, FaUser } from 'react-icons/fa';
import { MdOutlineFavorite } from 'react-icons/md';
import { RiMedicineBottleFill } from 'react-icons/ri';

const DropdownMenuContentUser = () => {
  return (
    <DropdownMenuContent align="start">
      <DropdownMenuLabel>Your Account</DropdownMenuLabel>
      <DropdownMenuLabel className="text-slate-300">Login to see details</DropdownMenuLabel>
      <DropdownMenuSeparator />

      <div className="font-bold">
        <Link href="/user">
          <DropdownMenuItem className="cursor-pointer flex justify-start items-center gap-2 text-slate-500">
            <FaUser />
            Profile
          </DropdownMenuItem>
        </Link>

        <Link href="/user/cart">
          <DropdownMenuItem className="cursor-pointer  flex justify-start items-center gap-2 text-slate-500">
            <FaShoppingCart />
            Cart
          </DropdownMenuItem>
        </Link>

        <Link href="/user/orders">
          <DropdownMenuItem className="cursor-pointer  flex justify-start items-center gap-2 text-slate-500">
            <RiMedicineBottleFill />
            Orders
          </DropdownMenuItem>
        </Link>

        <Link href="/user/wishlist">
          <DropdownMenuItem className="cursor-pointer  flex justify-start items-center gap-2 text-slate-500">
            <MdOutlineFavorite />
            Wishlist
          </DropdownMenuItem>
        </Link>

        <Link href="/user/reviews">
          <DropdownMenuItem className="cursor-pointer  flex justify-start items-center gap-2 text-slate-500">
            <FaStar />
            Reviews
          </DropdownMenuItem>
        </Link>
      </div>

      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Link
          href="/login"
          className="bg-f-primary-1-600 px-3 py-2 rounded-lg btn-sm text-white font-bold"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-[#F75608] px-3 py-2 rounded-lg btn-sm text-white font-bold"
        >
          Register
        </Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};

export default DropdownMenuContentUser;
