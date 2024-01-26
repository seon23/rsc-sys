import { Button } from '@/components/ui/button';

import Image from 'next/image';
import Link from 'next/link';

import { auth, signIn, signOut } from '../_lib/auth';
import { NavModal } from './NavModal';

export default async function Header() {
  const session = await auth();

  return (
    <header className='p-4 fixed z-30 w-full shadow-md grid grid-cols-3 justify-between bg-background overflow-hidden items-center'>
      <NavModal />
      <Link href='/'>
        <h1 className='text-center'>강의실 예약하기</h1>
      </Link>
      <div className='flex items-center justify-self-end'>
        {session ? (
          <>
            {/* <UserAvatar/> */}
            <div className='relative h-10 w-10 shrink-0 overflow-hidden rounded-full'>
              <Link href='/my'>
                <Image
                  //   user.profileImg
                  src='https://via.placeholder.com/150/92c952'
                  alt='Profile Image'
                  width={40}
                  height={40}
                />
              </Link>
            </div>
            {/* replace this with hover card */}
            <form
              action={async () => {
                'use server';
                await signOut({ redirectTo: '/' });
              }}
            >
              <Button variant='outline'>로그아웃</Button>
            </form>
          </>
        ) : (
          // <SignInBtn/>
          <form
            action={async () => {
              'use server';
              await signIn();
            }}
          >
            <Button variant='outline'>로그인</Button>
          </form>
        )}
      </div>
    </header>
  );
}
