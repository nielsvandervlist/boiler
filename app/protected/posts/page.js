// app/protected/page.js
'use client';
import { useSession} from 'next-auth/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faComment, faHeart} from "@fortawesome/free-solid-svg-icons";

export default function Posts() {
    const { data: session } = useSession();

    const user = {
        name: "Alice Johnson",
        username: "@alice_j",
        avatar: "/placeholder.svg?height=100&width=100",
        bio: "Tech enthusiast | Coffee lover | Always learning",
    }

    const posts = [
        {
            id: 1,
            content: "Just finished a great book on AI. Highly recommend!",
            likes: 42,
            comments: 7,
            date: "2h ago",
        },
        {
            id: 2,
            content: "Working on a new project. Can't wait to share it with you all!",
            likes: 31,
            comments: 5,
            date: "1d ago",
        },
        {
            id: 3,
            content: "Beautiful sunset today. Nature never fails to amaze me.",
            likes: 56,
            comments: 12,
            date: "3d ago",
        },
        {
            id: 4,
            content: "Attended an inspiring tech conference. So many new ideas!",
            likes: 89,
            comments: 23,
            date: "1w ago",
        },
    ]

    if (!session) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Posts</h1>
            <p>Posts from {session.user?.name}!</p>

            <div className="card bg-base-100 shadow-xl max-w-3xl mx-auto border border-base-300 rounded-xl">
                <div className="card-body">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={session.user.image} alt={session.user.name}/>
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl font-bold">{session.user.name}</h2>
                                <p className="text-base-content text-opacity-60">{session.user.email}</p>
                            </div>
                            <p className="text-sm text-center md:text-left max-w-[200px]">{user.bio}</p>
                        </div>
                        <div
                            className="flex-1 h-[400px] md:h-auto overflow-y-auto border border-base-300 rounded-lg p-4">
                            <div className="space-y-4">
                                {posts.map((post) => (
                                    <div key={post.id} className="card bg-base-200 border border-base-300 rounded-lg">
                                        <div className="card-body p-4">
                                            <p className="text-sm mb-2">{post.content}</p>
                                            <div
                                                className="flex justify-between items-center text-base-content text-opacity-60 text-xs">
                                                <div className="flex gap-4">
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faHeart} className="w-4 h-4"/> {post.likes}
                        </span>
                                                    <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faComment} className="w-4 h-4"/> {post.comments}
                        </span>
                                                </div>
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}