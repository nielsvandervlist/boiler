import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/dbConnect';
import Post from '@/models/Post';
import {queryModel} from "@/lib/queryModel";

export async function GET(req) {
    try {
        await connectToDatabase();

        const { searchParams } = new URL(req.url);

        return await queryModel(Post, searchParams);

    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return NextResponse.json({ message: 'Unable to fetch posts' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await connectToDatabase();
        const { title, description, email } = await req.json();

        const newPost = new Post({
            title,
            description,
            email,
        });

        await newPost.save();

        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        console.error('Failed to create user:', error);
        return NextResponse.json({ message: 'Unable to create user' }, { status: 500 });
    }
}