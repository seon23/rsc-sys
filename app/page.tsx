import Link from 'next/link';

import React from 'react';

import { getRooms } from './_lib/utils';
import RoomCard from './ui/RoomCard';

export default async function Home() {
  const rooms = await getRooms();
  return (
    <main>
      {/* Gallery 형태*/}
      <div className='py-1 grid md:grid-cols-2 md:px-1 xl:grid-cols-3'>
        {rooms.map((room) => (
          <Link key={room.id} href='#' className='my-2 md:mx-2'>
            <RoomCard roomData={room} className=''/>
          </Link>
        ))}
      </div>
    </main>
  );
}
