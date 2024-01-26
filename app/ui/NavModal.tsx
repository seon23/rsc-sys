import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import ProfileCard from './ProfileCard';

export function NavModal() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='link' size='icon'>
          <HamburgerMenuIcon className='w-6 h-6' />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='w-80'>
        <div className='flex flex-column p-4'>
          <div className='p-4'>
            <ProfileCard />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
