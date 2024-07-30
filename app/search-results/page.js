'use client'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

async function fetchSearchResults(query) {
    const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`, { cache: 'no-store' });

    if (!res.ok) {
        console.error('Failed to fetch search results:', res.statusText);
        throw new Error('Failed to fetch search results');
    }
    return res.json();
}

export default function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (query) {
            fetchSearchResults(query)
                .then(data => {
                    setResults(data);
                    setLoading(false);
                })
                .catch(err => {
                    setError(err.message);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [query]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Search Results for "{query}"</h1>
            {results.length > 0 ? (
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>
                            <p>Name: {result.name}</p>
                            <p>Email: {result.email}</p>
                            {/* Render other fields as needed */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
}
