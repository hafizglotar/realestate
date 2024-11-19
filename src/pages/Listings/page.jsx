import { useQuery } from '@tanstack/react-query';
import { fetchListings } from '../api/api';

export default function Listings() {
    const { data, error, isLoading, isError } = useQuery(['listings'], fetchListings);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Listings</h1>
            <ul>
                {data.listings.map((listing) => (
                <li key={listing.id}>
                    <h2>{listing.title}</h2>
                    <p>{listing.description}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}