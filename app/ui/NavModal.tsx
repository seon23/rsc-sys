import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import Link from 'next/link';

export function NavModal() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='link' size='icon'>
          <HamburgerMenuIcon className='w-6 h-6' />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='w-80 pt-12'>
        <ul className='list-none m-2 flex flex-col items-center'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/my'>마이페이지</Link>
          </li>
          <li>
            <Link href='/'>문의게시판</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
