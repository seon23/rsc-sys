import { Sheet, SheetContent, SheetTrigger } from '@/app/ui/sheet';
import { Button } from '@/components/ui/button';

import ProfileCard from './ProfileCard';

export function SheetDemo() {
  return (
    <Sheet defaultOpen={true}>
      <SheetTrigger asChild>
        <Button variant='outline'>Open</Button>
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
