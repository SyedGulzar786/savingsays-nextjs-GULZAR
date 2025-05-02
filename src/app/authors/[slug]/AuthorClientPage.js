"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { format } from "date-fns";
import Coupons from "@/src/components/Coupons";
import Link from "next/link";
import "./AuthorClientPage.css";
import { Button } from "react-bootstrap";
import PopularStores from "@/src/components/PopularStores/PopularStores";


const AuthorClientPage = ({ author }) => {
  return (
    <div>
      <section className="mt-4 mb-5">
        <div className="container">
          <div className="row profile-card">
            <div className="col-sm-3 d-flex justify-content-end p-0 align-items-center">
              <div className="profile-image position-relative rounded-circle m-0 overflow-hidden p-1 ">
                <img
                  className="w-100 h-100 object-fit-cover"
                  alt="Profile picture of Stacy Grace"
                  src={author?.avatar ?? "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"}
                  srcSet={author?.avatar.srcSet}
                />
              </div>
            </div>
            <div className="col-sm-9 d-flex allign-items-center">
              <div className="profile-info d-flex justify-content-center flex-column justify-content-center rounded-5 p-4">
                <h1><b>{author.name}</b></h1>
                {/* <h5>Shopping &amp; Savings Expert</h5> */}
                <h5>{author.tagline}</h5>
                <p className="mb-0" dangerouslySetInnerHTML={{ __html: author?.description }}></p>
                <hr
                  className="mt-0" style={{ color: "#B0B0B0", height: "1px", width: "100%" }}
                />

                <div className="social-links">
                  <span>Social Links -</span>
                  {/* <a
                      href={author?.socialLinks?.twitter}
                      target="_blank"
                      className="instagram-icon social-icons-side"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a> */}

                  {author?.socialLinks?.twitter && (
                    <a
                      href={author?.socialLinks?.twitter}
                      target="_blank"
                      className="twitter-icon social-icons-side ms-2"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  )}


                  {author?.socialLinks?.instagram && (
                    <a
                      href={author?.socialLinks?.instagram}
                      target="_blank"
                      className="instagram-icon social-icons-side ms-2"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  )}

                  {console.log(author?.socialLinks?.facebook)}
                  {author?.socialLinks?.facebook && (
                    <a
                      href={author?.socialLinks?.facebook}
                      target="_blank"
                      className="facebook-icon social-icons-side ms-2"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  )}
                  {/* <a
                    target="_blank"
                    className="twitter-icon social-icons-side ms-2"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    target="_blank"
                    className="instagram-icon social-icons-side ms-2"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    target="_blank"
                    className="facebook-icon social-icons-side ms-2"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PopularStores />

      <section>
        <div className="container mb-5">
          <div className="">
            <div className="d-flex position-relative">
              <h2 className="seven-fourty d-flex mb-0">
                Tested by Stacy Grace{" "}
                {/* <span className="ms-2 five-fourty"></span>{" "} */}
              </h2>{" "}
              <img
                className="title-frame-secondary position-absolute"
                src="/assets/landing-page/Frame.svg"
                alt=""
              />
              <div className="bottom-line ms-3 mb-3"></div>
            </div>
            <p className="mt-2 four-eighteen">
              Enjoy the latest deals and exclusive coupons for your favorite
              Stores.
            </p>
          </div>
          <div className="row mt-5 mb-5">
            {[
              { discount: "20%", category: "ON ELECTRONICS" },
              { discount: "70%", category: "ON ELECTRONICS" },
              { discount: "50%", category: "ON ELECTRONICS" },
              { discount: "45%", category: "ON ELECTRONICS" },
            ].map((coupon, index) => (
              console.log(coupon, index),
              <div className="col-lg-3" key={index}>
                <div className="d-flex justify-content-center bg-warning align-items-center bg-light rounded-5">
                  <div className="coupon-card d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="top-badge .six-thirteen">
                          <img src="/assets/store-images/Vector (1).png" alt="" />
                          <span className="px-1">Top Code</span>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="text-left">
                          <p className="display-view-price fw-bold text-black m-0">
                            {coupon.discount}
                          </p>
                          <p className="display-view-dicount fw-bold text-black m-0">
                            OFF
                          </p>
                        </div>
                        <div className="d-flex flex-column w-100 align-items-end">
                          <img
                            alt=""
                            className="img-fluid retroid-img"
                            // src={post?.media?.thumb ?? "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"}
                            src={author?.coupons[index]?.media?.thumb ?? "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"}
                            srcSet={author?.coupons[index]?.media?.srcSet}
                          />
                          <div className="line mt-2"></div>
                        </div>
                      </div>
                      {console.log(author?.coupons)}
                      {/* <p className="six-sixteen m-0">Retroid Pocket Coupon Code:</p> */}
                      {/* <p className="six-sixteen m-0">{coupon.category}</p> */}
                      <p className="four-fifteen" dangerouslySetInnerHTML={{ __html: author?.coupons[index]?.content }}>
                      </p>
                    </div>
                    <div>
                      <div className="d-flex justify-content-center ">
                        <button className="discount-btn six-thirteen">
                          Show Discount Code
                        </button>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between text-muted">
                        <span>{author?.coupons[index]?.usedCount} uses</span>
                        <span>&#11088; Verified coupon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* ************* */}
      <section className="mt-5 mb-5">
        <div className="container">
          <div className="">
            <div className="d-flex position-relative">
              <h2 className="seven-fourty d-flex mb-0">
                My Favorite Savings Hack
              </h2>{" "}
              <img
                className="title-frame-secondary position-absolute"
                src="/assets/landing-page/Frame.svg"
                alt=""
              />
              <div className="bottom-line ms-3 mb-3"></div>
            </div>
            <p className="mt-2 four-eighteen">
              It's a tie between shopping during the Bath & Body Works
              Semi-Annual sale and using a 30% off coupon
            </p>
          </div>

          <div className='row'>

            {/* Display the latest post prominently */}
            {console.log(author)}
            {author?.posts && author?.posts.length > 0 && author?.posts.map((post, index) => (
              <div className="col-sm-4 mb-3">
                <div className="published-card">
                  <img
                    src={post?.media?.thumb ?? "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"}
                    srcSet={post?.media?.srcSet} alt={post?.title}
                    className="object-fit-cover savehack-img rounded-5"
                  />
                </div>
                <div className="published-card-info px-2">
                  <div className="meta d-flex justify-content-between mt-2">
                    <div className="d-flex align-items-center gap-2 justify-content-center">
                      <img
                        src="/assets/author-images/hugeicons_date-time.svg"
                        alt=""
                      />
                      <span className="meta-span poppins-regular fs-13">Published: {format(new Date(post?.publishedAt), 'MMMM dd, yyyy')}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 justify-content-center">
                      <img src="/assets/author-images/Vector.svg" alt="" />
                      <span className="meta-span fs-15 poppins-regular">{author.name}</span>
                    </div>
                  </div>
                  <Link className="text-decoration-none text-dark" href={`/blog/${post?.slug}`}>
                    <h3 className="mt-2 fs-4 poppins-semibold mb-0">{post?.title}</h3>
                  </Link>
                  <div className="content d-flex justify-content-between ">
                    <p className="fs-6 mt-1 poppins-regular">A list of the best deals you shouldn't miss in 2025!</p>
                    <div className="read-content fs-13 poppins-regular d-flex align-items-center text-nowrap">
                      <img
                        src="/assets/author-images/arrow-up-right.svg"
                        alt=""
                      />
                      {/* <span>Read More</span> */}
                      {/* <div className='card-text'>{post?.excerpt}</div> */}
                      <Link className="text-dark text-decoration-none" href={`/blog/${post?.slug}`}>Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}


          </div>

          <div className="row mb-3">
            {/* <div className="col-sm-4">
              <div className="published-card">
                <img
                  src="/assets/author-images/c757a27f0b26cba92533c5af3150610b.png"
                  alt=""
                  className="w-100 h-100 object-fit-cover rounded-5"
                />
              </div>
              <div className="published-card-info px-2">
                <div className="meta d-flex justify-content-between  mt-2">
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <img
                      src="/assets/author-images/hugeicons_date-time.svg"
                      alt=""
                    />
                    <span className="meta-span poppins-regular fs-15">Published: April 12, 2025</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <img src="/assets/author-images/Vector.svg" alt="" />
                    <span className="meta-span fs-15 poppins-regular">Stacy Grace</span>
                  </div>
                </div>
                <h3 className="mt-2 mb-0 fs-3 poppins-semibold">Top 10 Coupons This Month</h3>
                <div className="content d-flex justify-content-between ">
                  <p className="fs-6 poppins-regular">A list of the best deals you shouldn't miss in 2025!</p>
                  <div className="read-content fs-13 poppins-regular text-nowrap">
                    <img
                      src="/assets/author-images/arrow-up-right.svg"
                      alt=""
                    />
                    <span>Read More</span>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-sm-4">
              <div className="published-card">
                <img
                  src="/assets/author-images/2e5dc437882b87e71d345a8a8f2d1f8a.png"
                  alt=""
                  className="w-100 h-100 object-fit-cover rounded-5"
                />
              </div>
              <div className="published-card-info px-2">
                <div className="meta d-flex justify-content-between  mt-2">
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <img
                      src="/assets/author-images/hugeicons_date-time.svg"
                      alt=""
                    />
                    <span className="meta-span poppins-regular fs-15">Published: April 12, 2025</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <img src="/assets/author-images/Vector.svg" alt="" />
                    <span className="meta-span fs-15 poppins-regular">Stacy Grace</span>
                  </div>
                </div>
                <h3 className="mt-2 mb-0 fs-3 poppins-semibold">Top 10 Coupons This Month</h3>
                <div className="content d-flex justify-content-between ">
                  <p className="fs-6 poppins-regular">A list of the best deals you shouldn't miss in 2025!</p>
                  <div className="read-content fs-13 poppins-regular text-nowrap">
                    <img
                      src="/assets/author-images/arrow-up-right.svg"
                      alt=""
                    />
                    <span>Read More</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="row mb-3">
            <div className="col-sm-6">
              <div className="published-card">
                <img
                  src="/assets/author-images/9f5c943027d55a6a1ad93ff65a0d6bc4.png"
                  alt=""
                  className="w-100 h-100 object-fit-cover rounded-5"
                />
              </div>
              <div className="published-card-info px-2">
                <div className="meta d-flex justify-content-between  mt-2">
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <img
                      src="/assets/author-images/hugeicons_date-time.svg"
                      alt=""
                    />
                    <span className="meta-span">Published: April 12, 2025</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <img src="/assets/author-images/Vector.svg" alt="" />
                    <span className="meta-span">Stacy Grace</span>
                  </div>
                </div>
                <h3 className="mt-2">Top 10 Coupons This Month</h3>
                <div className="content d-flex justify-content-between ">
                  <p>A list of the best deals you shouldn't miss in 2025!</p>
                  <div className="read-content">
                    <img
                      src="/assets/author-images/arrow-up-right.svg"
                      alt=""
                    />
                    <span>Read More</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="published-card">
                <img
                  src="/assets/author-images/d763985c3dc610bdbe922bbd425c8cd9.png"
                  alt=""
                  className="w-100 h-100 object-fit-cover rounded-5"
                />
              </div>
              <div className="published-card-info px-2">
                <div className="meta d-flex justify-content-between  mt-2">
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <img
                      src="/assets/author-images/hugeicons_date-time.svg"
                      alt=""
                    />
                    <span className="meta-span">Published: April 12, 2025</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <img src="/assets/author-images/Vector.svg" alt="" />
                    <span className="meta-span">Stacy Grace</span>
                  </div>
                </div>
                <h3 className="mt-2">Top 10 Coupons This Month</h3>
                <div className="content d-flex justify-content-between ">
                  <p>A list of the best deals you shouldn't miss in 2025!</p>
                  <div className="read-content">
                    <img
                      src="/assets/author-images/arrow-up-right.svg"
                      alt=""
                    />
                    <span>Read More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="published-card">
                <img
                  src="/assets/author-images/779a173f022f90ecf458ace43432b12e.png"
                  alt=""
                  className="w-100 h-100 object-fit-cover rounded-5"
                />
              </div>
              <div className="published-card-info px-2">
                <div className="meta d-flex justify-content-between  mt-2">
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <img
                      src="/assets/author-images/hugeicons_date-time.svg"
                      alt=""
                    />
                    <span className="meta-span">Published: April 12, 2025</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <img src="/assets/author-images/Vector.svg" alt="" />
                    <span className="meta-span">Stacy Grace</span>
                  </div>
                </div>
                <h3 className="mt-2">Top 10 Coupons This Month</h3>
                <div className="content d-flex justify-content-between ">
                  <p>A list of the best deals you shouldn't miss in 2025!</p>
                  <div className="read-content">
                    <img
                      src="/assets/author-images/arrow-up-right.svg"
                      alt=""
                    />
                    <span>Read More</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="published-card">
                <img
                  src="/assets/author-images/c757a27f0b26cba92533c5af3150610b.png"
                  alt=""
                  className="w-100 h-100 object-fit-cover rounded-5"
                />
              </div>
              <div className="published-card-info px-2">
                <div className="meta d-flex justify-content-between  mt-2">
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <img
                      src="/assets/author-images/hugeicons_date-time.svg"
                      alt=""
                    />
                    <span className="meta-span">Published: April 12, 2025</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 justify-content-center">
                    <img src="/assets/author-images/Vector.svg" alt="" />
                    <span className="meta-span">Stacy Grace</span>
                  </div>
                </div>
                <h3 className="mt-2">Top 10 Coupons This Month</h3>
                <div className="content d-flex justify-content-between ">
                  <p>A list of the best deals you shouldn't miss in 2025!</p>
                  <div className="read-content">
                    <img
                      src="/assets/author-images/arrow-up-right.svg"
                      alt=""
                    />
                    <span>Read More</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="d-flex justify-content-center mt-3">
            <button className="load-more mt-2 mb-3 border-0 py-2 px-4 rounded-5 five-seventeen ">
              Load More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthorClientPage;
