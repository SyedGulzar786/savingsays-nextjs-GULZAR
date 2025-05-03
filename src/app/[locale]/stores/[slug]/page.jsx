import {notFound, redirect} from "next/navigation";
import StoreReviewPageClient from "@/src/app/stores/[slug]/StoreReviewPageClient";
import {GetStoreBySlug} from "@/src/actions/StoresAction";

export const dynamic = 'force-dynamic'

export async function generateMetadata({params}) {
    const slug = (await params).slug;

    const {data: store} = await GetStoreBySlug(slug);

    const seo = store?.seo;

    return {
        metadataBase: new URL(process.env.APP_URL),
        title: (seo?.title) ? seo?.title + " Reviews" : "Reviews",
        description: seo?.description,
        robots: seo?.robots,
        alternates: {
            canonical: new URL(process.env.APP_URL)
        },
    }
}

export default async function StoreDetailPageServer(props) {
    const params = await props.params;

    const {data: store} = await GetStoreBySlug(params.slug);

    if (!store) {
        notFound();
    }

    return (
        <StoreReviewPageClient store={store}/>
    )
}