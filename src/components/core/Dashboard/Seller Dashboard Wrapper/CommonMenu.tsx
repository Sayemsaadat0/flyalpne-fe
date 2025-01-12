// import NavLink from '@/app/utils/NavLink/NavLink';
import { HomeIcon, Package, ShoppingCart } from 'lucide-react';
import { FiPieChart } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { FaRegHeart } from 'react-icons/fa';
import NavLink from '@/lib/NavLink/NavLink';

const CommonMenu = ({ open, setOpen }: any) => {
  // Function to handle the link click and close the menu
  const handleLinkClick = () => {
    setOpen(!open); // Close the menu
  };
  const navigate = useRouter();
  return (
    <>
      <NavLink
        href="/seller"
        className="flex font-bold items-center gap-3 [&.active]:bg-f-primary-1-300 px-4 [&.active]:text-white rounded-lg  py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <FiPieChart className="h-4 w-4" />
        Dashboard
      </NavLink>

      <NavLink
        href="/seller/cart"
        className="flex font-bold items-center gap-3 [&.active]:bg-f-primary-1-300 px-4  [&.active]:text-white rounded-lg py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <ShoppingCart className="h-4 w-4" />
        Cart
      </NavLink>
      <NavLink
        href="/seller/orders"
        className="flex font-bold  items-center gap-3 [&.active]:bg-f-primary-1-300 px-4  [&.active]:text-white rounded-lg py-2 text-primary transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <Package className="h-4 w-4" />
        Orders
      </NavLink>

      <NavLink
        href="/seller/wishlist"
        className="flex font-bold items-center gap-3 [&.active]:bg-f-primary-1-300 px-4  [&.active]:text-white rounded-lg py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={handleLinkClick}
      >
        <FaRegHeart className="h-4 w-4" />
        Wish List
      </NavLink>

      <button
        className="flex font-bold items-center gap-3 [&.active]:bg-f-primary-1-300 px-4  [&.active]:text-white rounded-lg py-2 text-muted-foreground transition-all hover:text-primary"
        onClick={() => {
          handleLinkClick();
          navigate.push('/');
        }}
      >
        <HomeIcon className="h-4 w-4" />
        Home
      </button>
    </>
  );
};

export default CommonMenu;
