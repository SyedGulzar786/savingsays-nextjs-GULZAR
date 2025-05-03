import React from 'react';
import {notFound} from "next/navigation";
import DiscountStoreDetailPage from "@/src/app/discounts/[slug]/[store]/DiscountStoreDetailPage";
import {GetDiscountedStoreCoupons} from "@/src/actions/CouponsAction";

export const dynamic = 'force-dynamic'

export async function generateMetadata({params}) {
    const slug = (await params).slug;
    const store = (await params).store;

    const {data: discountStore} = await getDiscountedStoreBySlug(slug, store);

    const seo = discountStore?.seo;

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

async function getDiscountedStoreBySlug(slug, store) {
    const response = await fetch(`${process.env.API_URL}/special-pages/${slug}/${store}`, {
        method: 'GET',
        headers: {
            'X-VENDOR-KEY': process.env.VENDOR_KEY,
            'Content-Type': 'application/json',
        }
    });

    return response.json();
}

export default async function DiscountStorePageServer (props) {
    const params = await props.params;

    const searchParams = await props.searchParams;
    const page = searchParams?.page || 1;

    const {data: store} = await getDiscountedStoreBySlug(params?.slug, params?.store);
    const {data: initialCoupons, meta, links} = await GetDiscountedStoreCoupons(params?.slug, params?.store, page);

    if (!store || !initialCoupons) {
        notFound();
    }

    return (
        <DiscountStoreDetailPage store={store} initialCoupons={initialCoupons} />
    )
}
