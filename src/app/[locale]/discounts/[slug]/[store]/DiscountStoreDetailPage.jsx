"use client"

import React, { useState } from "react";
import FoldTwo from "@/src/components/Discount/FoldTwo";
import Author from "@/src/components/Discount/Author";
import CouponCard from "@/src/components/CouponCard";
import CouponTable from "@/src/components/TwoColumn/RightContent/CouponTable";
import AboutUs from "@/src/components/TwoColumn/RightContent/AboutUs";
import PopularCategories from "@/src/components/PopularCategories/PopularCategories";
import PopularStores from "@/src/components/PopularStores/PopularStores";
import { Alert } from "react-bootstrap";
import FoldOne from "@/src/components/Discount/FoldOne";
import FAQs from "@/src/components/Faq/FAQs";
import Sidebar from "@/src/components/TwoColumn/SideBar/Sidebar";
import Coupons from "@/src/components/Coupons";
import StorePageFoldOne from "@/src/components/FoldOne/StorePageFoldOne";
import { format } from "date-fns/format";
import PopularStoresStyle2 from "@/src/components/PopularStores/PopularStoresStyle2";
import { useVendorContext } from "@/src/app/vendor-provider";
import { GetDiscountedStoreCoupons, GetStoreCoupons } from "@/src/actions/CouponsAction";
import "./DiscountStoreDetailPage.css"

