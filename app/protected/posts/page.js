// app/protected/page.js
'use client';
import { useSession} from 'next-auth/react';

export default function Posts() {
    const { data: session } = useSession();

    if (!session) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Posts</h1>
            <p>Posts from {session.user?.name}!</p>
        </div>
    );
}