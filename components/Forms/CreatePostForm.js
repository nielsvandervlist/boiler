import {useEffect, useState} from 'react';
import Alert from "@components/Actions/Alert";

export default function CreatePostForm({email}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    console.log(email)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description, email }),
        });

        if (response.ok) {
            const newPost = await response.json();
            setMessage(`Post ${newPost.title} created successfully!`);
            setTitle('');
            setDescription('');
        } else {
            setMessage('Failed to create user.');
        }
    };

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit} className={'flex flex-col gap-4 p-8 rounded-md max-w-lg border-accent border'}>
                <div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">What is your title?</span>
                        </div>
                        <input
                            className={'input input-bordered input-md w-full'}
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">What is your description</span>
                        </div>
                        <input
                            className={'input input-bordered input-md w-full'}
                            type="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                </div>
                <button className={'btn mt-8'} type="submit">Create Post</button>

                {
                    message &&
                    <Alert type={'alert-success'}>Thanks!</Alert>
                }
            </form>
        </div>
    );
}
