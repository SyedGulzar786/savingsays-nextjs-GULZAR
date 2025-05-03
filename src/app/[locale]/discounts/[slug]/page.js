import React from 'react';
import {notFound} from "next/navigation";
import DiscountDetailPage from "@/src/app/discounts/[slug]/DiscountDetailPage";

export const dynamic = 'force-dynamic'

export async function generateMetadata({params}) {
    const slug = (await params).slug;

    const {data: store} = await getDiscountBySlug(slug);

    const seo = store?.seo;

    return {
        metadataBase: new URL(process.env.APP_URL),
        title: seo?.title,
        description: seo?.description,
        robots: seo?.robots,
        alternates: {
            canonical: new URL(process.env.APP_URL)
        },
    }
}

async function getDiscountBySlug(slug) {
    const response = await fetch(`${process.env.API_URL}/special-pages/${slug}`, {
        method: 'GET',
        headers: {
            'X-VENDOR-KEY': process.env.VENDOR_KEY,
            'Content-Type': 'application/json',
        },
        next: {
            revalidate: 5
        }
    });

    return response.json();
}

export default async function DiscountPageServer(props) {
    const params = await props.params;

    const {data: discount} = await getDiscountBySlug(params?.slug);

    if (!discount) {
        notFound();
    }

    return (
        <DiscountDetailPage discount={discount}/>
    )
}
