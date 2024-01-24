import { Button } from '@/components/ui/button';

import Image from 'next/image';
import { redirect } from 'next/navigation';

import React from 'react';

import { auth } from '../_lib/auth';

export default async function RSVTest() {
  const session = await auth();
  if (!session) return redirect('/api/auth/signin');

  const { user } = session;
  console.log('user: ', user);
  return (
    <div>
      <h1>{user?.name}</h1>
      <div className='relative w-[50px] h-[50px] overflow-hidden rounded-full'>
        <Button variant='outline' className='border-none'>
          <Image
            src={user?.image || ''}
            alt={user?.name || ''}
            width={50}
            height={50}
          />
        </Button>
      </div>
    </div>
  );
}
