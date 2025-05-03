"use client";

import Header from "@/src/components/Header/Header";
import Link from "next/link";
import PopularCategories from "@/src/components/PopularCategories/PopularCategories";
import Footer from "@/src/components/Footer/Footer";
import React, {useState} from "react";
import {Pagination} from "react-bootstrap";
import {useRouter} from "next/navigation";

export default function BlogCategoryPageClient({slug, posts, links, meta}) {

    const router = useRouter();

    // console.log(links,meta)
    // return;
    // const [currentPage, setCurrentPage] = useState(1);
    // const postsPerPage = 10;
    //
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    // const totalPages = Math.ceil(posts.length / postsPerPage);

    const firstPost = posts[0];
    const latestPosts = posts.slice(1);
    const lastPost = posts[posts.length - 1];

    // let pagination = meta?.links?.slice(1);
    // pagination = meta?.links[meta?.links.length - 1];
    const pagination = meta?.links?.slice(1, -1);


    //
    // const getExcerpt = (content, length = 100) => {
    //     const text = content.replace(/<[^>]+>/g, ''); // Remove HTML tags
    //     return text.length > length ? text.substring(0, length) + '...' : text;
    // };
    //
    // // Get the last 5 updated posts for the trending section
    // const trendingPosts = posts.slice(-5).reverse(); // Adjust based on your data structure

    const handlePaginationChange = (page) => {
        router.push(`/blog/categories/${slug}?page=${page}`)
    };
    return (
        <>
            <div className='container'>
                <h1 className="my-4">Category</h1>
                <div className='row'>
                    <div className='col-md-9'>
                        {/* Display the latest post prominently */}
                        <div className='card card-blog mb-4'>
                            <div className='card-body'>
                                <div className='card-title'>
                                    <img src={firstPost?.media?.thumb} alt={firstPost?.title}
                                         className="img-fluid mb-4 w-50"/>
                                    <Link href={`/blog/${firstPost?.slug}`}>
                                        <h2 className="blog-title">{firstPost?.title}</h2>
                                    </Link>
                                </div>
                                <div className='card-text'>{firstPost?.excerpt}</div>
                                <Link href={`/blog/${firstPost?.slug}`} className="btn btn-primary">Read More</Link>
                            </div>
                        </div>

                        {/* Display subsequent posts */}
                        <div className='row'>
                            {latestPosts.map((post) => (
                                <div key={post.id} className="mb-4 col-md-6">
                                    <div className='card card-blog mb-4'>
                                        <div className='card-body'>
                                            <div className='card-title'>
                                                <Link href={`/blog/${post.slug}`}>
                                                    {post.title}
                                                </Link>
                                            </div>
                                            <div className='card-text'>{post?.excerpt}</div>
                                            <Link href={`/blog/${post.slug}`} className="btn btn-primary">Read
                                                More</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-3">
                        {/* Sidebar content */}
                        <div className="sidebar-blog">
                            <h2>Trending</h2>
                            <ul className="list-unstyled">
                                {latestPosts.map((post) => (
                                    <li key={post.id}>
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <img
                            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80"
                            alt="Promotional" className="img-fluid my-3"/>
                        <div className="Subscriber">
                            <form>
                                <h2>Subscribe to our Newsletter</h2>
                                <div className="mb-2">

                                    <input type="email" className="form-control" id="email"
                                           placeholder="Enter your email"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="pagination mt-4 flex gap-2">
                    {meta?.last_page > 1 &&
                        <Pagination>
                            {meta?.current_page === meta?.from ?
                                <Pagination.Prev disabled/>
                                :
                                <Pagination.Prev href={`/blog?page=${meta?.current_page - 1}`}/>
                            }
                            {pagination.map((link, i) => (
                                link?.active ?
                                    <Pagination.Item active key={i}>
                                        <div dangerouslySetInnerHTML={{__html: link?.label}}></div>
                                    </Pagination.Item>
                                    :
                                    <Pagination.Item
                                        onClick={(e) => handlePaginationChange(link?.label)}
                                        key={i}>
                                        <div dangerouslySetInnerHTML={{__html: link?.label}}></div>
                                    </Pagination.Item>
                            ))}
                            {meta?.current_page < meta?.last_page ?
                                <Pagination.Next href={`/blog?page=${meta?.current_page + 1}`}/>
                                :
                                <Pagination.Next disabled/>
                            }
                        </Pagination>
                    }
                    {/*{meta?.links && meta?.links.map((link) => (*/}
                    {/*   <div>{link?.url}</div>*/}
                    {/*))}*/}
                    {/*<button*/}
                    {/*    onClick={() => setCurrentPage(currentPage - 1)}*/}
                    {/*    disabled={currentPage === 1}*/}
                    {/*>*/}
                    {/*    Previous*/}
                    {/*</button>*/}
                    {/*<span> Page {currentPage} of {totalPages} </span>*/}
                    {/*<button*/}
                    {/*    onClick={() => setCurrentPage(currentPage + 1)}*/}
                    {/*    disabled={currentPage === totalPages}*/}
                    {/*>*/}
                    {/*    Next*/}
                    {/*</button>*/}
                </div>
            </div>

            <PopularCategories/>
        </>
    );
}
