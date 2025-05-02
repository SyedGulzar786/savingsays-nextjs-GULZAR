"use client";

import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { GetStoreCoupons } from "@/src/actions/CouponsAction";
import { Button } from "react-bootstrap";
import { GetStores } from "@/src/actions/StoresAction";
import Link from "next/link";
import Image from "next/image";
import "./StoreCouponsPageClient.css";

const PopularCategories = dynamic(
  () => import("@/src/components/PopularCategories/PopularCategories"),
  { ssr: false }
);
const PopularStores = dynamic(
  () => import("@/src/components/PopularStores/PopularStores"),
  { ssr: false }
);

export default function StorePage({ initialStores, alphabet }) {
  const [stores, setStores] = useState(initialStores);
  const [hasMoreStores, setHasMoreStores] = useState(true);
  const [currentPage, setCurrentPage] = useState(2);
  const [loading, setLoading] = useState(false);

  const loadMoreStores = async () => {
    if (hasMoreStores) {
      setLoading(true);
      const data = await GetStores(currentPage, alphabet);

      if (data?.meta?.last_page === currentPage) {
        setHasMoreStores(false);
      }

      setStores((prevStores) => [...prevStores, ...data?.data]);
      setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
      setLoading(false);
    }
  };

  return (
    <>
    <Header />
      <section className="coupen-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <section>
                  <div className="container">
                    <div className="row bg-white py-5 rounded d-flex ">
                      <div className="col-lg-3 col-sm-12 ">
                        <img
                          alt="Banila Co logo"
                          className="rounded-4 upper-section-img  border border-secondary me-4"
                          src="/assets/store-images/banila-co-brand-banner 1.png"
                        />
                      </div>
                      <div className="col-lg-9 col-sm-12 ms-0 ">
                        <h2 className="fw-bold ">
                          Banila Co (Coupon &amp; Promo Code)
                        </h2>
                        <p className="text-muted mb-2 four-seventeen">
                          Best offers – Last Validated: March 8, 2025
                        </p>
                        <div className="d-flex justify-content-between align-items-center mb-1 border-bottom">
                          <div className="d-flex align-items-center pb-2">
                            <span className="text-dark">Rating 1</span>
                            <div className="ms-2 d-flex gap-1 review-stars">
                              <img src="/assets/store-images/Star.svg" alt="" />
                              <img src="/assets/store-images/Star.svg" alt="" />
                              <img src="/assets/store-images/Star.svg" alt="" />
                              <img src="/assets/store-images/Star.svg" alt="" />
                              <img src="/assets/store-images/Star.svg" alt="" />
                            </div>
                          </div>
                          <div>
                            <a href="" className="text-black">(See Review)</a>
                          </div>
                        </div>
                        <div className="mb-3">
                          <a className=" text-black" href="#">
                            About
                          </a>
                          <span className="text-muted mx-2">|</span>
                          <a className=" text-black" href="#">
                            FAQ's
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="col-sm-4 col-md-4 mb-5">
                  <div className="d-flex justify-content-center align-items-center bg-light rounded-5">
                    <div className="coupon-card">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="top-badge .six-thirteen">
                          <img
                            src="/assets/store-images/Vector (1).png"
                            alt=""
                          />
                          <span className="px-1">Top Code</span>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="text-left">
                          <p className="display-view-price fw-bold text-black m-0">
                            10$
                          </p>
                          <p className="display-view-dicount fw-bold text-black m-0">
                            OFF
                          </p>
                        </div>
                        <div className="d-flex flex-column w-100 align-items-end">
                          <img
                            alt=""
                            className="img-fluid retroid-img"
                            src="/assets/store-images/retroid-pocket-logo_6f5cc0c8-a40f-48f7-a55f-4b8539141659_1264x 1.svg"
                          />
                          <div className="line mt-2"></div>
                        </div>
                      </div>

                      <p className="six-sixteen m-0">
                        Retroid Pocket Coupon Code:
                      </p>
                      <p className="four-thirteen">
                        5% Off Select Items at Retroid Pocket w/ Coupon Code
                      </p>
                      <div className="d-flex justify-content-center ">
                        <button className="discount-btn six-thirteen">
                          Show Discount Code
                        </button>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between text-muted">
                        <span>785 uses</span>
                        <span>&#11088; Verified coupon</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4 mb-5">
                  <div className="d-flex justify-content-center align-items-center bg-light rounded-5">
                    <div className="coupon-card ">
                      {/* <!-- <div className="d-flex justify-content-between align-items-center">
                                    <span className="top-badge .six-thirteen"><img src="/assets/store-images/Vector (1).png"
                                            alt=""/><span className="px-1"> Top Code</span></span>
                                </div> --> */}
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="text-left">
                          <p className="display-view-price fw-bold text-black m-0">
                            10$
                          </p>
                          <p className="display-view-dicount fw-bold text-black m-0">
                            OFF
                          </p>
                        </div>
                        <div className="d-flex flex-column w-100 align-items-end">
                          <img
                            alt=""
                            className="img-fluid retroid-img"
                            src="/assets/store-images/retroid-pocket-logo_6f5cc0c8-a40f-48f7-a55f-4b8539141659_1264x 1.svg"
                          />
                          <div className="line mt-2"></div>
                        </div>
                      </div>

                      <p className="six-sixteen m-0">
                        Retroid Pocket Coupon Code:
                      </p>
                      <p className="four-thirteen">
                        5% Off Select Items at Retroid Pocket w/ Coupon Code
                      </p>
                      <div className="d-flex justify-content-center mt-5 ">
                        <button className="discount-btn six-thirteen">
                          View Deal
                        </button>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between text-muted">
                        <span>785 uses</span>
                        <span>&#11088; Verified coupon</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4 mb-5">
                  <div className="d-flex justify-content-center align-items-center bg-light rounded-5">
                    <div className="coupon-card ">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="top-badge .six-thirteen">
                          <img
                            src="/assets/store-images/Vector (1).png"
                            alt=""
                          />
                          <span className="px-1">Top Code</span>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="text-left">
                          <p className="display-view-price fw-bold text-black m-0">
                            10$
                          </p>
                          <p className="display-view-dicount fw-bold text-black m-0">
                            OFF
                          </p>
                        </div>
                        <div className="d-flex flex-column w-100 align-items-end">
                          <img
                            alt=""
                            className="img-fluid retroid-img"
                            src="/assets/store-images/retroid-pocket-logo_6f5cc0c8-a40f-48f7-a55f-4b8539141659_1264x 1.svg"
                          />
                          <div className="line mt-2"></div>
                        </div>
                      </div>

                      <p className="six-sixteen m-0">
                        Retroid Pocket Coupon Code:
                      </p>
                      <p className="four-thirteen">
                        5% Off Select Items at Retroid Pocket w/ Coupon Code
                      </p>
                      <div className="d-flex justify-content-center ">
                        <button className="discount-btn six-thirteen">
                          Show Discount Code
                        </button>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between text-muted">
                        <span>785 uses</span>
                        <span>&#11088; Verified coupon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 col-md-4 mb-5">
                  <div className="d-flex justify-content-center align-items-center bg-light rounded-5">
                    <div className="coupon-card ">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="top-badge .six-thirteen">
                          <img
                            src="/assets/store-images/Vector (1).png"
                            alt=""
                          />
                          <span className="px-1">Top Code</span>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="text-left">
                          <p className="display-view-price fw-bold text-black m-0">
                            10$
                          </p>
                          <p className="display-view-dicount fw-bold text-black m-0">
                            OFF
                          </p>
                        </div>
                        <div className="d-flex flex-column w-100 align-items-end">
                          <img
                            alt=""
                            className="img-fluid retroid-img"
                            src="/assets/store-images/retroid-pocket-logo_6f5cc0c8-a40f-48f7-a55f-4b8539141659_1264x 1.svg"
                          />
                          <div className="line mt-2"></div>
                        </div>
                      </div>

                      <p className="six-sixteen m-0">
                        Retroid Pocket Coupon Code:
                      </p>
                      <p className="four-thirteen">
                        5% Off Select Items at Retroid Pocket w/ Coupon Code
                      </p>
                      <div className="d-flex justify-content-center ">
                        <button className="discount-btn six-thirteen">
                          Show Discount Code
                        </button>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between text-muted">
                        <span>785 uses</span>
                        <span>&#11088; Verified coupon</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4 mb-5">
                  <div className="d-flex justify-content-center align-items-center bg-light rounded-5">
                    <div className="coupon-card ">
                      {/* <!-- <div className="d-flex justify-content-between align-items-center">
                                    <span className="top-badge .six-thirteen"><img src="/assets/store-images/Vector (1).png"
                                            alt=""/><span className="px-1"> Top Code</span></span>
                                </div> --> */}
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="text-left">
                          <p className="display-view-price fw-bold text-black m-0">
                            10$
                          </p>
                          <p className="display-view-dicount fw-bold text-black m-0">
                            OFF
                          </p>
                        </div>
                        <div className="d-flex flex-column w-100 align-items-end">
                          <img
                            alt=""
                            className="img-fluid retroid-img"
                            src="/assets/store-images/retroid-pocket-logo_6f5cc0c8-a40f-48f7-a55f-4b8539141659_1264x 1.svg"
                          />
                          <div className="line mt-2"></div>
                        </div>
                      </div>

                      <p className="six-sixteen m-0">
                        Retroid Pocket Coupon Code:
                      </p>
                      <p className="four-thirteen">
                        5% Off Select Items at Retroid Pocket w/ Coupon Code
                      </p>
                      <div className="d-flex justify-content-center mt-5 ">
                        <button className="discount-btn six-thirteen">
                          View Deal
                        </button>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between text-muted">
                        <span>785 uses</span>
                        <span>&#11088; Verified coupon</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4 mb-5">
                  <div className="d-flex justify-content-center align-items-center bg-light rounded-5">
                    <div className="coupon-card ">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="top-badge .six-thirteen">
                          <img
                            src="/assets/store-images/Vector (1).png"
                            alt=""
                          />
                          <span className="px-1">Top Code</span>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="text-left">
                          <p className="display-view-price fw-bold text-black m-0">
                            10$
                          </p>
                          <p className="display-view-dicount fw-bold text-black m-0">
                            OFF
                          </p>
                        </div>
                        <div className="d-flex flex-column w-100 align-items-end">
                          <img
                            alt=""
                            className="img-fluid retroid-img"
                            src="/assets/store-images/retroid-pocket-logo_6f5cc0c8-a40f-48f7-a55f-4b8539141659_1264x 1.svg"
                          />
                          <div className="line mt-2"></div>
                        </div>
                      </div>

                      <p className="six-sixteen m-0">
                        Retroid Pocket Coupon Code:
                      </p>
                      <p className="four-thirteen">
                        5% Off Select Items at Retroid Pocket w/ Coupon Code
                      </p>
                      <div className="d-flex justify-content-center ">
                        <button className="discount-btn six-thirteen">
                          Show Discount Code
                        </button>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between text-muted">
                        <span>785 uses</span>
                        <span>&#11088; Verified coupon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 col-md-4 mb-5">
                  <div className="d-flex justify-content-center align-items-center bg-light rounded-5">
                    <div className="coupon-card ">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="top-badge .six-thirteen">
                          <img
                            src="/assets/store-images/Vector (1).png"
                            alt=""
                          />
                          <span className="px-1">Top Code</span>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="text-left">
                          <p className="display-view-price fw-bold text-black m-0">
                            10$
                          </p>
                          <p className="display-view-dicount fw-bold text-black m-0">
                            OFF
                          </p>
                        </div>
                        <div className="d-flex flex-column w-100 align-items-end">
                          <img
                            alt=""
                            className="img-fluid retroid-img"
                            src="/assets/store-images/retroid-pocket-logo_6f5cc0c8-a40f-48f7-a55f-4b8539141659_1264x 1.svg"
                          />
                          <div className="line mt-2"></div>
                        </div>
                      </div>

                      <p className="six-sixteen m-0">
                        Retroid Pocket Coupon Code:
                      </p>
                      <p className="four-thirteen">
                        5% Off Select Items at Retroid Pocket w/ Coupon Code
                      </p>
                      <div className="d-flex justify-content-center ">
                        <button className="discount-btn six-thirteen">
                          Show Discount Code
                        </button>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between text-muted">
                        <span>785 uses</span>
                        <span>&#11088; Verified coupon</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4 mb-5">
                  <div className="d-flex justify-content-center align-items-center bg-light rounded-5">
                    <div className="coupon-card ">
                      {/* <!-- <div className="d-flex justify-content-between align-items-center">
                                    <span className="top-badge .six-thirteen"><img src="/assets/store-images/Vector (1).png"
                                            alt=""/><span className="px-1"> Top Code</span></span>
                                </div> --> */}
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="text-left">
                          <p className="display-view-price fw-bold text-black m-0">
                            10$
                          </p>
                          <p className="display-view-dicount fw-bold text-black m-0">
                            OFF
                          </p>
                        </div>
                        <div className="d-flex flex-column w-100 align-items-end">
                          <img
                            alt=""
                            className="img-fluid retroid-img"
                            src="/assets/store-images/retroid-pocket-logo_6f5cc0c8-a40f-48f7-a55f-4b8539141659_1264x 1.svg"
                          />
                          <div className="line mt-2"></div>
                        </div>
                      </div>

                      <p className="six-sixteen m-0">
                        Retroid Pocket Coupon Code:
                      </p>
                      <p className="four-thirteen">
                        5% Off Select Items at Retroid Pocket w/ Coupon Code
                      </p>
                      <div className="d-flex justify-content-center mt-5 ">
                        <button className="discount-btn six-thirteen">
                          View Deal
                        </button>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between text-muted">
                        <span>785 uses</span>
                        <span>&#11088; Verified coupon</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4 mb-5">
                  <div className="d-flex justify-content-center align-items-center bg-light rounded-4">
                    <div className="coupon-card ">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="top-badge .six-thirteen ">
                          <img
                            src="/assets/store-images/Vector (1).png"
                            alt=""
                          />
                          <span className="px-1">Top Code</span>
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="text-left">
                          <p className="display-view-price fw-bold text-black m-0">
                            10$
                          </p>
                          <p className="display-view-dicount fw-bold text-black m-0">
                            OFF
                          </p>
                        </div>
                        <div className="d-flex flex-column w-100 align-items-end">
                          <img
                            alt=""
                            className="img-fluid retroid-img"
                            src="/assets/store-images/retroid-pocket-logo_6f5cc0c8-a40f-48f7-a55f-4b8539141659_1264x 1.svg"
                          />
                          <div className="line mt-2"></div>
                        </div>
                      </div>

                      <p className="six-sixteen m-0">
                        Retroid Pocket Coupon Code:
                      </p>
                      <p className="four-thirteen">
                        5% Off Select Items at Retroid Pocket w/ Coupon Code
                      </p>
                      <div className="d-flex justify-content-center ">
                        <button className="discount-btn six-thirteen">
                          Show Discount Code
                        </button>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between text-muted">
                        <span>785 uses</span>
                        <span>&#11088; Verified coupon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-4 pt-2 justify-content-center">
                <button className="load-more border-0 py-2 px-4 rounded-5 five-seventeen">
                  Load More
                </button>
              </div>
              <section className="competiter mt-5">
                <div className="row">
                  <h2 className="seven-fourty text-center">
                    Banila Co. Competitor Coupon Codes
                  </h2>
                  <div className="col-sm-6">
                    <div className="ulta-coupen mt-3 d-flex justify-content-evenly align-items-center gap-4">
                      <div className="content mt-3">
                        <div className="ulta">
                          <h4 className="six-sixteen m-0">
                            ULTA coupon codes{" "}
                          </h4>
                          <p className="four-eleveen ">ulta.com</p>
                        </div>
                        <div className="active">
                          <h5 className="four-thirteen m-0">
                            Today’s active codes: 10+
                          </h5>
                          <p className="four-thirteen text-muted ">
                            Offers coupons: Often
                          </p>
                        </div>
                      </div>
                      <div className="beauty">
                        <img
                          className="rounded-5  d-flex justify-content-center align-items-center p-3"
                          src="/assets/store-images/1280px-Ulta_Beauty_logo.svg 1.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="ulta-coupen mt-3 d-flex justify-content-evenly align-items-center gap-4">
                      <div className="content mt-3">
                        <div className="ulta">
                          <h4 className="six-sixteen m-0">
                            ULTA coupon codes{" "}
                          </h4>
                          <p className="four-eleveen ">ulta.com</p>
                        </div>
                        <div className="active">
                          <h5 className="four-thirteen m-0">
                            Today’s active codes: 10+
                          </h5>
                          <p className="four-thirteen text-muted ">
                            Offers coupons: Often
                          </p>
                        </div>
                      </div>
                      <div className="beauty">
                        <img
                          className="rounded-5 d-flex justify-content-center align-items-center p-3"
                          src="/assets/store-images/1280px-Ulta_Beauty_logo.svg 1.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="ulta-coupen mt-3 d-flex justify-content-evenly align-items-center gap-4">
                      <div className="content mt-3">
                        <div className="ulta">
                          <h4 className="six-sixteen m-0">
                            ULTA coupon codes{" "}
                          </h4>
                          <p className="four-eleveen ">ulta.com</p>
                        </div>
                        <div className="active">
                          <h5 className="four-thirteen m-0">
                            Today’s active codes: 10+
                          </h5>
                          <p className="four-thirteen text-muted ">
                            Offers coupons: Often
                          </p>
                        </div>
                      </div>
                      <div className="beauty">
                        <img
                          className="rounded-5  d-flex justify-content-center align-items-center p-3"
                          src="/assets/store-images/1280px-Ulta_Beauty_logo.svg 1.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="ulta-coupen mt-3 d-flex justify-content-evenly align-items-center gap-4">
                      <div className="content mt-3">
                        <div className="ulta">
                          <h4 className="six-sixteen m-0">
                            ULTA coupon codes{" "}
                          </h4>
                          <p className="four-eleveen ">ulta.com</p>
                        </div>
                        <div className="active">
                          <h5 className="four-thirteen m-0">
                            Today’s active codes: 10+
                          </h5>
                          <p className="four-thirteen text-muted ">
                            Offers coupons: Often
                          </p>
                        </div>
                      </div>
                      <div className="beauty">
                        <img
                          className="rounded-5 d-flex justify-content-center align-items-center p-3"
                          src="/assets/store-images/1280px-Ulta_Beauty_logo.svg 1.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="ulta-coupen mt-3 d-flex justify-content-evenly align-items-center gap-4">
                      <div className="content mt-3">
                        <div className="ulta">
                          <h4 className="six-sixteen m-0">
                            ULTA coupon codes{" "}
                          </h4>
                          <p className="four-eleveen ">ulta.com</p>
                        </div>
                        <div className="active">
                          <h5 className="four-thirteen m-0">
                            Today’s active codes: 10+
                          </h5>
                          <p className="four-thirteen text-muted ">
                            Offers coupons: Often
                          </p>
                        </div>
                      </div>
                      <div className="beauty">
                        <img
                          className="rounded-5  d-flex justify-content-center align-items-center p-3"
                          src="/assets/store-images/1280px-Ulta_Beauty_logo.svg 1.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="ulta-coupen mt-3 d-flex justify-content-evenly align-items-center gap-4">
                      <div className="content mt-3">
                        <div className="ulta">
                          <h4 className="six-sixteen m-0">
                            ULTA coupon codes{" "}
                          </h4>
                          <p className="four-eleveen ">ulta.com</p>
                        </div>
                        <div className="active">
                          <h5 className="four-thirteen m-0">
                            Today’s active codes: 10+
                          </h5>
                          <p className="four-thirteen text-muted ">
                            Offers coupons: Often
                          </p>
                        </div>
                      </div>
                      <div className="beauty">
                        <img
                          className="rounded-5 d-flex justify-content-center align-items-center p-3"
                          src="/assets/store-images/1280px-Ulta_Beauty_logo.svg 1.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- **************** --> */}
              <section className="policy">
                <div className="d-flex mt-5 pt-4 mb-4 pb-1">
                  <h1 className="seven-fourty m-0 w-100">
                    Shipping & Delivery
                  </h1>
                  <div className="bottom-line ms-3 mb-2"></div>
                </div>
                <div className="">
                  <p className="four-eighteen dark-color">
                    The standard shipping cost is $8 and Expedited shipping for
                    $20. Shipping time depends on your address and will be shown
                    at checkout.
                  </p>
                  <p className="five-eighteen dark-color">
                    The shipping is free for Nike Members.
                  </p>
                </div>
                <div className="d-flex mt-2 pt-4 mb-4 pb-1">
                  <h1 className="seven-fourty m-0 w-100 ">Return & Exchange</h1>
                  <div className="bottom-line ms-3 mb-2"></div>
                </div>
                <div className="">
                  <p className="four-eighteen dark-color">
                    All Nike purchases have an extended 60-day return policy.
                    The returned item needs to be unworn, unused, and in good
                    condition. Returns are always free for Nike Members.
                  </p>
                </div>
              </section>
              {/* <!-- ************ --> */}
              <section className="save-money ">
                <div className="d-flex mt-5 pt-4 mb-4 pb-1">
                  <h1 className="seven-fourty m-0 w-100">
                    Saving Money at Nike
                  </h1>
                  <div className="bottom-line ms-3 mb-2"></div>
                </div>
                <div className="">
                  <div className="seven-twenty-eight">
                    Coupons & Promo Codes
                  </div>
                  <p className="four-sixteen mt-2">
                    Coupons & Promo codes are one of the best ways to save money
                    while shopping online. Nike offers exclusive coupons and
                    discount codes for its customers. Currently, there are 10+
                    active offers at Nike on SavingSays ready to use. You can
                    use them while shopping at Nike.
                  </p>
                </div>
                <div className="">
                  <div className="seven-twenty-eight">Black Friday Sales</div>
                  <p className="four-sixteen mt-2">
                    ooking for the ultimate shopping experience? Look no further
                    than the Nike Black Friday sale! With discounts of up to 60%
                    off, you can indulge in your favorite products without
                    breaking the bank. From trendy fashion pieces to must-have
                    gadgets, their wide selection has something for everyone.
                    And with an easy online shopping platform, you can skip the
                    crowds and shop from the comfort of your own home.
                  </p>
                </div>
                <div className="">
                  <div className="seven-twenty-eight">Newsletter</div>
                  <p className="four-sixteen mt-2">
                    Sign up for Groome Transportation’s newsletter and receive
                    the latest promotions, offers, and news directly to your
                    inbox. Stay informed about new deals and updates.
                  </p>
                </div>
              </section>
            </div>
            {/* <!-- ***** --> */}

            {/* <!-- SIDE BAR --> */}
            <div className="col-sm-3 col-md-3 mt-5">
              <div className="sidebar rounded-4">
                <div className="sidebar-head p-4 ">
                  <div className="d-flex flex-column justify-content-center mb-4">
                    <h2 className="five-eighteen">
                      Aventon Exclusive Discounts
                    </h2>
                    <a href="#" className="btn btn-custom">
                      Student Discount
                    </a>
                    <a href="#" className="btn btn-custom">
                      Healthcare Discount
                    </a>
                    <a href="#" className="btn btn-custom">
                      Nurse Discount
                    </a>
                    <a href="#" className="btn btn-custom">
                      Birthday Discount
                    </a>
                    <a href="#" className="btn btn-custom">
                      Military Discount
                    </a>
                    <a href="#" className="btn btn-custom">
                      Teacher Discount
                    </a>
                    <a href="#" className="btn btn-custom">
                      Senior Discount
                    </a>
                  </div>

                 <div className="border rounded-4 px-2 shadow mb-3">
                 <div className="d-flex align-items-center gap-3 mb-2 mt-4">
                    <img
                      src="/assets/store-images/Photo by George Milton.png"
                      alt="Portrait of Emily Jones, a woman with dark hair and a serious expression, wearing a white top"
                      className="rounded-circle pic-border"
                      width={60}
                      height={60}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="flex-grow-1">
                      <a href="" className="text-decoration-none"><h1 className="name">Emily Jones</h1></a>
                      <p className="title mb-0">Shopping & Savings Expert</p>
                    </div>
                  </div>
                  {/* <!-- ***** --> */}

                  <p className="updated-text">
                    <em>This page was updated 9 hours ago by Emily Jones</em>.
                  </p>
                  <p className="description">
                    Emily is fervently committed to assisting our clientele in
                    maximizing savings while enjoying a seamless online shopping
                    experience. With a refined understanding of retail dynamics
                    and an astute eye for identifying exceptional deals, she
                    excels in sourcing the most advantageous offers. Outside her
                    professional role in couponing, Kate finds joy in
                    cultivating her garden, delving into mystery novels, and
                    practicing yoga.
                  </p>
                 </div>

                  <div className="status-box border rounded-4 px-2 pt-3">
                    <h2 className="six-thirteen">
                      <i className="fas fa-sync-alt"></i> Last Updated: March
                      10, 2025
                    </h2>
                    <ul className="p-0 four-thirteen ms-3">
                      <li className="mb-2">160 Offers Available</li>
                      <li className="mb-2">47 Coupons Verified</li>
                      <li>885 People Used Today</li>
                    </ul>
                  </div>

                  <div className="trust-us">
                    <div className="d-flex mt-4">
                      <h1 className="five-eighteen m-0 text-nowrap">
                        Why Trust Us?
                      </h1>
                      <div className="bottom-line ms-3 mb-1"></div>
                    </div>
                    <p className="four-thirteen mt-2 lh-sm">
                      Not all coupon sites are created equal — that’s because
                      Offers.com has a team and a process that sets us apart.
                      Every day, our curation team sources thousands of coupons
                      and deals from across the internet from all of your
                      favorite retailers. Then our validation team takes over,
                      working overnight to test each and every new code to
                      ensure they work. From there, our merchandising team sorts
                      through validated codes and handpicks the best coupons for
                      our users. Our team last verified Amazon's deals on March
                      10, 2025.
                    </p>
                  </div>
                  <a href="#" className="four-sixteen text-muted">
                    Learn How We Verify Coupons
                  </a>
                  <div className="joann-store">
                    <div className="d-flex mt-4 mb-2">
                      <h1 className="five-eighteen m-0">
                        All you need to know about Joann
                      </h1>
                      {/* <!-- <div className="bottom-line ms-3 mb-1"></div> --> */}
                    </div>
                    <h6>
                      <b>Joann Store</b>
                    </h6>
                    <p className="four-thirteen mt-2 lh-sm">
                      Joann was founded in 1943 and after that Joann established
                      the business direction towards Home & Garden. The category
                      of Joann products and services falls into Hobbies &
                      Collectibles, Art, Gift & Flowers, Gifts, Home & Living,
                      Bed/Bath, Department Store, Miscellaneous, Other
                      Products/Services, and the like.
                    </p>
                  </div>
                  <div className="app-images d-flex justify-content-center gap-3 mt-4">
                    <img src="/assets/store-images/Facebook.svg" alt="" />
                    <img src="/assets/store-images/Instagram.svg" alt="" />
                    <img src="/assets/store-images/X logo.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- SIDE BAR END --> */}
          </div>
        </div>
      </section>
      {/* <!-- acordian-start --> */}
    {/* <section className="accordion-custom spacer">
        <div className="container accordion-width py-5">
            <h2 className="seven-fourty text-center mb-5 mt-5">Frequently Asked Questions</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item border rounded-4 mb-4">  
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button border rounded-4 six-twenty" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            What is Banila Co?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body four-fifteen">
                            Banila Co is a popular Korean skincare brand known for its Clean It Zero Cleansing Balm and
                            other beauty products.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border rounded-4 mb-4">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button border rounded-4 six-twenty collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            What are Banila Co’s best-selling products? </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body four-fifteen">
                            Copy the code & apply it at checkout. </div>
                    </div>
                </div>
                <div className="accordion-item border rounded-4 mb-4">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button border rounded-4 six-twenty collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">
                            Is Banila Co cruelty-free?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body four-fifteen">
                            Copy the code & apply it at checkout. </div>
                    </div>
                </div>

                <div className="accordion-item border rounded-4 mb-4">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button border rounded-4 six-twenty collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                            aria-controls="collapseFour">
                            Where can I buy Banila Co products?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body four-fifteen">
                            Copy the code & apply it at checkout. </div>
                    </div>
                </div>

                <div className="accordion-item border rounded-4 mb-4">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button border rounded-4 six-twenty collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                            aria-controls="collapseFive">
                            Are Banila Co products suitable for all skin types?
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body four-fifteen">
                            Copy the code & apply it at checkout. </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    {/* <!-- acordian-end --> */}
    </>
  );
}