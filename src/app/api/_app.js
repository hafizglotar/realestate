export const fetchListings = async () => {
    const response = await fetch('https://api.rexcrm.com/listings/feed/siteListing?api_key=AYAQALUIAMAPDAMH');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};  