"use server";

import {cookies} from "next/headers";

export async function Signout() {
    const cookieKey = `${process.env.APP_NAME.toLowerCase()}_session`;
    (await cookies()).delete(cookieKey)

    return true;
}