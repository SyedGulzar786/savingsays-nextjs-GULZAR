"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Rating } from "react-simple-star-rating";
import '@fortawesome/fontawesome-free/css/all.css';
import { useVendorContext } from "@/src/app/vendor-provider";
import Header from "@/src/components/Header/Header";
import { ShowError, ShowOk } from "@/src/utils/common";
import { format } from "date-fns/format";
import { SubmitReview } from "@/src/actions/ReviewsAction";
import "./storeReviewPageClient.css";
import PopularStoresStyle2 from "@/src/components/PopularStores/PopularStoresStyle2";
export default function StoreReviewPageClient({ store }) {

    const [ratingValue, setRatingValue] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")

    const { isUserLoggedIn } = useVendorContext();

    const childRef = useRef();

    // State to keep track of the selected rating
    // const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        if (!isUserLoggedIn) {
            childRef.current.handleLoginModal();
            return;
        }
        setRatingValue(rate)
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const updateRating = (rate) => {
        setRatingValue(rate);
    };

    const handleReviewSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        await SubmitReview({
            storeSlug: store?.slug,
            title,
            content,
            rating: ratingValue
        })
            .then((response) => {
                if (response.error === 1) {
                    ShowError(response.message);
                    setLoading(false);
                    return;
                }

                ShowOk("Review posted successfully");
                resetForm(e.target);
                setLoading(false);
                setIsModalOpen(false)
            })
            .catch((err) => {
                ShowError("Server error")
                setLoading(false);
            });
    };

    const resetForm = (form) => {
        form.reset();
        setTitle("")
        setContent("")
        setRatingValue(0)
    }


    return (
        <>
            <div>
                <Header ref={childRef} />

                <section className="parent-section mt-4 pt-2">
                    <div className="container p-0">
                        {/* <!-- if needed add p-0 --> */}
                        <div className="row">
                            <div className="col-lg-9">

                                <section>
                                    <div className="reviews-first-sec rounded-5 p-4">
                                        <div className="row align-items-center mt-1 justify-content-between">
                                            <div className='col-lg-7'>
                                                <h3 className="seven-twentyseven">{store?.name} Reviews</h3>
                                            </div>

                                            <div className="col-lg-5 reviews-stars d-flex justify-content-end">
                                                <h3 className="seven-twentyseven m-0 my-auto">0.00</h3>
                                                <div className="rating-divider mx-2"></div>
                                                <div className="d-flex border thirtytwo bg-white rating-yellow rounded-4 px-3">
                                                    {/* <i className="fas fa-star rating-star"></i>
                                                    <i className="fas fa-star rating-star"></i>
                                                    <i className="fas fa-star rating-star"></i>
                                                    <i className="fas fa-star rating-star"></i>
                                                    <i className="fas fa-star rating-star"></i> */}
                                                    
                                                    {[...Array(5)].map((_, i) => (
                                                            <i key={i} className="fas fa-star rating-star"></i>
                                                        ))}

                                                    {/* <Rating
                                                    className='rating-star'
                                                        value={ratingValue}
                                                        onClick={handleRating}
                                                        iconsCount={5}
                                                    /> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 pe-5 me-2">
                                            <p className="four-eighteen">There are currently no reviews for {store.name}.
                                                We believe that behind every review is an experience that matters, and we value
                                                every feedback. Be the first to write a review and share what you think about it! <a
                                                    className="five-seventeen color-octa" href="">Create a review</a></p>
                                        </div>
                                    </div>
                                </section>

                                {/* <section>
                                    <div className="row mt-4">
                                        <div className="topping"></div>
                                        <div className="overall-rating">Overall Rating</div>
                                        <div className="col-md-6 col-lg-6 col-12">

                                            <div className="rating-breakdown mt-3 ">
                                                <div className="par-star-one d-flex justify-content-center align-items-center mb-3">
                                                    <div className="hey mx-2 text-nowrap">5 Stars</div>
                                                    <div className="progress-bar"></div>
                                                    <di className="zero">0</di>
                                                </div>
                                                <div className="par-star-one d-flex justify-content-center align-items-center mb-3">
                                                    <div className="hey mx-2 text-nowrap">4 Stars</div>
                                                    <div className="progress-bar"></div>
                                                    <div className="zero">0</div>
                                                </div>
                                                <div className="par-star-one d-flex justify-content-center align-items-center mb-3">
                                                    <div className="hey mx-2 text-nowrap">3 Stars</div>
                                                    <div className="progress-bar"></div>
                                                    <div className="zero">0</div>
                                                </div>
                                                <div className="par-star-one d-flex justify-content-center align-items-center mb-3">
                                                    <div className="hey mx-2 text-nowrap">2 Stars</div>
                                                    <div className="progress-bar"></div>
                                                    <div className="zero">0</div>
                                                </div>
                                                <div className="par-star-one d-flex justify-content-center align-items-center mb-3">
                                                    <div className="hey mx-2 text-nowrap">1 Stars</div>
                                                    <div className="progress-bar"></div>
                                                    <div className="zero">0</div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-md-6 col-lg-6">

                                            <div className="rating-breakdown mt-2">
                                                <div
                                                    className="par-star-two w-100 d-flex justify-content-between align-items-center gap-3 mt-3 mb-2 ">

                                                    <div className="hey-two  text-nowrap">Good Value</div>
                                                    <div className="stars ">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>

                                                </div>
                                                <div
                                                    className="par-star-two w-100 d-flex justify-content-between align-items-center gap-3 mt-3 mb-2">

                                                    <div className="hey-two  text-nowrap">Price & Quality</div>
                                                    <div className="stars ">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>

                                                </div>
                                                <div
                                                    className="par-star-two w-100 d-flex justify-content-between align-items-center gap-3 mt-3 mb-2">

                                                    <div className="hey-two  text-nowrap">Shipping & Delivery</div>
                                                    <div className="stars ">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>

                                                </div>
                                                <div
                                                    className="par-star-two w-100 d-flex justify-content-between align-items-center gap-3 mt-3 mb-2">

                                                    <div className="hey-two  text-nowrap">Customer Service</div>
                                                    <div className="stars ">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>

                                                </div>
                                                <div className="par-star-two w-100 d-flex justify-content-between align-items-center gap-3 mt-3 mb-2">

                                                    <div className="hey-two  text-nowrap">Return Policy</div>
                                                    <div className="stars ">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>

                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                </section> */}

                                <div className="overall-rating">Overall Rating</div>
                                <div className="row bg-custom-review sidebar rounded-5 d-flex justify-content-between align-items-center p-4 mt-3">
                                    <div className="col-md-5 col-lg-5 col-sm-12 d-flex justify-content-start align-items-center">
                                        <div className="rating-breakdown w-100 mt-3">
                                            {[5, 4, 3, 2, 1].map((star) => (
                                                <div
                                                    key={star}
                                                    className="par-star-one mt-4 w-100 d-flex justify-content-start align-items-center mb-3"
                                                >
                                                    <div className="hey mx-2 poppins-regular fs-6">{star} Stars</div>
                                                    <div className="progress-bar"></div>
                                                    <div className="zero poppins-regular fs-6">0</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-md-7 col-lg-7 d-flex justify-content-start align-items-center">
                                        <div className="rating-breakdown bg-in w-100 mt-2">
                                            {[
                                                "Good Value",
                                                "Price & Quality",
                                                "Shipping & Delivery",
                                                "Customer Service",
                                                "Return Policy",
                                            ].map((label, index) => (
                                                <div
                                                    key={index}
                                                    className="par-star-two mt-3 w-100 d-flex justify-content-end align-items-center gap-5  mb-2"
                                                >
                                                    <div className="hey-two text-nowrap poppins-regular fs-6">{label}</div>
                                                    <div className="stars">
                                                        {[...Array(5)].map((_, i) => (
                                                            <i key={i} className="fas fa-star rating-yellow twentythree"></i>
                                                        ))}
                                                    </div>
                                                    {/* <div className="zero">0.0</div> */}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className='row border rounded-5 py-2 px-4 mt-5 bg-light-grey align-items-center justify-content-between'>
                                    <div className='d-flex col-lg-6 col-sm-12'>
                                        <div className='border border-danger border-1 rounded-5'>
                                            <img src="/assets/reviews/photo.svg" alt="" />
                                        </div>
                                        <input className='four-fifteen border-0 ms-2' placeholder='Write a Review for this store!' type="text" />
                                    </div>
                                    <div className="d-flex col-lg-6 col-sm-12 justify-content-end thirtytwo rating-grey gap-2">
                                        {/* <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i> */}
                                        <div className="write-stars">
                                            <Rating
                                                value={ratingValue}
                                                onClick={handleRating}
                                                iconsCount={5}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <section>
                                    <div className="d-flex mt-5 pt-4 mb-4 pb-1">
                                        <h1 className="seven-fourty m-0 text-nowrap">Reviews</h1>
                                        <div className="bottom-line ms-3 mb-2"></div>
                                    </div>
                                </section>

                                <section>
                                    <div className="feedback-card mt-3 p-4 rounded-5">
                                        <div className="feed-back-review d-flex align-items-center">
                                            <div className="d-flex bg-white twentythree rating-grey rounded-5 gap-3 px-3 py-2">
                                                {/* <i className="fas fa-star rating-star"></i>
                                                <i className="fas fa-star rating-star"></i>
                                                <i className="fas fa-star rating-star"></i>
                                                <i className="fas fa-star rating-star"></i>
                                                <i className="fas fa-star rating-star"></i> */}
                                                <Rating
                                                    value={ratingValue}
                                                    onClick={handleRating}
                                                    iconsCount={5}
                                                />
                                            </div>
                                            <p className="four-fifteen mt-3 ms-3">Select Your Rating</p>
                                        </div>
                                        <textarea className="review-textarea my-2 p-3 four-fifteen border-0 rounded-4 w-100" placeholder="Write a Review"></textarea>
                                        <div className="text-end">
                                            <button className="four-fifteen color-hexa border-0 py-2 px-4 graident-background-btn rounded-5">Submit Review</button>
                                        </div>
                                    </div>
                                </section>

                                {store?.reviews && store?.reviews?.length > 0 &&
                                    <section>
                                        {store?.reviews && store?.reviews.map((review) => (
                                            <div className="review feedback-card rounded-5 p-4 mt-4">
                                                <div className="d-flex">
                                                    <p className="m-0 four-fifteen"><time>{format(review?.createdAt, 'MMMM dd, yyyy')}</time></p><p className="m-0 ms-3 four-fifteen"><span className="me-1">•</span> 01:15 pm</p>
                                                </div>
                                                <img src="/assets/reviews/Line 28.svg" className="w-100" alt="" />
                                                <div className="d-flex thirtytwo rating-yellow gap-2 mt-2 mb-3">
                                                    {/* <i className="fas fa-star rating-star"></i>
                                                    <i className="fas fa-star rating-star"></i>
                                                    <i className="fas fa-star rating-star"></i>
                                                    <i className="fas fa-star rating-star"></i>
                                                    <i className="fas fa-star rating-star"></i> */}
                                                    <div className="stars-code">
                                                        <Rating
                                                            initialValue={review?.rating}
                                                            readonly={true}
                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="five-seventeen mb-4">{review?.content}</h4>
                                                <div className="d-flex mt-1">
                                                    <img className='review-avatar' src={review?.customer?.avatar}
                                                        alt={review?.customer.name} />
                                                    <div className="ms-2">
                                                        <h5 className="five-seventeen m-0">{review?.customer?.name || review?.customer?.email}</h5>
                                                        <p className="four-thirteen m-0 color-tertiary">Entrepreneur</p>
                                                    </div>
                                                </div>
                                                <div className="bottom-line my-3"></div>
                                                <div className="d-flex">
                                                    <img src="/assets/reviews/mynaui_like-solid.svg" alt="" />
                                                    <p className="four-fifteen ms-1 my-auto">15 Likes</p>
                                                    <div className="rating-divider  mx-3"></div>
                                                    <img src="/assets/reviews/Vector.svg" alt="" />
                                                    <p className="four-fifteen ms-1 my-auto">Report</p>
                                                </div>
                                            </div>
                                        ))}
                                    </section>
                                }



                                <div className="d-flex mt-4 pt-2 justify-content-center mb-4">
                                    <button className="load-more border-0 py-2 px-4 rounded-5 five-seventeen">Load More</button>
                                </div>

                            </div>
                            <div className="col-lg-3">
                                <div className="sidebar rounded-4 h-100">
                                    <section className="p-4">
                                        {/* <img src="/assets/reviews/Group 19917.svg" className="w-100 mb-3" alt="" /> */}
                                        <img src={store?.media?.thumb ?? "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"}
                                            srcSet={store?.media?.srcSet}
                                            alt="Product" className="w-100 mb-3 reviews-sidebar-img" />
                                        <button className="text-start text-center py-2 mt-3 color-hexa border-0 w-100 review-button-bg four-fifteen rounded-5">Reviews</button>
                                        <Link href={store?.url + "/coupons"} className="text-start text-center py-2 mt-3 four-fifteen w-100 rounded-5 bg-transparent border-1 border-muted">
                                            <button className="text-start text-center py-2 mt-3 four-fifteen w-100 rounded-5 bg-transparent border-1">Coupons & Promo Codes</button>
                                        </Link>
                                        <button className="text-start text-center py-2 mt-3 four-fifteen w-100 rounded-5 bg-transparent border-1">Senior Discounts</button>
                                        <div className="d-flex mt-4 pt-2">
                                            <h1 className="five-seventeen m-0 text-nowrap">Popular Brands</h1>
                                            <div className="bottom-line ms-3 mb-1"></div>
                                        </div>
                                        {/* <div className='d-flex mt-3 flex-wrap justify-content-center gap-4'>
                                            <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                            <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                        </div> */}
                                        <PopularStoresStyle2 />

                                        {/* <div className="d-flex mt-4 pt-2">
                                            <h1 className="five-seventeen m-0 text-nowrap">Similar Stores</h1>
                                            <div className="bottom-line ms-3 mb-1"></div>
                                        </div>
                                        <div className='d-flex mt-3 flex-wrap justify-content-center gap-4'>
                                            <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                            <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                        </div>                                    <div className='d-flex mt-3 flex-wrap justify-content-center gap-4'>
                                            <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                            <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                        </div>                                    <div className='d-flex mt-3 flex-wrap justify-content-center gap-4'>
                                            <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                            <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                        </div>                                    <div className='d-flex mt-3 flex-wrap justify-content-center gap-4'>
                                            <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                            <img src="/assets/landing-page/sidebar-brand.svg" alt="" />
                                        </div> */}
                                    </section>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </div>


            {/* <Modal show={isModalOpen} onHide={handleModalClose} centered dialogClassName="modal-45w">
                <Modal.Header closeButton>
                    <Modal.Title>Share your thoughts with other customers now!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BlockUi tag="span" className="d-block my-4" blocking={loading}>
                        Overall Rating *
                        <div>
                            <Rating
                                iconsCount={5}
                                initialValue={ratingValue}
                                onClick={updateRating}
                                showTooltip={true}
                                tooltipArray={[
                                    "Terrible",
                                    "Poor",
                                    "Average",
                                    "Very good",
                                    "Excellent"
                                ]}
                            />
                            <hr/>
                            <Form style={{paddingTop: "20px"}} name="Review" onSubmit={handleReviewSubmit}>
                                <Form.Label htmlFor="title">Title of Your Review *</Form.Label>
                                <Form.Control
                                    id="title"
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Give your review a headline"
                                    autoFocus
                                    onChange={(e) => setTitle(e.currentTarget.value)}
                                />
                                <Form.Label htmlFor="content">Add Your Review *</Form.Label>
                                <Form.Control
                                    id="content"
                                    autoComplete="off"
                                    type="text"
                                    as="textarea"
                                    placeholder="Write your review to help others learn about this brand..."
                                    onChange={(e) => setContent(e.currentTarget.value)}
                                />
                                <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{fontSize: "13px"}}>
                                    <Form.Check size="sm" type="checkbox"
                                                required={true}
                                                label="I certify that this review is based on my own experience and that I am in no way affiliated with this business, and have not been offered any incentive or payment from the business to write this review."/>
                                </Form.Group>
                                <Form.Group className="d-flex justify-content-center">
                                    <Button variant="primary" style={{marginTop: "20px"}} type="submit"
                                            disabled={loading}>
                                        {loading ? 'Posting review...' : 'Post Review'}
                                    </Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </BlockUi>
                </Modal.Body>
            </Modal> */}

        </>

    );
}
