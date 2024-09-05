'use client'
import { useState } from 'react';

export default function ConnectStripe() {
    const [loading, setLoading] = useState(false);

    const handleConnect = async () => {
        setLoading(true);

        try {
            const response = await fetch('/api/stripe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to connect to Stripe');
            }

            const data = await response.json();
            window.location.href = data.url;
        } catch (error) {
            console.error('Error connecting to Stripe:', error);
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Connect your account to Stripe</h1>
            <button onClick={handleConnect} disabled={loading}>
                {loading ? 'Connecting...' : 'Connect with Stripe'}
            </button>
        </div>
    );
}
