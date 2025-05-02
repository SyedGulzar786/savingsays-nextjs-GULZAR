"use server"

export async function GetPopularCategories() {
    try {
        const response = await fetch(`${process.env.API_URL}/popular-categories`, {
            method: 'GET',
            headers: {
                'X-VENDOR-KEY': process.env.VENDOR_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('An error occurred while fetching popular categories');
        }

        return response.json();
    } catch (e) {
        throw new Error(`An error occurred: ${e}`)
    }
}

export async function GetPopularStores() {
    try {
        const response = await fetch(`${process.env.API_URL}/popular-stores`, {
            method: 'GET',
            headers: {
                'X-VENDOR-KEY': process.env.VENDOR_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('An error occurred while fetching popular categories');
        }

        return response.json();
    } catch (e) {
        throw new Error(`An error occurred: ${e}`)
    }
}