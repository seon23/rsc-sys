import { reservations, rooms, users } from '@/app/_lib/placeholder-data.ts';
import { VercelPoolClient, db } from '@vercel/postgres';

async function seedUsers(client: VercelPoolClient) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        avatar TEXT NOT NULL,
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        return client.sql`
        INSERT INTO users (id, name, email, avatar)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${user.avatar})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedRooms(client: VercelPoolClient) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "rooms" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS rooms (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
      );
    `;

    console.log(`Created "rooms" table`);

    // Insert data into the "rooms" table
    const insertedRooms = await Promise.all(
      rooms.map(
        (room) => client.sql`
        INSERT INTO rooms (id, name)
        VALUES (${room.id}, ${room.name})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedRooms.length} Rooms`);

    return {
      createTable,
      rooms: insertedRooms,
    };
  } catch (error) {
    console.error('Error seeding Rooms:', error);
    throw error;
  }
}

async function seedReservations(client: VercelPoolClient) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "reservations" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS reservations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL,
    room_id UUID NOT NULL,
    date TEXT NOT NULL,
    startTime TEXT NOT NULL,
    endTime TEXT NOT NULL,
    status INT NOT NULL,
  );
`;

    console.log(`Created "reservations" table`);

    // Insert data into the "reservations" table
    const insertedReservations = await Promise.all(
      reservations.map(
        (reservation) => client.sql`
        INSERT INTO reservations (id, user_id, room_id, date, startTime, endTime, status)
        VALUES (
          ${reservation.id}, 
          ${reservation.user_id}, 
          ${reservation.room_id}, 
          ${reservation.date}, 
          ${reservation.startTime}, 
          ${reservation.endTime}, 
          ${reservation.status}, 
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedReservations.length} reservations`);

    return {
      createTable,
      reservations: insertedReservations,
    };
  } catch (error) {
    console.error('Error seeding reservations:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedRooms(client);
  await seedReservations(client);

  // await client.end();
  // await client.release();
  client.release();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err
  );
});
