"use client"; // Ensure this is a Client Component
import { isValid, format } from "date-fns";
import Header from "@/src/components/Header/Header";
import Link from "next/link";
import PopularCategories from "@/src/components/PopularCategories/PopularCategories";
import Footer from "@/src/components/Footer/Footer";
import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import { useRouter } from "next/navigation";
import "./blogPage.css"

export default function BlogPage({ posts, links, meta }) {

    console.log(posts, "posts");

    const router = useRouter();

    const firstPost = posts[0];
    const latestPosts = posts.slice(1);
    const lastPost = posts[posts.length - 1];

    const pagination = meta?.links?.slice(1, -1);

    const handlePaginationChange = (page) => {
        router.push(`/blog?page=${page}`)
    };
    return (
        // <>
        //     <div className='container'>
        //         <h1 className="my-4">Blog Listing</h1>
        //         <div className='row'>
        //             <div className='col-md-9'>
        //                 {/* Display the latest post prominently */}
        //                 <div className='card card-blog mb-4'>
        //                     <div className='card-body'>
        //                         <div className='card-title'>
        //                             <img src={firstPost?.media?.thumb} alt={firstPost?.title}
        //                                  className="img-fluid mb-4 w-50"/>
        //                             <Link href={`/blog/${firstPost?.slug}`}>
        //                                 <h2 className="blog-title">{firstPost?.title}</h2>
        //                             </Link>
        //                         </div>
        //                         <div className='card-text'>{firstPost?.excerpt}</div>
        //                         <Link href={`/blog/${firstPost?.slug}`} className="btn btn-primary">Read More</Link>
        //                     </div>
        //                 </div>

        //                 {/* Display subsequent posts */}
        //                 <div className='row'>
        //                     {latestPosts.map((post) => (
        //                         <div key={post.id} className="mb-4 col-md-6">
        //                             <div className='card card-blog mb-4'>
        //                                 <div className='card-body'>
        //                                     <div className='card-title'>
        //                                         <Link href={`/blog/${post.slug}`}>
        //                                             {post.title}
        //                                         </Link>
        //                                     </div>
        //                                     <div className='card-text'>{post?.excerpt}</div>
        //                                     <Link href={`/blog/${post.slug}`} className="btn btn-primary">Read
        //                                         More</Link>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </div>

        //             <div className="col-md-3">
        //                 {/* Sidebar content */}
        //                 <div className="sidebar-blog">
        //                     <h2>Trending</h2>
        //                     <ul className="list-unstyled">
        //                         {latestPosts.map((post) => (
        //                             <li key={post.id}>
        //                                 <Link href={`/blog/${post.slug}`}>
        //                                     {post.title}
        //                                 </Link>
        //                             </li>
        //                         ))}
        //                     </ul>
        //                 </div>

        //                 <img
        //                     src="https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80"
        //                     alt="Promotional" className="img-fluid my-3"/>
        //                 <div className="Subscriber">
        //                     <form>
        //                         <h2>Subscribe to our Newsletter</h2>
        //                         <div className="mb-2">

        //                             <input type="email" className="form-control" id="email"
        //                                    placeholder="Enter your email"/>
        //                         </div>
        //                         <button type="submit" className="btn btn-primary">Subscribe</button>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Pagination */}
        //         <div className="pagination mt-4 flex gap-2">
        //             {meta?.last_page > 1 &&
        //                 <Pagination>
        //                     {meta?.current_page === meta?.from ?
        //                         <Pagination.Prev disabled/>
        //                         :
        //                         <Pagination.Prev href={`/blog?page=${meta?.current_page - 1}`}/>
        //                     }
        //                     {pagination.map((link, i) => (
        //                         link?.active ?
        //                             <Pagination.Item active key={i}>
        //                                 <div dangerouslySetInnerHTML={{__html: link?.label}}></div>
        //                             </Pagination.Item>
        //                             :
        //                             <Pagination.Item
        //                                 onClick={(e) => handlePaginationChange(link?.label)}
        //                                 key={i}>
        //                                 <div dangerouslySetInnerHTML={{__html: link?.label}}></div>
        //                             </Pagination.Item>
        //                     ))}
        //                     {meta?.current_page < meta?.last_page ?
        //                         <Pagination.Next href={`/blog?page=${meta?.current_page + 1}`}/>
        //                         :
        //                         <Pagination.Next disabled/>
        //                     }
        //                 </Pagination>
        //             }
        //             {/*{meta?.links && meta?.links.map((link) => (*/}
        //             {/*   <div>{link?.url}</div>*/}
        //             {/*))}*/}
        //             {/*<button*/}
        //             {/*    onClick={() => setCurrentPage(currentPage - 1)}*/}
        //             {/*    disabled={currentPage === 1}*/}
        //             {/*>*/}
        //             {/*    Previous*/}
        //             {/*</button>*/}
        //             {/*<span> Page {currentPage} of {totalPages} </span>*/}
        //             {/*<button*/}
        //             {/*    onClick={() => setCurrentPage(currentPage + 1)}*/}
        //             {/*    disabled={currentPage === totalPages}*/}
        //             {/*>*/}
        //             {/*    Next*/}
        //             {/*</button>*/}
        //         </div>
        //     </div>

        //     <PopularCategories/>
        // </>
        <div>
            <section className="categories mt-4">
                <div className="container d-flex align-items-center flex-wrap">
                    <div className="category" onClick={() => setActive(this)}>Home & Living</div>
                    <div className="category" onClick={() => setActive(this)}>Fashion & Apparel</div>
                    <div className="category" onClick={() => setActive(this)}>Electronics & Gadgets</div>
                    <div className="category" onClick={() => setActive(this)}>Travel & Hotels</div>
                    <div className="category" onClick={() => setActive(this)}>Food & Restaurants</div>
                    <div className="category active" onClick={() => setActive(this)}>Health & Beauty</div>

                </div>
            </section>
            {/* <!-- CATEGORY-END --> */}
            <div className="container typography my-5">
                <div className="smart-tips row">
                    <div className="typo col-lg-10">
                        <h2 className="gradient-font">Smart Shopping Tips & Exclusive Savings Hacks</h2>
                        <p className="color-ex">Stay ahead of the game with expert guides, insider deals, and money-saving tips!</p>
                    </div>
                    <div className="d-flex justify-content-end col-lg-2">
                        <div className="dropdown border-0 mt-1">
                            <button className="btn all-rating dropdown-toggle bg-ex color-ex-2" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <img className="mx-1" src="/assets/blog-page/Vector.svg" alt="" /> Sort By
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- TYPO-END --> */}
            <section>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-md-4 col-sm-12 mb-3">
                            <div className="Beauty-card">
                                {/* <img src="/assets/blog-page/image (2).svg" alt=""/> */}
                                <img
                                    src={firstPost?.media?.thumb ?? "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"}
                                    srcSet={firstPost?.media?.srcSet}
                                    alt={firstPost?.title}
                                    className="img-fluid beauty-card-img rounded-5 mb-3"
                                />
                                <div className="top-div">
                                    Health &amp; Beauty
                                </div>

                                <div className="card-content">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="blog-date poppins-medium fs-15">
                                            📆 Published:
                                            {isValid(new Date(firstPost?.publishedAt)) ? format(new Date(firstPost.publishedAt), 'MMMM dd, yyyy') : 'Date not available'}

                                        </div>
                                        <div className="blog-author-name">
                                            <Link className="text-decoration-none poppins-medium fs-15 text-black" href={`/authors/${firstPost?.author?.slug}`}>{firstPost?.author?.name}</Link>
                                        </div>
                                    </div>
                                    <a href="#" className="self-care-box d-flex align-items-start gap-2">
                                        <p className="content-para">
                                            <Link className="text-decoration-none poppins-medium fs-18 text-black" href={`/blog/${firstPost?.slug}`}>
                                                {firstPost?.title}
                                            </Link>
                                        </p>
                                        {/* <p className="content-para">Treat Your Skin With 9 Best Self-Care Subscription Boxes</p> */}
                                        <Link href={`/blog/${firstPost?.slug}`}>
                                            <img className="right-up" src="/assets/blog-page/right-up.png" alt="" />
                                        </Link>
                                    </a>
                                </div>
                            </div>

                        </div>
                        {/* <div className="col-md-4 col-sm-12 mb-3">
                            <div className="Beauty-card">
                                <img src="/assets/blog-page/image (2).svg" alt="" />
                                <div className="top-div">
                                    Health &amp; Beauty
                                </div>
                                <div className="card-content">
                                    <a href="#" className="self-care-box">
                                        <p className="content-para pt-3">Treat Your Skin With 9 Best Self-Care Subscription Boxes</p>
                                        <img className="right-up" src="/assets/blog-page/right-up.png" alt="" />
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-12 mb-3">
                            <div className="Beauty-card">
                                <img src="/assets/blog-page/image (2).svg" alt="" />
                                <div className="top-div">
                                    Health &amp; Beauty
                                </div>
                                <div className="card-content">
                                    <a href="#" className="self-care-box">
                                        <p className="content-para pt-3">Treat Your Skin With 9 Best Self-Care Subscription Boxes</p>
                                        <img className="right-up" src="/assets/blog-page/right-up.png" alt="" />
                                    </a>
                                </div>
                            </div>

                        </div> */}

                        {console.log(latestPosts)}

                        {latestPosts.map((post) => (



                            <div key={post.id} className="col-md-4 col-sm-12 mb-3">
                                <div className="Beauty-card">
                                    {/* <img src="/assets/blog-page/image (2).svg" alt=""/> */}
                                    <img
                                        src={post?.media?.thumb ?? "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"}
                                        srcSet={post?.media?.srcSet}
                                        alt={post?.title}
                                        className="img-fluid beauty-card-img rounded-5 mb-3"
                                    />
                                    <div className="top-div">
                                        Health &amp; Beauty
                                    </div>

                                    <div className="card-content">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <div className="blog-date poppins-medium fs-15">
                                                📆 Published: {isValid(new Date(post?.publishedAt)) ? format(new Date(post.publishedAt), 'MMMM dd, yyyy') : 'Date not available'}
                                            </div>
                                            <div className="blog-author-name">
                                                <Link className="text-decoration-none poppins-medium fs-15 text-black" href={`/authors/${post?.author?.slug}`}>
                                                    {post?.author?.name}
                                                </Link>
                                            </div>
                                        </div>
                                        
                                        <a href="#" className="self-care-box d-flex align-items-start gap-2">
                                            <p className="content-para">
                                                <Link className="text-decoration-none poppins-medium fs-18 text-black" href={`/blog/${post.slug}`}>{post.title}</Link>
                                            </p>
                                            {/* <p className="content-para">Treat Your Skin With 9 Best Self-Care Subscription Boxes</p> */}
                                            <Link href={`/blog/${post?.slug}`}>
                                                <img className="right-up" src="/assets/blog-page/right-up.png" alt="" />
                                            </Link>
                                        </a>

                                        {/* <a href="#" className="self-care-box d-flex align-items-start gap-2">
                                            <p className="content-para">
                                                <Link className="text-decoration-none poppins-medium fs-18 text-black" href={`/blog/${firstPost?.slug}`}>
                                                    {firstPost?.title}
                                                </Link>
                                            </p> */}
                                            {/* <p className="content-para">Treat Your Skin With 9 Best Self-Care Subscription Boxes</p> */}
                                            {/* <Link href={`/blog/${firstPost?.slug}`}>
                                                <img className="right-up" src="/assets/blog-page/right-up.png" alt="" />
                                            </Link>
                                        </a> */}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                    {/* <div className="row mt-4">
                        <div className="col-md-4 col-sm-12">
                            <div className="Beauty-card">
                                <img src="/assets/blog-page/image (2).svg" alt="" />
                                <div className="top-div">
                                    Health &amp; Beauty
                                </div>
                                <div className="card-content">
                                    <a href="#" className="self-care-box">
                                        <p className="content-para pt-3">Treat Your Skin With 9 Best Self-Care Subscription Boxes</p>
                                        <img className="right-up" src="/assets/blog-page/right-up.png" alt="" />
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="Beauty-card">
                                <img src="/assets/blog-page/image (2).svg" alt="" />
                                <div className="top-div">
                                    Health &amp; Beauty
                                </div>
                                <div className="card-content">
                                    <a href="#" className="self-care-box">
                                        <p className="content-para pt-3">Treat Your Skin With 9 Best Self-Care Subscription Boxes</p>
                                        <img className="right-up" src="/assets/blog-page/right-up.png" alt="" />
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="Beauty-card">
                                <img src="/assets/blog-page/image (2).svg" alt="" />
                                <div className="top-div">
                                    Health &amp; Beauty
                                </div>
                                <div className="card-content">
                                    <a href="#" className="self-care-box">
                                        <p className="content-para pt-3">Treat Your Skin With 9 Best Self-Care Subscription Boxes</p>
                                        <img className="right-up" src="/assets/blog-page/right-up.png" alt="" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-4 col-sm-12">
                            <div className="Beauty-card">
                                <img src="/assets/blog-page/image (2).svg" alt="" />
                                <div className="top-div">
                                    Health &amp; Beauty
                                </div>
                                <div className="card-content">
                                    <a href="#" className="self-care-box">
                                        <p className="content-para pt-3">Treat Your Skin With 9 Best Self-Care Subscription Boxes</p>
                                        <img className="right-up" src="/assets/blog-page/right-up.png" alt="" />
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="Beauty-card">
                                <img src="/assets/blog-page/image (2).svg" alt="" />
                                <div className="top-div">
                                    Health &amp; Beauty
                                </div>
                                <div className="card-content">
                                    <a href="#" className="self-care-box">
                                        <p className="content-para pt-3">Treat Your Skin With 9 Best Self-Care Subscription Boxes</p>
                                        <img className="right-up" src="/assets/blog-page/right-up.png" alt="" />
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="Beauty-card">
                                <img src="/assets/blog-page/image (2).svg" alt="" />
                                <div className="top-div">
                                    Health &amp; Beauty
                                </div>
                                <div className="card-content">
                                    <a href="#" className="self-care-box">
                                        <p className="content-para pt-3">Treat Your Skin With 9 Best Self-Care Subscription Boxes</p>
                                        <img className="right-up" src="/assets/blog-page/right-up.png" alt="" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div> */}
                    <div className="d-flex mt-4 mb-5 justify-content-center">
                        <button className="load-more border-0 py-2 px-4 rounded-5 ">Load More</button>
                    </div>
                </div>
            </section>
            {/* <!-- BEAUTY-CARD-END --> */}
        </div>
    );
}
