"use server"

import {cookies} from "next/headers";
import {createSession, decrypt} from "@/src/utils/session";

export async function Authenticate({email, password}) {
    try {
        const url = `${process.env.API_URL}/auth/login`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-VENDOR-KEY": process.env.VENDOR_KEY
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        if (!response.ok) {
            throw new Error('An error occurred while submitting review');
        }

        const result = await response.json();

        if(result.error === 0) {
            await createSession(result?.data?.token, result?.data?.expired_at)
        }

        return result;

    } catch (e) {
        throw new Error(`An error occurred: ${e}`)
    }
}

export async function Register({email, password, confirmPassword}) {
    try {
        const url = `${process.env.API_URL}/auth/register`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-VENDOR-KEY": process.env.VENDOR_KEY
            },
            body: JSON.stringify({
                email,
                password,
                'confirm_password': confirmPassword
            })
        })

        if (!response.ok) {
            throw new Error('An error occurred while submitting review');
        }

        const result = await response.json();

        if(result.error === 0) {
            await createSession(result?.data?.token, result?.data?.expired_at)
        }

        return result;

    } catch (e) {
        throw new Error(`An error occurred: ${e}`)
    }
}