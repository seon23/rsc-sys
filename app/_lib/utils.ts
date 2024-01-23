export type Room = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const getRooms = async (): Promise<Room[]> => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/photos?albumId=1'
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
