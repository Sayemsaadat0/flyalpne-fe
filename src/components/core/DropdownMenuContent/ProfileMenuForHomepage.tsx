'use client';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
// import DropdownMenuContentUser from './DropdownMenuContentUser';
// import { UserIcon } from '../icons/publicIcon/PublicPageIcons';

const ProfileMenuForHomepage = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="w-full bg-gray-200 flex justify-evenly items-center px-4"
        >
          {/* <UserIcon size={'32'} className="text-f-primary-1" /> */}
          <div className="text-right">
            <p>
              <span className="text-sm opacity-70 ">someone@gmail.com</span> <br />
              <span>Sayem Saadat</span>
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>

      {/* dynamic menu links/contents */}
      {/* <DropdownMenuContentUser /> */}
    </DropdownMenu>
  );
};

export default ProfileMenuForHomepage;
