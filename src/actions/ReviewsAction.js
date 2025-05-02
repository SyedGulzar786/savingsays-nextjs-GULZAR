"use server"

import {cookies} from "next/headers";
import {decrypt} from "@/src/utils/session";

export async function SubmitReview({storeSlug, title, content, rating}) {

    const cookieKey = `${process.env.APP_NAME.toLowerCase()}_session`;
    const session = (await cookies()).get(cookieKey)?.value;
    const payload = await decrypt(session)

    try {
        const url = `${process.env.API_URL}/stores/${storeSlug}/reviews`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-VENDOR-KEY": process.env.VENDOR_KEY,
                "Authorization": `Bearer ${payload.token}`
            },
            body: JSON.stringify({
                title,
                content,
                rating
            })
        })

        if (!response.ok) {
            throw new Error('An error occurred while submitting review');
        }

        return response.json();
    } catch (e) {
        throw new Error(`An error occurred: ${e}`)
    }
}