import Image from 'next/image';

import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import {
  Card,
  CardDescription,
  CardHeader as CardInfo,
  CardTitle,
} from '../../components/ui/card';
import { Room } from '../_lib/utils';

interface RoomCardProps extends ComponentProps<typeof Card> {
  roomData: Room;
}

export default function RoomCard({ className, roomData }: RoomCardProps) {
  return (
    <Card className={cn('overflow-hidden', className)}>
      <div className='p-6 pt-0 h-72 w-full object-cover relative'>
        <Image src={roomData.image} alt={roomData.name} fill={true} />
      </div>
      <CardInfo className='space-y-2.5'>
        <CardTitle className='text-lg tracking-wide md:text-2xl'>
          {roomData.name}
        </CardTitle>
        <CardDescription className='truncate'>{roomData.name}</CardDescription>
      </CardInfo>
    </Card>
  );
}
