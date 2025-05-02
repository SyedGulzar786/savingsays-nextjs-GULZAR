"use client"

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import Coupons from "@/src/components/Coupons";
import { GetStoreCoupons } from "@/src/actions/CouponsAction";
import FAQs from "@/src/components/Faq/FAQs";
import "./postDetailPage.css"
export default function PostDetailPage({ post, latestArticles = [] }) {
  const [visibleCount, setVisibleCount] = useState(2);
  const [loading, setLoading] = useState(false);
  const [tableOfContents, setTableOfContents] = useState([]);
  const coupons = post?.coupons || [];

  useEffect(() => {
    if (post?.content) {
      setTimeout(() => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content, "text/html");
        const headings = Array.from(doc.querySelectorAll("h2, h3"));
        const toc = headings.map((heading) => {
          const id = heading.id || heading.textContent.replace(/\s+/g, "-").toLowerCase();
          heading.id = id;
          return { id, text: heading.textContent, level: heading.tagName };
        });
        setTableOfContents(toc);
      }, 500);
    }
  }, [post?.content]);

  const loadMoreCoupons = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  return (
    // <div className="container-fluid custom-width-post" style={{paddingTop: '30px', paddingBottom: '30px'}}>
    //     <div className="row">
    //         <div className="col-md-3">
    //             <div className="sidebar-blog">
    //                 <h2>Table Of Contents</h2>
    //                 <ul className="list-unstyled">
    //                     {tableOfContents.map((item, index) => (
    //                         <li key={index} style={{marginLeft: item.level === "H3" ? "10px" : "0px"}}>
    //                             <a href={`#${item.id}`} onClick={(e) => {
    //                                 e.preventDefault();
    //                                 document.getElementById(item.id)?.scrollIntoView({behavior: 'smooth'});
    //                             }}>{item.text}</a>
    //                         </li>
    //                     ))}
    //                 </ul>
    //             </div>
    //         </div>
    //         <div className="col-md-6">
    //             <h1 className="mb-2">{post?.title}</h1>
    //             <div className="post-meta d-flex gap-2 mb-4 text-secondary">
    //                 <span
    //                     className="date">Published on {format(new Date(post?.published_at), 'MMMM dd, yyyy')}</span>
    //                 |
    //                 <span className="author">
    //                     By <Link href={`/authors/${post?.author?.slug}`}>{post?.author?.name}</Link>
    //                 </span>
    //                 |
    //                 <span className="categories">
    //                     {post?.categories?.map((category) => (
    //                         <div>{category?.name}</div>
    //                     ))}
    //                 </span>
    //             </div>
    //             {post?.media?.original &&
    //                 <img src={post?.media?.original} alt={post?.title} className="img-fluid mb-4"
    //                      srcSet={post?.media?.srcSet}/>
    //             }
    //             <div className="entry-content mb-5" dangerouslySetInnerHTML={{__html: post?.content}}></div>

    //             <Coupons
    //                 hasMoreCoupons={visibleCount < coupons.length}
    //                 loadMoreCoupons={loadMoreCoupons}
    //                 coupons={coupons.slice(0, visibleCount)}
    //                 type="post"
    //                 loading={loading}
    //             />

    //             <div className="entry-content mb-5" dangerouslySetInnerHTML={{__html: post?.content}}></div>

    //             <FAQs/>
    //         </div>
    //         <div className="col-md-3">
    //             <div className="sidebar-blog">
    //                 <h2>Latest Articles</h2>
    //                 <ul className="list-unstyled latest-articles">
    //                     {latestArticles.length > 0 ? (
    //                         latestArticles.map((article, index) => (
    //                             <li key={index} className="d-flex align-items-center gap-3 mb-3">
    //                                 <span className="article-rank">{index + 1}</span>
    //                                 <img src={article.image} alt={article.title} className="article-thumbnail"/>
    //                                 <div>
    //                                     <Link href={article.link} className="article-title">
    //                                         {article.title}
    //                                     </Link>
    //                                     <p className="article-date">{article.date}</p>
    //                                 </div>
    //                             </li>
    //                         ))
    //                     ) : (
    //                         <p>No articles available</p>
    //                     )}
    //                 </ul>
    //             </div>
    //             <div className="banner my-3"><img
    //                 src="https://preview.redd.it/highest-score-in-ipl-history-v0-rm322stvewqc1.png?width=640&crop=smart&auto=webp&s=afb9e6727b6cfeb991ca993810a67af52e3e2d72"/>
    //             </div>
    //             <div className="banner my-3"><img
    //                 src="https://preview.redd.it/highest-score-in-ipl-history-v0-rm322stvewqc1.png?width=640&crop=smart&auto=webp&s=afb9e6727b6cfeb991ca993810a67af52e3e2d72"/>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div>
      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-sm-12">
              <div className="main-sec">
                {/* <img className="w-100" src="/assets/blog-inner-page/image.png" alt="" /> */}
                {post?.media?.original &&
                  <img src={post?.media?.original} alt={post?.title} className="img-fluid w-100 rounded-5 innerblog-main-img"
                    srcSet={post?.media?.srcSet} />
                }
                <div className="main-info d-flex justify-content-between mt-3">
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <img src="/assets/blog-inner-page/hugeicons_date-time (1).svg" alt="" />
                    {/* <span className="main-span">Published: April 12, 2025</span> */}
                    <span className="main-span">Published on {format(new Date(post?.publishedAt), 'MMMM dd, yyyy')}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <img src="/assets/blog-inner-page/hugeicons_coupon-percent.svg" alt="" />
                    {/* <span className="main-span">Category: Shopping Tips</span> */}
                    <span className="main-span">
                      {post?.categories?.map((category, index) => (
                        <div key={index}>{category?.name}</div>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
              <div className="main-content">
                <h2 className="pt-3">{post?.title}</h2>
                <h6 className="py-1">Stop overpaying! Learn how to use promo codes, cashback, and price tracking tools to save big.</h6>
                <p className="py-1" dangerouslySetInnerHTML={{ __html: post?.content }}></p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3">
              <p className="side-heading">Related Blogs</p>
              <ul className="list-unstyled latest-articles">
                {console.log(latestArticles, "articles")}
                {latestArticles.length > 0 ? (
                  latestArticles.map((article, index) => (
                    <li key={index} className="d-flex flex-column gap-3 mb-5">
                      {/* {console.log(latestArticles.article, "articlegggg", post.categories, "post-categories")}   */}

                      <div className="Beauty-card">
                        <img
                        src={article?.media?.thumb ?? "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"}
                        srcSet={article?.media?.srcSet} alt={article?.title}
                        //  src={article?.media?.thumb} alt={article.title} className="rounded-5 b-inner-sbar-img mb-2" 
                        />
                        <div className="top-div d-flex justify-content-center align-items-center">
                          <span> {post?.categories?.map((category, index) => (<div key={index}>{category?.name}</div>))}</span>
                        </div>
                        <div className="card-content">
                          {/* <p className="article-date mb-0 fs-15 poppins-medium mt-3"> 📆 Published: {format(new Date(article?.publishedAt), 'MMMM dd, yyyy')}</p> */}
                          <Link href={article?.url} className="article-title self-care-box fs-6 poppins-semibold mt-2  px-2 text-decoration-none text-dark">
                            {article.title}
                            <img className="right-up" src="/assets/blog-page/right-up.png" alt="" />
                          </Link>
                          <div className='card-text'>{article?.excerpt}</div>
                        </div>
                      </div>

                    </li>
                  ))
                ) : (
                  <p>No articles available</p>
                )}  

              </ul>

                   
              {/* <div className="Beauty-card">
                <img src="/assets/blog-inner-page/c21d594dbc3dbd63a14ea28c3cc808eb.png" className="rounded-5" alt="" />
                <div className="top-div d-flex justify-content-center align-items-center">
                  <span>Electronics</span>
                </div>
                <div className="card-content">
                  <a href="#" className="self-care-box mt-4 px-2">
                    <p>Treat Your Skin With 9 Best Self-Care Subscription Boxes</p>
                    <img className="right-up" src="/assets/blog-page/right-up.png" alt="" />
                  </a>
                </div>
              </div> */}
              {/* <div className="Beauty-card">
                <img src="/assets/blog-inner-page/856ae5f76daae3055978fcc833b647c9.png" className="rounded-5" alt="" />
                <div className="top-div d-flex justify-content-center align-items-center">
                  <span>Electronics</span>
                </div>
                <div className="card-content">
                  <a href="#" className="self-care-box mt-4 px-2">
                    <p>Treat Your Skin With 9 Best Self-Care Subscription Boxes</p>
                    <img className="right-up" src="/assets/blog-page/right-up.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="Beauty-card">
                <img src="/assets/blog-inner-page/c69f3f7baccced5a1345ea3a93002285.png" className="rounded-5" alt="" />
                <div className="top-div d-flex justify-content-center align-items-center">
                  <span>Health &amp; Beauty</span>
                </div>
                <div className="card-content">
                  <a href="#" className="self-care-box mt-4 px-2">
                    <p>Treat Your Skin With 9 Best Self-Care Subscription Boxes</p>
                    <img className="right-up" src="/assets/blog-page/right-up.png" alt="" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}