export default function DiscountStoreDetailPage({ store, initialCoupons }) {

    const { vendorData } = useVendorContext();
    const [coupons, setCoupons] = useState(initialCoupons)
    const [hasMoreCoupons, setHasMoreCoupons] = useState(true);
    const [currentPage, setCurrentPage] = useState(2);
    const [loading, setLoading] = useState(false)

    const loadMoreCoupons = async () => {
        if (hasMoreCoupons) {
            setLoading(true);
            const data = await GetDiscountedStoreCoupons(store?.specialPage?.slug, store?.slug, currentPage);

            if (data?.meta?.last_page === currentPage) {
                setHasMoreCoupons(false);
            }

            setCoupons((prevCoupons) => [...prevCoupons, ...data?.data]);
            setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
            setLoading(false)
        }
    }

    return (
        // <div>

        //     {/* Two Column Layout */}
        //     <div className="container my-5">
        //         <div className="row flex-row-reverse">
        //             <div className="col-md-3">
        //                 <Sidebar store={store}/>
        //             </div>

        //             {/* Second Column (9 columns) */}
        //             <div className="col-md-9">

        //                 <div className="term-info-area p-5 bg-white shadow border border-light mb-5 rounded">
        //                     <h1 className="text-3xl font-bold text-dark mb-4 text-center">
        //                         {store?.fullTitle}
        //                     </h1>

        //                     <div className="d-flex justify-content-between align-items-center mb-4">
        //                         {store?.isDiscontinued ?
        //                             <a
        //                                 href={store?.discontinuedLink}
        //                                 className="btn btn-secondary p-2 text-sm capitalize mx-auto flex font-light"
        //                             >
        //                                 Discontinued
        //                             </a>
        //                             :
        //                             <div className="text-center">
        //                                 <strong className="heading font-semibold text-dark text-lg mb-2.5">
        //                                     {store?.title}
        //                                 </strong>
        //                                 <a
        //                                     href={store?.link}
        //                                     style={{width: "fit-content"}}
        //                                     className="btn btn-secondary p-2 text-sm capitalize mx-auto flex font-light"
        //                                 >
        //                                     Claim Now
        //                                 </a>
        //                             </div>
        //                         }
        //                         <div>
        //                             <p className="modify-date text-dark font-light text-lg">
        //                                 Last Updated: <small className="font-semibold text-lg">
        //                                 {format(store?.updatedAt, "MMMM dd, yyyy")}
        //                             </small>
        //                             </p>
        //                         </div>
        //                     </div>

        //                     <div className="tagline bg-dark text-white p-4 text-center">
        //                         <strong className="font-light font-italic text-lg">{store?.description}</strong>
        //                     </div>
        //                 </div>

        //                 {store?.isDiscontinued === false &&
        //                     <div
        //                         className="term-description p-4 shadow border border-gray-300 mb-5 rounded-md bg-white">
        //                         <h2 className="text-xl font-bold">How To Claim {store?.specialPage?.fullTitle}?</h2>
        //                         <div dangerouslySetInnerHTML={{__html: store?.shortContent}}></div>
        //                     </div>
        //                 }

        //                 <Author store={store}/>

        //                 {store?.isDiscontinued === true &&
        //                     <div dangerouslySetInnerHTML={{__html: vendorData?.settings?.advertisement}}></div>
        //                 }

        //                 {/*<StorePageFoldOne store={store}/>*/}

        //                 {/*<FoldTwo store={store?.store}/>*/}

        //                 {/*<Author store={store}/>*/}

        //                 <h3 dangerouslySetInnerHTML={{__html: store?.heading}}></h3>
        //                 <Coupons
        //                     hasMoreCoupons={hasMoreCoupons}
        //                     loadMoreCoupons={loadMoreCoupons}
        //                     store={store}
        //                     coupons={coupons}
        //                     loading={loading}
        //                 />

        //                 <div dangerouslySetInnerHTML={{__html: store?.fullContent}}></div>

        //             </div>

        //         </div>

        //         {store?.faqs && store?.faqs.length > 0 &&
        //             <FAQs store={store}/>
        //         }
        //     </div>

        //     <PopularCategories/>

        //     <PopularStores/>
        // </div>
        <div>
            <section className="parent-section mt-4 pt-2">
                <div className="container">
                    {/* <!-- if needed add p-0 --> */}
                    <div className="row">
                        <div className="col-lg-9">
                            <section className="first-coupon-section rounded-5">
                                <div className="linear-bg py-4 rounded-5 d-flex flex-column justify-content-center px-4 pe-5">
                                    <div className="row mb-4">
                                        <h1 className="seven-fourty text start col-8">Groome Transportation Senior Discounts</h1>
                                        <p className="four-thirteen col-4 text-end">Last Updated: March 11, 2025</p>
                                    </div>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-xl-2 col-lg-12 d-flex align-items-center">
                                            <h1 className="seven-sixty line-height m-0">70% <span className="seven-sixtyfour">OFF</span></h1>

                                        </div>
                                        <div className="col-xl-7 col-lg-6">
                                            <div className="mt-4">
                                                <div className="bottom-line-2"></div>
                                                <p className="six-fifteen m-0">Save Big with the Groome Transportation Senior Discount!</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 text-end"><button className="six-fifteen color-hexa border-0 py-2 px-4 graident-background-btn rounded-5">Claim Now</button></div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className="d-flex mt-5 mb-4">
                                    <h1 className="seven-fourty m-0 text-nowrap">How To Claim?</h1>
                                    <div className="bottom-line mb-2"></div>
                                </div>
                                <div>
                                    <p className="four-twentytwo m-1 mb-2">» Confirm Your Eligibility:<span className="four-fifteen ms-2">The senior discount is available for passengers aged 65 or older.</span></p>
                                    <p className="four-twentytwo m-1 mb-2">» Book Your Ride:<span className="four-fifteen ms-2">Visit the Groome Transportation website or contact the local Fort Collins or Loveland service desk to make your reservation.</span></p>
                                    <p className="four-twentytwo m-1 mb-2">» Mention the Discount:<span className="four-fifteen ms-2">Ensure you mention the senior discount while booking your ride.</span></p>
                                    <p className="four-twentytwo m-1 mb-2">» Provide Proof of Age:<span className="four-fifteen ms-2">Be prepared to present valid identification, such as a driver's license or ID card, at the time of travel to confirm eligibility.</span></p>
                                </div>
                                <div>
                                    <h2 className="seven-twentyseven my-4">Important Details:</h2>
                                </div>
                                <div>
                                <p className="four-twentytwo m-1 mb-2">» Discount Availability:<span className="four-fifteen ms-2">For seniors aged 65 and older.</span></p>
                                <p className="four-twentytwo m-1 mb-2">» Locations:<span className="four-fifteen ms-2">For seniors aged 65 and older.</span></p>
                                <p className="four-twentytwo m-1 mb-2">» Booking Options:<span className="four-fifteen ms-2">Online, by phone, or at Groome Transportation service counters.</span></p>
                                </div>
                            </section>

                            <section className="tip my-4 rounded-4">
                                <div className="d-flex align-items-center p-4">
                                    <h1 className="seven-fourty color-hexa m-0 p-0">Tip By Author</h1>
                                    <a href="#" className="five-seventeen color-hexa ms-3 mt-2">"Average Savings at Pakwheels through coupons is $13.5"</a>
                                </div>
                            </section>

                            <section>
                                <div className="pt-4 mb-4">
                                    <div className="d-flex">
                                        <h1 className="seven-fourty m-0">Groome Transportation </h1>
                                        <div className="bottom-line ms-3 mb-2"></div>
                                    </div>
                                    <p className="four-eighteen">Student Discount</p>
                                </div>
                                <div className="discount-coupon rounded-5 row mx-0 p-4">
                                    <div className="col-lg-3 d-flex align-items-center justify-content-center">
                                        <h1 className="seven-sixtyfour text-center gradient-font line-height m-0">30% <span className="seven-sixtyfour">OFF</span></h1>
                                    </div>
                                    <div className="col-lg-7">
                                        <div>
                                            <span className="badge-bg six-thirteen rounded-5 p-2">
                                                Promo Code
                                            </span>
                                            <span className="badge-bg-2 six-thirteen rounded-5 p-2">
                                                Recommended
                                            </span>
                                        </div>
                                        <h4 className="seven-twenty mt-4">30% Off Coupon Code</h4>
                                        <h4 className="six-fifteen">Verified by<span><a className="four-fifteen text-dark" href=""> Dr. Gabrielle Collier</a></span></h4>
                                        <p className="four-thirteen color-secondary mb-0">Total Uses: 0</p>
                                        <div className="bottom-line mt-2"></div>
                                        <p className="mt-2 mb-0"><a className="four-fifteen color-secondary" href="">View Detail</a></p>
                                    </div>
                                    <div className="col-lg-2 d-flex align-items-end justify-content-center">
                                        <button className="mb-3 ms-2 six-fifteen color-hexa border-0 py-2 text-nowrap px-4 graident-background-btn rounded-5 ">Reveal Code</button>
                                    </div>
                                </div>
                                <div className="d-flex mt-4 pt-2 justify-content-center">
                                    <button className="load-more border-0 py-2 px-4 rounded-5 five-seventeen">Load More</button>
                                </div>
                            </section>

                            <section>
                                <div className="d-flex mt-5 pt-4 mb-4 pb-1">
                                    <h1 className="seven-fourty m-0 ">Other Ways to<span className="four-fourty"> Save Money</span></h1>
                                    <div className="bottom-line ms-3 mb-2"></div>
                                </div>
                                <h3 className="seven-twentyseven mt-2">Shared Ride Option</h3>
                                <p className="four-fifteen">Opt for the shared ride service to split costs with other travelers while reducing your carbon footprint.</p>
                                <h3 className="seven-twentyseven mt-2">Flexible Rebooking for Missed Shuttles</h3>
                                <p className="four-fifteen">Groome Transportation allows you to rebook on the next available shuttle at no additional cost if you miss your scheduled ride due to delays.</p>
                                <h3 className="seven-twentyseven mt-2">Plan for Advance Reservations</h3>
                                <p className="four-fifteen">Booking your shuttle at least 24 hours in advance guarantees availability and saves you from potential last-minute expenses.</p>
                                <h3 className="seven-twentyseven mt-2">Free Parking at Loveland</h3>
                                <p className="four-fifteen">Take advantage of free 14-day parking at the Northern Colorado Regional Airport when traveling from the Loveland branch.</p>
                                <h3 className="seven-twentyseven mt-2">Newsletter</h3>
                                <p className="four-fifteen">Sign up for Groome Transportation's newsletter and receive the latest promotions, offers, and news directly to your inbox. Stay informed about new deals and updates.</p>
                            </section>

                            <section>
                                <div className="d-flex mt-5 pt-4 pb-5">
                                    <h1 className="seven-fourty m-0 ">Related Discount</h1>
                                    <div className="bottom-line ms-3 mb-2"></div>
                                </div>
                                <div className="d-flex justify-content-center row">
                                    <div className="col-sm-4 col-md-4">
                                        <div className="guide-card guide-shodow px-4 pt-4 rounded-4">
                                            <img className="rounded-4" src="/assets/discount-page/image 34.svg" alt="" />
                                            <div className="card-body mt-4">
                                                <div className="title d-flex justify-content-between">
                                                    <h2 className="six-twentytwo col-9">OLX Student Discount</h2>
                                                    <img className="icon" src="/assets/landing-page/Icon wrap.svg" alt="" />
                                                </div>
                                                <div className="text">
                                                    <p className="four-fifteen  mb-0 color-octa">Click arrow for more details</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <div className="guide-card guide-shodow px-4 pt-4 pb-3 rounded-4">
                                            <img className="rounded-4" src="/assets/discount-page/2149153258 1.svg" alt="" />
                                            <div className="card-body mt-4">
                                                <div className="title d-flex justify-content-between">
                                                    <h2 className="six-twentytwo col-9">OLX Student Discount</h2>
                                                    <img className="icon" src="/assets/landing-page/Icon wrap.svg" alt="" />
                                                </div>
                                                <div className="text">
                                                    <p className="four-fifteen  mb-0 color-octa">Click arrow for more details</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <div className="guide-card guide-shodow px-4 pt-4 pb-3 rounded-4">
                                            <img className="rounded-4" src="/assets/discount-page/image 26.svg" alt="" />
                                            <div className="card-body mt-4">
                                                <div className="title d-flex justify-content-between">
                                                    <h2 className="six-twentytwo col-9">OLX Student Discount</h2>
                                                    <img className="icon" src="/assets/landing-page/Icon wrap.svg" alt="" />
                                                </div>
                                                <div className="text">
                                                    <p className="four-fifteen mb-0 color-octa">Click arrow for more details</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mt-4 pt-2 justify-content-center">
                                    <button className="load-more border-0 py-2 px-4 rounded-5 five-seventeen">See More</button>
                                </div>
                            </section>
                        </div>
                        <div className="col-lg-3">
                            <div className="sidebar rounded-4 h-100">
                                <section className="p-4">
                                    <img src="/assets/reviews/Group 19917.svg" className="w-100 mb-3" alt="" />
                                    <p className="six-fifteen m-0 lh-sm">Overall Rating 4.7<span className="four-thirteen"> - Rating 15</span></p>
                                    <div className="d-flex justify-content-center twentyfour rating-yellow gap-1 mt-2">
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                    <button className="four-fifteen color-hexa border-0 py-2 px-4 graident-background-btn rounded-5">Write a Review</button>
                                    </div>
                                    <div className="d-flex flex-column gap-2 mt-3">
                                        <button className="bg-transparent sidebar-btn rounded-5 py-2 four-fifteen">Groome Trans... (Review)</button>
                                        <button className="bg-transparent sidebar-btn rounded-5 py-2 four-fifteen">Coupon & Discount</button>
                                    </div>
                                    <div className="d-flex justify-content-center gap-1 align-items-center mt-4 mb-3">
                                        <img className="border photogenic border-2 border-danger rounded-5" src="/assets/discount-page/photogenic.svg" alt="" />
                                        <div className="profile-info d-flex flex-column">
                                        <div className="d-flex align-items-end">
                                            <h2 className="mb-0 text-nowrap five-seventeen ">Yara Wilson</h2>
                                            <div className="bottom-line w-100 ms-2 mb-1"></div>
                                        </div>
                                        <p className="m-0 four-thirteen text-nowrap">Senior Operations Analyst</p>
                                    </div>
                                    </div>                
                                    <p className="four-thirteen">Loretta is a writer and editor who loves to help people save money. She specializes in finding the best deals and writing about smart spending strategies. When Loretta isn’t writing, she enjoys gardening and cooking. She has a green thumb and loves to grow her own vegetables.</p>
                                    <button className="load-more mt-2 mb-3 border py-2 px-4 rounded-5 five-seventeen">See Bio</button>
                                    <div>
                                        <div className="d-flex mt-3 pt-2">
                                            <h1 className="five-seventeen m-0 ">About</h1>
                                            <div className="bottom-line ms-3 mb-1"></div>
                                        </div>
                                        <p className="four-thirteen color-octa">Groome Transportation</p>
                                    </div>
                                    <p className="four-thirteen">"Groome Transportation makes travel easy, reliable, and stress-free. With comfortable shuttles, professional drivers, and convenient schedules, getting to the airport or your destination has never been smoother.
                                        Whether you're traveling for business or leisure, Groome ensures a safe and hassle-free ride, so you can sit back, relax, and enjoy the journey.</p>
                                    <div className="d-flex gap-4 mt-4 justify-content-center">
                                        <img src="/assets/landing-page/Facebook.svg" alt="" />
                                        <img src="/assets/landing-page/Instagram.svg" alt="" />
                                        <img src="/assets/landing-page/X logo.svg" alt="" />
                                    </div>
                                    <div className="d-flex mt-4 pt-2">
                                        <h1 className="five-seventeen m-0 text-nowrap">Popular Brands</h1>
                                        <div className="bottom-line ms-3 mb-1"></div>
                                    </div>
        <PopularStoresStyle2 />

                                    {/* <div className='d-flex mt-4 flex-wrap justify-content-center gap-4'>
                                        <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                        <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                    </div>
                                    <div className='d-flex mt-3 flex-wrap justify-content-center gap-4'>
                                        <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                        <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                    </div>
                                    <div className='d-flex mt-3 flex-wrap justify-content-center gap-4'>
                                        <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                        <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                    </div>
                                    <div className='d-flex mt-3 flex-wrap justify-content-center gap-4'>
                                        <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                        <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                    </div> */}
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="accordion-custom spacer">
                <div className="container accordion-width py-5">
                    <h2 className="seven-fourty text-center mb-5 mt-5">Frequently Asked Questions</h2>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item border rounded-4 mb-4">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button border rounded-4 six-twenty" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How do I use a coupon code?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body four-fifteen">
                                    Copy the code & apply it at checkout.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-4 mb-4">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button border rounded-4 six-twenty collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Are the deals updated daily?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body four-fifteen">
                                    Copy the code & apply it at checkout.                    </div>
                            </div>
                        </div>
                        <div className="accordion-item border rounded-4 mb-4">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button border rounded-4 six-twenty collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Do I need an account to access deals ?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body four-fifteen">
                                    Copy the code & apply it at checkout.                    </div>
                            </div>
                        </div>

                        <div className="accordion-item border rounded-4 mb-4">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button border rounded-4 six-twenty collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Is Zubile free to use?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body four-fifteen">
                                    Copy the code & apply it at checkout.                    </div>
                            </div>
                        </div>

                        <div className="accordion-item border rounded-4 mb-4">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button border rounded-4 six-twenty collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Are the deals updated daily?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body four-fifteen">
                                    Copy the code & apply it at checkout.                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}