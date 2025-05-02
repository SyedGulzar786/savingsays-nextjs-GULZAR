"use server"

export async function GetStores(page, alphabet) {
    try {
        const response = await fetch(`${process.env.API_URL}/stores?page=${page}&alphabet=${alphabet}`, {
            method: 'GET',
            headers: {
                'X-VENDOR-KEY': process.env.VENDOR_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('An error occurred while fetching stores');
        }

        return response.json();
    } catch (e) {
        throw new Error(`An error occurred: ${e}`)
    }
}

export async function GetStoreBySlug(slug) {
    try {
        const response = await fetch(`${process.env.API_URL}/stores/${slug}`, {
            method: 'GET',
            headers: {
                'X-VENDOR-KEY': process.env.VENDOR_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('An error occurred while fetching stores');
        }

        return response.json();
    } catch (e) {
        throw new Error(`An error occurred: ${e}`)
    }
}