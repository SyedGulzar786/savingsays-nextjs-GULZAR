import React from 'react';
import {notFound, redirect} from "next/navigation";
import CategoryCouponsPage from "@/src/app/categories/[slug]/CategoryCouponsPage";
import {GetCouponsByCategory} from "@/src/actions/CouponsAction";

export const dynamic = 'force-dynamic'

export async function generateMetadata({params}) {
    const slug = (await params).slug;

    const {data: store} = await getCategoryBySlug(slug);

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

async function getCategoryBySlug(slug) {
    const response = await fetch(`${process.env.API_URL}/categories/${slug}`, {
        method: 'GET',
        headers: {
            'X-VENDOR-KEY': process.env.VENDOR_KEY,
            'Content-Type': 'application/json'
        }
    });

    return response.json();
}

export default async function CategoryDetailPageServer(props) {
    const params = await props.params;

    const searchParams = await props.searchParams;
    const page = searchParams?.page || 1;

    const {data: category} = await getCategoryBySlug(params.slug);
    const {data: initialCoupons, meta, links} = await GetCouponsByCategory(params.slug, page);

    if (!category) {
        notFound();
    }

    return (
        <CategoryCouponsPage category={category} initialCoupons={initialCoupons} />
    )
}
