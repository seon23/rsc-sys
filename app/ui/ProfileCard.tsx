import { Button } from '@/components/ui/button';

import Image from 'next/image';

import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import { Card } from '../../components/ui/card';

type CardProps = ComponentProps<typeof Card>;
export default function ProfileCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        'rounded-null shadow-none border-none flex flex-row gap-[7px]',
        className
      )}
      {...props}
    >
      <div className='relative h-10 w-10 shrink-0 overflow-hidden rounded-full'>
        <Image
          className='aspect-square h-full w-full'
          //   user.profileImg
          src='https://via.placeholder.com/150/92c952'
          alt='Profile Image'
          fill={true}
        />
      </div>
      <div className='flex flex-row items-center gap-x-12'>
        <div className='leading-tight'>User Name</div>
        <div>
          <Button>로그아웃</Button>
        </div>
      </div>
    </Card>
  );
}
