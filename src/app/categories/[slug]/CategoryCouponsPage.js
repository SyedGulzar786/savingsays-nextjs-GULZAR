"use client";
import "../../stores/[slug]/coupons/StoreCouponsPageClient.css"
import React, {useState} from "react";
import {Alert, Card, Col, Container, Row} from "react-bootstrap";
import Coupons from "@/src/components/Coupons";
import {GetCouponsByCategory} from "@/src/actions/CouponsAction";

export default function CategoryCouponsPage({category, initialCoupons}) {

    const [coupons, setCoupons] = useState(initialCoupons)
    const [hasMoreCoupons, setHasMoreCoupons] = useState(true);
    const [currentPage, setCurrentPage] = useState(2);
    const [loading, setLoading] = useState(false)

    const loadMoreCoupons = async () => {
        if (hasMoreCoupons) {
            setLoading(true);
            const data = await GetCouponsByCategory(category?.slug, currentPage);

            if (data?.meta?.last_page === currentPage) {
                setHasMoreCoupons(false);
            }

            setCoupons((prevCoupons) => [...prevCoupons, ...data?.data]);
            setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
            setLoading(false)
        }
    }

    return (
        <>
        
        <section className="coupen-section">
        <div className="container">
          <div className="row">
        
            {/* <!-- ***** --> */}

            {/* <!-- SIDE BAR --> */}
            <div className="col-sm-3 col-md-3 mt-5">
              <div className="sidebar rounded-4">
                <div className="sidebar-head p-4 ">
                <h1 className="fs-2 poppins-bold text-center">{category?.name}</h1>
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

                </div>
              </div>
            </div>
            {/* <!-- SIDE BAR END --> */}
          </div>
        </div>
      </section>
        
            {/* <Container>
                <Row>
                    <Col sm={3}>
                        <div className="Sidebar">
                            <div className="custom_box_Shadow p-3 bg-white">
                                <aside className="w-box products-left-bar">
                                    <div className="pro text-center">
                                        <div className="imgPro-box text-center">
                                            <img
                                                className="product-image"
                                                src={category?.image ?? 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'}
                                                alt={category?.name}
                                            />
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <hr className="h-px w-full bg-gray-300 my-6"/>
                            <div className='about-us-fold' dangerouslySetInnerHTML={{__html: category?.description}}/>
                        </div>
                    </Col>
                    <Col sm={9}>

                        <h1>{category?.name} Coupons &amp; Promo Codes</h1>

                        {coupons.length === 0 &&
                            <Alert variant="info">No Coupons</Alert>
                        } */}

                     {/* //   <CategoryCoupons coupons={coupons} links={links} meta={meta} /> */}
                        {/* {coupons && coupons?.length > 0 &&
                            <Coupons
                                hasMoreCoupons={hasMoreCoupons}
                                loadMoreCoupons={loadMoreCoupons}
                                coupons={coupons}
                                loading={loading}
                                type="category"
                            />
                        }
                    </Col>
                </Row>
            </Container>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                </div>
            </div> */}
        </>
    )
}
