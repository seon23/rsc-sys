type Users = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

type Rooms = {
  id: string;
  name: string;
  image: string;
};

// eslint-disable-next-line no-unused-vars
enum ReservationStatus {
  // eslint-disable-next-line no-unused-vars
  BOOKED = 1,
  // eslint-disable-next-line no-unused-vars
  CANCELLED = 2,
  // eslint-disable-next-line no-unused-vars
  COMPLETED = 3,
}

type Reservations = {
  id: string;
  user_id: string;
  room_id: string;
  date: string;
  startTime: string;
  endTime: string;
  status:
    | ReservationStatus.BOOKED
    | ReservationStatus.CANCELLED
    | ReservationStatus.COMPLETED;
};

const users: Users[] = [
  {
    id: '54224dd8-5d73-4bc6-a1b8-fc286a783f1a',
    name: 'User1',
    email: 'user1@example.com',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/138.jpg',
  },
  {
    id: 'e98e63d0-7acd-416d-817e-74951ba5584e',
    name: 'User2',
    email: 'user2@example.com',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/537.jpg',
  },
  {
    id: 'fbe687d2-aee2-46c9-9e3b-256463650a59',
    name: 'User3',
    email: 'user3@example.com',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/450.jpg',
  },
  {
    id: 'dd8f1613-ee2d-4bad-a9fa-eb7c53d50b4b',
    name: 'User4',
    email: 'user4@example.com',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/123.jpg',
  },
  {
    id: 'c13b4fbf-8198-4c38-87db-c24cef065c16',
    name: 'User5',
    email: 'user5@example.com',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/964.jpg',
  },
  {
    id: '0861488a-a5cd-4ba1-8acd-5a720f56b8eb',
    name: 'User6',
    email: 'user6@example.com',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1227.jpg',
  },
  {
    id: '6364a474-a0d8-4282-b75d-cda834418378',
    name: 'User7',
    email: 'user7@example.com',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/699.jpg',
  },
  {
    id: '80d1df69-9746-4ab4-969b-15caa67e0785',
    name: 'User8',
    email: 'user8@example.com',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg',
  },
  {
    id: 'ee6a753e-7361-43c7-9ea5-bf8b1499ddee',
    name: 'User9',
    email: 'user9@example.com',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/977.jpg',
  },
  {
    id: 'd175f346-7431-49d0-825a-879f32915002',
    name: 'User10',
    email: 'user1@example.com',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/61.jpg',
  },
];

const rooms: Rooms[] = [
  {
    id: 'c579c31d-c325-4073-95b2-5334b731708b',
    name: 'Room1',
    image: '/rooms/room1',
  },
  {
    id: '98e04523-eded-489b-b85c-d76fb001f33f',
    name: 'Room2',
    image: '/rooms/room2',
  },
  {
    id: 'd3867375-2d18-4904-9b74-a4db47085447',
    name: 'Room3',
    image: '/rooms/room3',
  },
  {
    id: '6ca11b55-41ba-4cf1-8515-e9a310c8f65e',
    name: 'Room4',
    image: '/rooms/room4',
  },
  {
    id: '94aa442f-eb91-4fcb-b087-d6552729b334',
    name: 'Room5',
    image: '/rooms/room5',
  },
  {
    id: 'dead5922-95ed-41ac-bdfc-4ac6abe5167a',
    name: 'Room6',
    image: '/rooms/room6',
  },
];

const reservations: Reservations[] = [
  {
    id: '0d3c4879-8912-4020-bf35-67050edc9561',
    user_id: users[0].id,
    room_id: rooms[0].id,
    date: '2024-01-26',
    startTime: '13:00:00',
    endTime: '15:00:00',
    status: ReservationStatus.BOOKED,
  },
  {
    id: 'ad6f8466-bd49-45be-8ae4-85ae2c720c8e',
    user_id: users[1].id,
    room_id: rooms[1].id,
    date: '2024-01-27',
    startTime: '09:00:00',
    endTime: '10:00:00',
    status: ReservationStatus.BOOKED,
  },
  {
    id: 'ae30a7bd-75fc-48b8-bc14-e970afd76ad3',
    user_id: users[2].id,
    room_id: rooms[2].id,
    date: '2024-01-29',
    startTime: '17:00:00',
    endTime: '20:00:00',
    status: ReservationStatus.BOOKED,
  },
];

export { users, rooms, reservations };
