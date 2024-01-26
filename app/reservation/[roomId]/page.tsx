import { auth } from '@/app/_lib/auth';
import { getRooms } from '@/app/_lib/utils';
import CalendarPage from '@/app/ui/CalendarPage';

import { notFound, redirect } from 'next/navigation';

export default async function RoomDetail({
  params: { roomId },
}: {
  params: { roomId: string };
}) {
  const session = await auth();
  if (!session) return redirect('/api/auth/signin');

  //   const { user } = session;
  //   console.log('user: ', user);
  const rooms = await getRooms();
  const room = rooms.find((room) => room.id === Number(roomId));
  if (!room) return notFound;

  return (
    <>
      <div className='container mx-auto'>
        <h1 className='text-3xl'>{room.name}</h1>
        <br />
        <CalendarPage />
      </div>
    </>
  );
}
