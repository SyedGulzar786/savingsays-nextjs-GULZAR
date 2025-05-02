import React from 'react'
import PostDetailPage from "./PostDetailPage";
import {notFound} from "next/navigation";
import {GetLatestPosts, GetPostBySlug} from "@/src/actions/BlogAction";

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }) {
    const slug = (await params).slug;

    const {data: post} = await getPostBySlug(slug);

    const seo = post?.seo;

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

async function getPostBySlug(slug) {
    const response = await fetch(`${process.env.API_URL}/blog/posts/${slug}`, {
        method: 'GET',
        headers: {
            'X-VENDOR-KEY': process.env.VENDOR_KEY,
            'Content-Type': 'application/json'
        }
    });

    return response.json();
}

export default async function BlogDetailPage(props) {
    const params = await props.params;

    const { data: post } = await getPostBySlug(params.slug);
    const {data: latestArticles} = await GetLatestPosts();
    
    if(!post) {
        notFound()
    }

    return (
        <PostDetailPage post={post} latestArticles={latestArticles}/>
    )
}
