import { useState } from 'react';
import Alert from "@components/Actions/Alert";

export default function CreateUserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        });

        if (response.ok) {
            const newUser = await response.json();
            setMessage(`User ${newUser.name} created successfully!`);
            setName('');
            setEmail('');
        } else {
            setMessage('Failed to create user.');
        }
    };

    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit} className={'flex flex-col gap-4 p-8 rounded-md max-w-lg border-accent border'}>
                <div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">What is your name?</span>
                        </div>
                        <input
                            className={'input input-bordered input-md w-full'}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    </label>
                </div>
                <div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">What is your email</span>
                        </div>
                    <input
                        className={'input input-bordered input-md w-full'}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </label>
                </div>
                <button className={'btn mt-8'} type="submit">Create User</button>

                {
                    message &&
                    <Alert type={'alert-success'}>Thanks!</Alert>
                }
            </form>
        </div>
    );
}
