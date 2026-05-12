import { redirect } from "next/navigation";

export const deleteDestination = async(id) => {
    'use server';
    const res = await fetch(`https://wander-last-server-fvsu.onrender.com/destination-detail/${id}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    if (data.deletedCount > 0) {
        redirect('/destinations')
    }
    return data;
}