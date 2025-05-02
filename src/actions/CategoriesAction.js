"use server"

export async function GetAllCategories() {
    try {
        const response = await fetch(`${process.env.API_URL}/categories`, {
            method: 'GET',
            headers: {
                'X-VENDOR-KEY': process.env.VENDOR_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('An error occurred while fetching categories');
        }

        return response.json();
    } catch (e) {
        throw new Error(`An error occurred: ${e}`)
    }
}