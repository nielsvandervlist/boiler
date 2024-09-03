import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import Post from '@/models/Post';

export async function GET(req) {
    try {
        await connectToDatabase();
        const posts = await Post.find({});
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return NextResponse.json({ message: 'Unable to fetch posts' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await connectToDatabase();
        const { title, description, userMail } = await req.json();

        const newPost = new Post({
            title,
            description,
            userMail,
        });

        await newPost.save();

        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        console.error('Failed to create user:', error);
        return NextResponse.json({ message: 'Unable to create user' }, { status: 500 });
    }
}