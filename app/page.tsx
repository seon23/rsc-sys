// import { promises as fs } from 'fs';
import Link from 'next/link';

import { getRooms } from './_lib/utils';
import RoomCard from './ui/RoomCard';

// export type Room = {
//   id: number;
//   name: string;
//   image: string;
// };

export default async function Home() {
  const rooms = await getRooms();
  console.log(rooms);
  return (
    <main className='py-1 grid md:grid-cols-2 md:px-1 xl:grid-cols-3'>
      {rooms.map((room) => (
        <div key={room.id} className='overflow-hidden my-2 md:mx-2'>
          <Link href={`/reservation/${room.id}`}>
            <RoomCard roomData={room} />
          </Link>
        </div>
      ))}
    </main>
  );
}
