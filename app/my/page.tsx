// import Link from 'next/link';
import { redirect } from 'next/navigation';

import { auth } from '../_lib/auth';

export default async function Home() {
  const session = await auth();
  if (!session) return redirect('/api/auth/signin');
  const { user } = session;
  //   console.log('user: ', user);
  return (
    <div>
      <h1>닉네임: {user?.name}</h1>
    </div>
  );
}
