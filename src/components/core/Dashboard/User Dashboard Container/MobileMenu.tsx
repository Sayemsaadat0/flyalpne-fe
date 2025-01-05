import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { Button } from '@/components/ui/button2';
import CommonMenu from './CommonMenu';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5 text-[#4E94A1]" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col justify-center items-center">
        <nav className="grid gap-2 text-lg font-medium">
          <CommonMenu
            setOpen={setOpen} // Close menu when a link is clicked
          />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
