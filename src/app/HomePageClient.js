"use client"

import React, { useState } from 'react';
import PopularCategories from '../components/PopularCategories/PopularCategories';
import PopularStores from "@/src/components/PopularStores/PopularStores";
import { useVendorContext } from "@/src/app/vendor-provider";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import dynamic from "next/dynamic";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

const ReviewsSlider = dynamic(() => import("@/src/components/ReviewsSlider"), { ssr: false });
const SavingGuide = dynamic(() => import("@/src/components/SavingGuide"), { ssr: false });


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <ChevronRight size={44} color="black" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            // className={className}
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <ChevronLeft size={44} color="black" />
        </div>
    );
}

export default function HomePageClient() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { vendorData } = useVendorContext()
    var settings = {
        dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    var settings1 = {
        dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };



    return (
        <div key="main">

            <section className="mb-5">
                <div className="first-sec d-flex justify-content-center position-relative">

                    {/* <!-- Left Content --> */}
                    <div className="container first-sec-left-bg">
                        <h1 className="six-fiftynine">Save More, Spend Less!</h1>
                        <p className="five-seventeen color-primary mb-2">
                            Daily Deals & Verified Coupons!
                        </p>
                        <p className="four-fifteen color-tetra mb-4">
                            Find the best discount codes, exclusive offers, and money-saving tips – all in one place!
                        </p>
                        <div className="button-div d-flex gap-3">
                            <button className="six-fifteen graident-background-btn color-hexa border-0 py-2 px-4 rounded-5">
                                Browse Deals
                            </button>
                            <button className="six-fifteen bg-transparent border-1 color-penta border-color-btn py-2 px-4 rounded-5">
                                Subscribe & Save
                            </button>
                        </div>
                    </div>
                    {/* <!-- Right Image --> */}
                    <div className="d-none d-lg-block position-absolute container-fluid z-1 first-sec-right-bg h-100">
                        <img className="position-absolute" src="/assets/images/responsive-layout/exclusiveness.svg" alt="Decorative Graphic" />
                    </div>

                </div>
            </section>

            {/* <div className="relative w-full py-6">
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div ref={sliderRef} className="keen-slider">
        {data.map((item, idx) => (
          <div key={idx} className="keen-slider__slide">
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center space-y-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(data.length / 4) }).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div> */}

            <div className="container">
                <div className="pt-4 mb-4">
                    <div className="d-flex position-relative">
                        <h2 className="seven-fourty d-flex mb-0">Special <span className="ms-2 five-fourty">Discounts</span> </h2> <img
                            className="title-frame-secondary position-absolute" src="/assets/landing-page/Frame.svg" alt="" />
                        <div className="bottom-line ms-3 mb-3"></div>
                    </div>
                    <p className="mt-2 four-eighteen">Find exclusive savings based on who you are!</p>
                </div>
                <Slider {...settings} className='slider-container slider-1'>

                    <div className="slider-item d-flex">
                        <div className="discount-card">
                            <img src="/assets/landing-page/card-1.svg" alt="" />
                            <div className="card-content p-3">
                                <h2 className="five-seventeen mb-1">Student Discounts</h2>
                                <p className="four-twelve mb-0">Save on books, tech, and essentials.</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item d-flex">
                        <div className="discount-card">
                            <img src="/assets/landing-page/card-1.svg" alt="" />
                            <div className="card-content p-3">
                                <h2 className="five-seventeen mb-1">Student Discounts</h2>
                                <p className="four-twelve mb-0">Save on books, tech, and essentials.</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item d-flex">
                        <div className="discount-card">
                            <img src="/assets/landing-page/card-2.svg" alt="" />
                            <div className="card-content p-3">
                                <h2 className="five-seventeen mb-1">Teacher Discounts</h2>
                                <p className="four-twelve mb-0">deals on classroom and tech supplies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item d-flex">
                        <div className="discount-card">
                            <img src="/assets/landing-page/card-3.svg" alt="" />
                            <div className="card-content p-3">
                                <h2 className="five-seventeen mb-1">Military Discounts</h2>
                                <p className="four-twelve mb-0">offers for active duty and veterans.</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item d-flex">
                        <div className="discount-card">
                            <img src="/assets/landing-page/card-4.svg" alt="" />
                            <div className="card-content p-3">
                                <h2 className="five-seventeen mb-1">Nurse Discounts</h2>
                                <p className="four-twelve mb-0">Savings on medical essentials & more.</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item d-flex">
                        <div className="discount-card">
                            <img src="/assets/landing-page/card-1.svg" alt="" />
                            <div className="card-content p-3">
                                <h2 className="five-seventeen mb-1">Student Discounts</h2>
                                <p className="four-twelve mb-0">Save on books, tech, and essentials.</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <section className="my-5 py-4">
                <div className="container">
                    <div className="mb-5">
                        <div className="d-flex position-relative">
                            <h1 className="seven-fourty mb-0">Reviews </h1> <img className="title-frame position-absolute"
                                src="/assets/landing-page/Frame.svg" alt="" />
                            <div className="bottom-line ms-3 mb-3"></div>
                        </div>
                        <p className="four-eighteen">Verified reviews from happy savers!</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <a href="./reviews.html" className="text-dark text-decoration-none">
                                <div className="review-card p-4 rounded-5">
                                    <div className="position-relative">
                                        <img className="rounded-4 " alt="A woman holding shopping bags and a credit card in a mall"
                                            src="/assets/landing-page/image.svg" />
                                        <span className="badge position-absolute six-thirteen rounded-5 p-2">
                                            By CouponMaster
                                        </span>
                                    </div>
                                    <div>
                                        <h2 className="six-twentytwo mt-3">
                                            Coupons for Maximum Discounts
                                        </h2>
                                        <div className="four-fifteen d-flex justify-content-between align-items-center mt-4">
                                            <span>
                                                • 42.3K Views
                                            </span>
                                            <span>
                                                • 18 Comments
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <a href="./reviews.html" className="text-dark text-decoration-none">
                                <div className="review-card p-4 rounded-5">
                                    <div className="position-relative">
                                        <img className="rounded-4 " alt="A woman holding shopping bags and a credit card in a mall"
                                            src="/assets/landing-page/image.svg" />
                                        <span className="badge position-absolute six-thirteen rounded-5 p-2">
                                            By CouponMaster
                                        </span>
                                    </div>
                                    <div>
                                        <h2 className="six-twentytwo mt-3">
                                            Coupons for Maximum Discounts
                                        </h2>
                                        <div className="four-fifteen d-flex justify-content-between align-items-center mt-4">
                                            <span>
                                                • 42.3K Views
                                            </span>
                                            <span>
                                                • 18 Comments
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <a href="./reviews.html" className="text-dark text-decoration-none">
                                <div className="review-card p-4 rounded-5">
                                    <div className="position-relative">
                                        <img className="rounded-4 " alt="A woman holding shopping bags and a credit card in a mall"
                                            src="/assets/landing-page/image.svg" />
                                        <span className="badge position-absolute six-thirteen rounded-5 p-2">
                                            By CouponMaster
                                        </span>
                                    </div>
                                    <div>
                                        <h2 className="six-twentytwo mt-3">
                                            Coupons for Maximum Discounts
                                        </h2>
                                        <div className="four-fifteen d-flex justify-content-between align-items-center mt-4">
                                            <span>
                                                • 42.3K Views
                                            </span>
                                            <span>
                                                • 18 Comments
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>


                </div>
            </section>

            <section className="mb-5">
                <div className="container">
                    <div className="mb-4">
                        <div className="d-flex position-relative">
                            <h2 className="seven-fourty d-flex mb-0">Subscription <span className="ms-2 five-fourty">Boxes</span> </h2> <img
                                className="title-frame-secondary position-absolute" src="/assets/landing-page/Frame.svg" alt="" />
                            <div className="bottom-line ms-3 mb-3"></div>
                        </div>
                        <p className="mt-2 four-eighteen">Discover curated subscription boxes to enhance your lifestyle</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-4 ">
                            <div className="subscription-card">
                                <img src="/assets/landing-page/2148708051.svg" alt="" />
                                <div className="card-content p-3">
                                    <h2 className="five-seventeen">Treat Your Skin With 9 Best Self-Care Subscription Boxes</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <div className="subscription-card">
                                <img src="/assets/landing-page/Frame 427319039 (4).svg" alt="" />
                                <div className="card-content p-3">
                                    <h2 className="five-seventeen">5 Best Lipstick Subscription Boxes For The Perfect Lips</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4 ">
                            <div className="subscription-card">
                                <img src="/assets/landing-page/2150698891 1.svg" alt="" />
                                <div className="card-content p-3">
                                    <h2 className="five-seventeen">10 Best Coffee Subscription Boxes (UK)</h2>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* Buying Guides Section */}
            <section className="mb-5">
                <div className="container">
                    <div className="mb-4">

                        <div className="d-flex position-relative">
                            <h2 className="seven-fourty d-flex mb-0">Buying <span className="ms-2 five-fourty">Guides</span> </h2> <img
                                className="title-frame-secondary position-absolute" src="/assets/landing-page/Frame.svg" alt="" />
                            <div className="bottom-line ms-3 mb-3"></div>
                        </div>
                        <p className="mt-2 four-eighteen">Get expert advice on your next purchase:</p>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-lg-4">

                            <div className="guide-card guide-shodow p-3 rounded-4">
                                <img className="rounded-4" src="/assets/landing-page/2149153258 1.svg" alt="" />
                                <div className="card-body mt-5 mb-5">
                                    <div className="title d-flex justify-content-between">
                                        <h2 className="six-twentytwo col-9">22 Best Travel Accessories For Men</h2>
                                        <img className="icon" src="/assets/landing-page/Icon wrap.svg" alt="" />
                                    </div>
                                    <div className="text">
                                        <p className="four-fifteen mt-1 color-octa">Click arrow for more details</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <div className="guide-card guide-shodow p-3 rounded-4">
                                <img className="rounded-4" src="/assets/landing-page/2149153258 1.svg" alt="" />
                                <div className="card-body mt-5 mb-5">
                                    <div className="title d-flex justify-content-between">
                                        <h2 className="six-twentytwo col-9">22 Best Travel Accessories For Men</h2>
                                        <img className="icon" src="/assets/landing-page/Icon wrap.svg" alt="" />
                                    </div>
                                    <div className="text">
                                        <p className="four-fifteen mt-1 color-octa">Click arrow for more details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <div className="guide-card guide-shodow p-3 rounded-4">
                                <img className="rounded-4" src="/assets/landing-page/2149153258 1.svg" alt="" />
                                <div className="card-body mt-5 mb-5">
                                    <div className="title d-flex justify-content-between">
                                        <h2 className="six-twentytwo col-9">22 Best Travel Accessories For Men</h2>
                                        <img className="icon" src="/assets/landing-page/Icon wrap.svg" alt="" />
                                    </div>
                                    <div className="text">
                                        <p className="four-fifteen mt-1 color-octa">Click arrow for more details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <Slider {...settings1} className='slider-2'>
                        <div className="carousel-item blur-slide-one blur-slide d-flex justify-content-end align-items-center active pe-5">
                            <div className="d-flex flex-column justify-content-center align-items-end pe-4 h-100">
                                <h1 className="seven-sixty color-penta">New In UAE</h1>
                                <p className="five-seventeen color-penta">Check Out Our Travel Guide Fo UAE</p>
                                <button className="six-fifteen color-hexa border-0 py-2 px-4 graident-background-btn rounded-5">Explore
                                    more</button>
                            </div>
                            {/* <!-- <img src="/assets/landing-page/2148708051.svg" className="d-block blur-img w-100" alt="..."> --> */}
                        </div>
                        <div className="carousel-item blur-slide blur-slide-two">
                            {/* <!-- <img src="/assets/landing-page/2149153258 1.svg" className="d-block blur-img w-100" alt="..."> --> */}
                        </div>
                        <div className="carousel-item blur-slide blur-slide-three">
                            {/* <!-- <img src="/assets/landing-page/2150698891 1.svg" className="d-block blur-img w-100" alt="..."> --> */}
                        </div>
                    </Slider>
                </div>
            </section>


            <PopularStores />



        </div>
    )
}
