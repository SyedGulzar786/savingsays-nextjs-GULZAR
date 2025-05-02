import 'server-only'
import {SignJWT, jwtVerify} from 'jose'
import {cookies} from 'next/headers'

const secretKey = process.env.SESSION_SECRET;
const cookieKey = `${process.env.APP_NAME.toLowerCase()}_session`;
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload) {
    return new SignJWT(payload)
        .setProtectedHeader({alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey)
}

export async function decrypt(session) {
    try {
        const {payload} = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256'],
        })
        return payload
    } catch (error) {
        console.log('Failed to verify session')
    }
}

export async function createSession(token, expiredAt) {
    // const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const expiresAt = new Date(expiredAt)

    const session = await encrypt({token, expiresAt})
    const cookieStore = await cookies()

    cookieStore.set(cookieKey, session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    })
}

export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete(cookieKey);
}