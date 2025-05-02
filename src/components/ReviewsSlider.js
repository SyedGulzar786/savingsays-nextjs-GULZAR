"use client"

import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from "next/link";
import {GetPostsByCategory} from "@/src/actions/BlogAction";

export default function ReviewsSlider() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await GetPostsByCategory('reviews?per_page=10');
            setPosts(data);
        }
        fetchData();
    }, []);

    return (
        <div className="col-12">
            <button className="carousel-control-prev" type="button">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-inner">
                <Swiper
                    centeredSlides={false}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        500: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    navigation={{
                        nextEl: '.carousel-control-next',
                        prevEl: '.carousel-control-prev'
                    }}
                    spaceBetween={0}
                    modules={[Navigation]}
                    lazyPreloaderClass="swiper-lazy-preloader"
                    simulateTouch={false}
                    scrollbar={{
                        draggable: false
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {posts && posts.map((post) => (
                        <SwiperSlide key={post.id}>
                            <div className="carousel-item active">
                                <div className="card">
                                    <div className="img-wrapper">
                                        <img
                                            src={post?.media?.reviewCard ?? '/assets/images/placeholders/450x300.png'}
                                            width="450"
                                            height="300"
                                            className="d-block w-100" alt={post?.title} loading="lazy"/>
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <Link href={`/blog/${post?.slug}`}>
                                                {post?.title}
                                            </Link>
                                        </h5>
                                        <p className="card-text">{post?.excerpt}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
