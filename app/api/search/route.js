// pages/api/search.js
import connectToDatabase from '@/lib/dbConnect';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const query = searchParams.get('query');

        if (!query) {
            return NextResponse.json({ message: 'Query parameter is missing' }, { status: 400 });
        }

        await connectToDatabase();

        const searchQuery = [
            {
                $search: {
                    index: 'users_search', // Your search index name
                    text: {
                        query: query,
                        path: ['name', 'email'], // Fields to search in
                    },
                },
            },
            {
                $limit: 10,
            },
        ];

        const users = await User.aggregate(searchQuery).exec();

        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return NextResponse.json({ message: 'Unable to fetch users' }, { status: 500 });
    }
}
