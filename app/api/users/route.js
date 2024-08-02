import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import User from '@/models/User';

export async function GET(req) {
    try {
        await connectToDatabase();
        const users = await User.find({});
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return NextResponse.json({ message: 'Unable to fetch users' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await connectToDatabase();
        const { name, email } = await req.json();

        const newUser = new User({
            name,
            email,
        });

        await newUser.save();

        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        console.error('Failed to create user:', error);
        return NextResponse.json({ message: 'Unable to create user' }, { status: 500 });
    }
}