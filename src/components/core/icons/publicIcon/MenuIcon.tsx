import { cn } from '@/lib/utils';
import { IconType, iconVariants } from '../icons';

const MenuIcon: React.FC<IconType> = ({ size, className, ...props }) => {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ size, className }))}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
    </svg>
  );
};

export default MenuIcon;