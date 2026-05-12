export const getDestinationsData = async() => {
    const res = await fetch('https://wander-last-server-fvsu.onrender.com/destinations', {cache: 'no-store'});
    const data = await res.json();
    return data;
}

export const getDestinationById = async(id) => {
    const res = await fetch(`https://wander-last-server-fvsu.onrender.com/destination-detail/${id}`, {cache: 'no-store'});
    const data = await res.json();
    return data;
}