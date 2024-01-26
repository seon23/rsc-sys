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

  const rooms = await getRooms();
  const room = rooms.find((room) => room.id === Number(roomId));
  if (!room) return notFound;
  //   const { id: currRoomId } = room;

  //   const reservations = await getReservatioons();
  //   const reservation = reservations?.find(
  //     (reservation) => reservation.room_id === currRoomId
  //   );
  return (
    <>
      <div className='container mx-auto'>
        <h1 className='text-3xl text-center'>{room.name}</h1>
        <br />
        <CalendarPage />
        {/* {reservation?.date} {reservation?.time}:00 */}
      </div>
    </>
  );
}
