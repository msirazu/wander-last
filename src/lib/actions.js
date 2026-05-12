import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import API from "./api";

export const deleteDestination = async(id) => {
    'use server';
    const res = await fetch(`${API}/destination-detail/${id}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    if (data.deletedCount > 0) {
        redirect('/destinations')
    }
    return data;
}

export const createDestination = async(formData) => {
    'use server';
    const newDestination = Object.fromEntries(formData.entries());
    const res = await fetch(`${API}/destinations`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newDestination)
    });
    const data = await res.json();
    if (data.insertedId) {
        revalidatePath('/destinations')
    }
    return data;
}