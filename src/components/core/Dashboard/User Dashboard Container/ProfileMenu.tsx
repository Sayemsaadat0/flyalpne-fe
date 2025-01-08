'use client';
// import DropdownMenuContentUser from '@/components/core/DropdownMenuContent/DropdownMenuContentUser';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { CircleUser } from 'lucide-react';

export const ProfileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full overflow-hidden">
          <div className="w-10 h-10 bg-f-primary-1-300 rounded-full flex justify-center items-center">
            <CircleUser className="h-5 w-5 text-white" />
          </div>
          {/* <Image alt="user image" src={userImage} /> */}
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>

      {/* dynamic menu links/contents */}
      {/* <DropdownMenuContentUser /> */}
    </DropdownMenu>
  );
};
