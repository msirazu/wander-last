export const getDestinationsData = async() => {
    const res = await fetch('https://wander-last-server-fvsu.onrender.com/destinations');
    const data = await res.json();
    return data;
}

export const getDestinationById = async(id) => {
    const res = await fetch(`https://wander-last-server-fvsu.onrender.com/destinations/${id}`);
    const data = await res.json();
    return data;
}