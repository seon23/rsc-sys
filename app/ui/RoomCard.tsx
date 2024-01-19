import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardInfo,
  CardTitle,
} from './card';
import { Room } from '../_lib/utils';

interface RoomCardProps extends React.ComponentProps<typeof Card> {
  roomData: Room;
}

// required props: Image src, alt, title, description
export default function RoomCard({ className, roomData}: RoomCardProps) {
  return (
    <Card className={className}>
      <CardContent className='h-72 w-full object-cover relative'>
        <Image
          src={roomData.url}
          alt={roomData.title}
          fill={true}
        />
      </CardContent>
      <CardInfo>
        <CardTitle className='md:text-2xl'>강의실 {roomData.id}</CardTitle>
        <CardDescription className='truncate'>
          {roomData.title}
        </CardDescription>
      </CardInfo>
    </Card>
  );
}
