"use server"

import {cookies, headers} from "next/headers";
import {decrypt} from "@/src/utils/session";

export async function GetCouponsByCategory(slug, page) {
    try {
        const response = await fetch(`${process.env.API_URL}/categories/${slug}/coupons?page=${page}`, {
            method: 'GET',
            headers: {
                'X-VENDOR-KEY': process.env.VENDOR_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('An error occurred while fetching category coupons');
        }

        return response.json();
    } catch (e) {
        throw new Error(`An error occurred: ${e}`)
    }
}

export async function GetDiscountedStoreCoupons(slug, store, page) {
    try {
        const response = await fetch(`${process.env.API_URL}/special-pages/${slug}/${store}/coupons?page=${page}`, {
            method: 'GET',
            headers: {
                'X-VENDOR-KEY': process.env.VENDOR_KEY,
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('An error occurred while fetching store coupons');
        }

        return response.json();
    } catch (error) {
        throw new Error(`An error occurred: ${error}`)
    }
}

export async function GetStoreCoupons(slug, page) {
    try {
        const response = await fetch(`${process.env.API_URL}/stores/${slug}/coupons?page=${page}`, {
            method: 'GET',
            headers: {
                'X-VENDOR-KEY': process.env.VENDOR_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('An error occurred while fetching store coupons');
        }

        return response.json();
    } catch (error) {
        throw new Error(`An error occurred: ${error}`)
    }
}

export async function UpdateCouponUsage(slug, id) {
    try {
        const response = await fetch(`${process.env.API_URL}/stores/${slug}/coupons/${id}/usage`, {
            method: 'PUT',
            headers: {
                'X-VENDOR-KEY': process.env.VENDOR_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('An error occurred while updating coupon usage');
        }

        return response.json();
    } catch (e) {
        throw new Error(`An error occurred: ${e}`)
    }
}

export async function CouponSaves(slug, id, amount) {
    let headerList = await headers();
    let ip = headerList.get('x-real-ip');
    let forwardedFor = headerList.get('x-forwarded-for')
    if (!ip && forwardedFor) {
        ip = forwardedFor.split(',').at(0) ?? 'Unknown'
    }

    try {
        const response = await fetch(`${process.env.API_URL}/stores/${slug}/coupons/${id}/saves`, {
            method: 'POST',
            headers: {
                'X-VENDOR-KEY': process.env.VENDOR_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount,
                ip_address: ip,
            })
        });

        if (!response.ok) {
            throw new Error('An error occurred while updating coupon usage');
        }

        return response.json();
    } catch (e) {
        throw new Error(`An error occurred: ${e}`)
    }
}

export async function SubmitCoupon({storeSlug, offerType, code, affiliateUrl, expiryDate, offerTitle}) {
    try {
        const url = `${process.env.API_URL}/stores/${storeSlug}/coupons`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-VENDOR-KEY": process.env.VENDOR_KEY
            },
            body: JSON.stringify({
                offerType,
                code,
                affiliateUrl,
                expiryDate,
                offerTitle
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