import API from "./api";

export const getDestinationsData = async() => {
    const res = await fetch(`${API}/destinations`, {cache: 'no-store'});
    const data = await res.json();
    return data;
}

export const getDestinationById = async(id) => {
    const res = await fetch(`${API}/destination-detail/${id}`, {
        headers: {
            authorization: 'logged-in'
        },
        cache: 'no-store'
    });
    const data = await res.json();
    return data;
}