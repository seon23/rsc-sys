import { promises as fs } from 'fs';

export type Room = {
  id: number;
  name: string;
  image: string;
};

export const getRooms = async (): Promise<Room[]> => {
  const file = await fs.readFile(
    process.cwd() + '/app/_lib/sample-rooms.json',
    'utf8'
  );
  const { rooms } = JSON.parse(file);
  return rooms;
};

// export const getRooms = async (): Promise<Room[]> => {
//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/photos?albumId=1'
//   );
//   return res.json();
// };
