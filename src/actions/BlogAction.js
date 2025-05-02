"use server"

export async function GetPostsByCategory(slug) {
    try {
        const response = await fetch(`${process.env.API_URL}/blog/categories/${slug}`, {
            method: 'GET',
            headers: {
                'X-VENDOR-KEY': process.env.VENDOR_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('An error occurred while fetching posts');
        }

        return response.json();
    } catch (e) {
        throw new Error(`An error occurred: ${e}`)
    }
}

export async function GetPostBySlug(slug) {
    try {
        const response = await fetch(`${process.env.API_URL}/blog/posts/${slug}`, {
            method: 'GET',
            headers: {
                'X-VENDOR-KEY': process.env.VENDOR_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('An error occurred while fetching single post');
        }

        return response.json();
    } catch (e) {
        throw new Error(`An error occurred: ${e}`)
    }
}

export async function GetLatestPosts() {
    try {
        const response = await fetch(`${process.env.API_URL}/blog/posts/latest`, {
            method: 'GET',
            headers: {
                'X-VENDOR-KEY': process.env.VENDOR_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('An error occurred while fetching latest posts');
        }

        return response.json();
    } catch (e) {
        throw new Error(`An error occurred: ${e}`)
    }
}