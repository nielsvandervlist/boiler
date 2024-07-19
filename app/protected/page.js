// app/protected/page.js
'use client';
import { useSession} from 'next-auth/react';

export default function ProtectedPage() {
  const { data: session } = useSession();

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {session.user?.name}!</p>
    </div>
  );
}