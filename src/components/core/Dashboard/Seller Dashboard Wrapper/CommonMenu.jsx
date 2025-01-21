'use client';
import { IoTrashBinOutline } from 'react-icons/io5';
import { CiViewList } from 'react-icons/ci';
import { HomeIcon, Package, ShoppingCart } from 'lucide-react';
import { FiPieChart } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { FaRegHeart } from 'react-icons/fa';
import NavLink from '@/lib/NavLink/NavLink';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PiHandbagFill } from 'react-icons/pi';
import { TbCircleDashedPlus } from 'react-icons/tb';

const CommonMenu = ({ open, setOpen }) => {
  const handleLinkClick = () => {
    setOpen(!open);
  };
  const navigate = useRouter();

  return (
    <Accordion type="single" collapsible className="w-full">
      <NavLink
        href="/seller"
        className="flex font-bold items-center gap-3 [&.active]:bg-f-primary-1-300 px-4 [&.active]:text-white rounded-lg py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <FiPieChart className="h-4 w-4" />
        Dashboard
      </NavLink>

      <AccordionItem value="products" className="border-none">
        <AccordionTrigger className="hover:no-underline py-2 px-4">
          <div className="flex font-bold items-center gap-3 text-muted-foreground">
            <PiHandbagFill className="h-4 w-4 text-purple-900" />
            <span className="pr-3">Products</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-gray-100  rounded-lg">
            <NavLink
              href="/seller/products/addProducts"
              className="flex font-bold items-center gap-3  [&.active]:bg-f-primary-1-300 px-4 [&.active]:text-white rounded-lg py-2 text-muted-foreground transition-all hover:text-primary text-gray-500"
              onClick={handleLinkClick}
            >
              <TbCircleDashedPlus className="h-4 w-4" />
              Add Product
            </NavLink>
            <NavLink
              href="/seller/products/productList"
              className="flex font-bold items-center gap-3  [&.active]:bg-f-primary-1-300 px-4 [&.active]:text-white rounded-lg py-2 text-muted-foreground transition-all hover:text-primary text-gray-500"
              onClick={handleLinkClick}
            >
              <CiViewList className="h-4 w-4" />
              Product List
            </NavLink>
            <NavLink
              href="#"
              className="flex font-bold items-center gap-3  [&.active]:bg-f-primary-1-300 px-4 [&.active]:text-white rounded-lg py-2 text-muted-foreground transition-all hover:text-primary text-gray-500"
              onClick={handleLinkClick}
            >
              <IoTrashBinOutline className="h-4 w-4" />
              Product Bin
            </NavLink>
          </div>
        </AccordionContent>
      </AccordionItem>

      <NavLink
        href="/seller/orders"
        className="flex font-bold items-center gap-3 [&.active]:bg-f-primary-1-300 px-4 [&.active]:text-white rounded-lg py-2 text-primary transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <Package className="h-4 w-4" />
        Orders
      </NavLink>

      <NavLink
        href="#"
        className="flex font-bold items-center gap-3 [&.active]:bg-f-primary-1-300 px-4 [&.active]:text-white rounded-lg py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <FaRegHeart className="h-4 w-4" />
        Wish List
      </NavLink>

      <button
        className="flex font-bold items-center gap-3 [&.active]:bg-f-primary-1-300 px-4 [&.active]:text-white rounded-lg py-2 text-muted-foreground transition-all hover:text-primary w-full text-left"
        onClick={() => {
          handleLinkClick();
          navigate.push('/');
        }}
      >
        <HomeIcon className="h-4 w-4" />
        Home
      </button>
    </Accordion>
  );
};

export default CommonMenu;
