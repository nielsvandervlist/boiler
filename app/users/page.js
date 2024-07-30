import React from 'react';

async function fetchUsers() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/users`, {cache: "no-store"});

    if (!res.ok) {
        console.error("Failed to fetch users:", res.statusText);
        throw new Error('Failed to fetch users');
    }
    return res.json();
}

export default async function Users() {
    try {
        const users = await fetchUsers();
        return (
            <div>
                <h1>Users List</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user._id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        );
    } catch (error) {
        console.error("Error rendering Users component:", error);
        return <div>Failed to load users.</div>;
    }
}
