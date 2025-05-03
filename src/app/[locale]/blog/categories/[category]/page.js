import React from 'react'
import {GetPostsByCategory} from "@/src/actions/BlogAction";
import BlogCategoryPageClient from "./BlogCategoryPageClient";

export default async function CategoryPage(props) {
    const params = await props.params;

    const {data: posts, links, meta} = await GetPostsByCategory(params.category);

    return (
        <BlogCategoryPageClient slug={params.category} posts={posts} links={links} meta={meta}/>
    )
}
