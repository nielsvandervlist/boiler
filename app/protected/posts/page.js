// app/protected/page.js
import UserPosts from "@components/Data/UserPosts";

async function fetchPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/posts`, {cache: "no-store"});

    if (!res.ok) {
        console.error("Failed to fetch users:", res.statusText);
        throw new Error('Failed to fetch users');
    }
    return res.json();
}

export default async function Posts() {

    try {
        const posts = await fetchPosts()

        return (
            <div>

                <div className="card bg-base-100 shadow-xl max-w-3xl mx-auto border border-base-300 rounded-xl">
                    <div className="card-body">
                        <UserPosts posts={posts}/>
                    </div>
                </div>

            </div>
        );

    } catch (err) {
        return <div>something went wrong</div>
    }
}