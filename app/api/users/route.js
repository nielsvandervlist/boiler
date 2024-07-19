import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import User from '@/models/User';

export async function GET(req) {
    console.log('API route hit: GET');
    try {
        await connectToDatabase();
        console.log('Connected to database');

        const users = await User.find({});
        console.log('Users fetched:', users);

        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return NextResponse.json({ message: 'Unable to fetch users' }, { status: 500 });
    }
}
