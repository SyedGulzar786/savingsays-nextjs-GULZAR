import React from 'react';
import {notFound, redirect} from "next/navigation";
import StoreCouponsPageClient from "@/src/app/stores/[slug]/coupons/StoreCouponsPageClient";
import {GetStoreCoupons} from "@/src/actions/CouponsAction";
import {GetStoreBySlug} from "@/src/actions/StoresAction";

export const dynamic = 'force-dynamic'

export async function generateMetadata({params, searchParams}, parent) {
    const slug = (await params).slug;

    const {data: store} = await GetStoreBySlug(slug);

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

export default async function StoreCouponsPageServer(props) {
    const params = await props.params;

    const searchParams = await props.searchParams;
    const page = searchParams?.page || 1;

    const {data: store} = await GetStoreBySlug(params.slug);
    const {data: initialCoupons, meta, links} = await GetStoreCoupons(params.slug, page);

    if (!store) {
        notFound();
    }

    return (
        <StoreCouponsPageClient store={store} initialCoupons={initialCoupons} />
    );
}