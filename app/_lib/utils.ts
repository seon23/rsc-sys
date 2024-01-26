import { promises as fs } from 'fs';

export type Room = {
  id: number;
  name: string;
  image: string;
};

export type Reservation = {
  id: number;
  user_id: number;
  room_id: number;
  date: string;
  time: number;
};

export const getRooms = async (): Promise<Room[]> => {
  const file = await fs.readFile(
    process.cwd() + '/app/_lib/sample-rooms.json',
    'utf8'
  );
  const { rooms } = JSON.parse(file);
  return rooms;
};

export const getReservatioons = async (): Promise<
  Reservation[] | undefined
> => {
  const file = await fs.readFile(
    process.cwd() + '/app/_lib/sample-reservations.json',
    'utf8'
  );
  const { reservations } = JSON.parse(file);
  return reservations;
};

// export const updateReservations = (newData: Reservation) {
//   const newFileContents = JSON.stringify(newData, null, 2);

//   fs.writeFileSync('/')
//   )
// }

// export const getRooms = async (): Promise<Room[]> => {
//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/photos?albumId=1'
//   );
//   return res.json();
// };
