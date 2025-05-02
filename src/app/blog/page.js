import React from 'react';
import BlogPage from "@/src/app/blog/BlogPage";

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }) {
    return {
        alternates: {
            canonical: new URL(process.env.APP_URL)
        },
    }
}

async function getBlogPosts(page) {
    const response = await fetch(`${process.env.API_URL}/blog/posts?page=${page}`, {
        headers: {
            'X-VENDOR-KEY': process.env.VENDOR_KEY,
            'Content-Type': 'application/json'
        }
    });

    return response.json();
}

export default async function BlogPageServer(props) {
    const searchParams = await props.searchParams;

    const page = searchParams?.page || 1;

    const {data: posts, links, meta} = await getBlogPosts(page);

    return (
        <BlogPage posts={posts} links={links} meta={meta}/>
    );
}
