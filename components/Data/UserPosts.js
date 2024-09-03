"use client";

import {useSession} from 'next-auth/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faHeart} from "@fortawesome/free-solid-svg-icons";

export default function UserPosts({posts}) {

    console.log(posts)

    const {data: session, status} = useSession();

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (!session) {
        return <p>You need to sign in to view posts.</p>;
    }

    return <div className="flex flex-col md:flex-row gap-6">
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
        </div>
        <div
            className="flex-1 h-[400px] md:h-auto overflow-y-auto border border-base-300 rounded-lg p-4">
            <div className="space-y-4">
                {posts.map((post, index) => (
                    <div key={index} className="card bg-base-200 border border-base-300 rounded-lg">
                        <div className="card-body p-4">
                            <p className="text-sm mb-2">{post.description}</p>
                            <div
                                className="flex justify-between items-center text-base-content text-opacity-60 text-xs">
                                <div className="flex gap-4">
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faHeart} className="w-4 h-4"/> {11}
                        </span>
                                    <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faComment} className="w-4 h-4"/> {12}
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
}