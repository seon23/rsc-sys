import Link from 'next/link';

import { getRooms } from './_lib/utils';
import RoomCard from './ui/RoomCard';

export default async function Home() {
  const rooms = await getRooms();
  return (
    <div className='py-1 grid md:grid-cols-2 md:px-1 xl:grid-cols-3'>
      {rooms.map((room) => (
        <div key={room.id} className='overflow-hidden my-2 md:mx-2'>
          <Link href='#'>
            <RoomCard roomData={room} />
          </Link>
        </div>
      ))}
    </div>
  );
}
