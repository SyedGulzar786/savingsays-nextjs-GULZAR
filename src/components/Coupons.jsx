"use client"

import React, {useEffect, useState} from "react";
import {Alert, Button, Pagination} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import {redirect, usePathname, useRouter, useSearchParams} from "next/navigation";
import CouponCard from "@/src/components/CouponCard";
import {ShowError, ShowOk} from "@/src/utils/common";
import "./coupons.css"
import {useVendorContext} from "@/src/app/vendor-provider";
import selectorEngine from "bootstrap/js/src/dom/selector-engine";
import {CouponSaves, UpdateCouponUsage} from "@/src/actions/CouponsAction";

const Coupons = ({store = null, coupons, loadMoreCoupons, hasMoreCoupons, loading, type = "store", attrs}) => {

    const {vendorData} = useVendorContext();

    const router = useRouter();
    const pathname = usePathname()

    const searchParams = useSearchParams()
    const couponId = searchParams.get('couponId')
    const page = searchParams.get('page');

    const [selectedCoupon, setSelectedCoupon] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [savedAmount, setSavedAmount] = useState(0)
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState('');
    const [feedback, setFeedback] = useState()
    const [copyButtonText, setCopyButtonText] = useState("Copy Code")

    useEffect(() => {
        if (!couponId) return;

        const localCoupon = JSON.parse(localStorage.getItem('coupon'));

        if (couponId !== localCoupon?.id) return;

        setSelectedCoupon(localCoupon);
        setShowModal(true)
    }, []);

    const handlePaginationChange = (page) => {
        if (!store) store = selectedCoupon?.store;

        router.push(store?.url + `/coupons?page=${page}`, {scroll: false})
    };

    const handleCouponClick = async (coupon) => {
        if (!store) store = selectedCoupon?.store;
        let currentUrl = pathname;
        let storeCouponUrl = store?.url + "/coupons?couponId=" + coupon.id;

        if (pathname.startsWith('/authors') || pathname.startsWith('/discounts') || pathname.startsWith('/categories') || pathname.startsWith('/blog')) {
            storeCouponUrl = `${currentUrl}?couponId=${coupon.id}`
        }

        if (page) {
            currentUrl = currentUrl + "?page=" + page
            storeCouponUrl = storeCouponUrl + "&page=" + page
        }

        await UpdateCouponUsage(store?.slug, coupon?.id);

        // console.log(pathname + `?page=${page}`)
        setSelectedCoupon(coupon);
        if (coupon?.couponType === 'code') {
            navigator.clipboard.writeText(coupon?.code);
        }
        window.open(storeCouponUrl, "_blank");

        localStorage.setItem('coupon', JSON.stringify(coupon))

        setTimeout(function () {
            redirect(coupon?.dealUrl)
        }, 1000)
    }

    const handleCloseModal = () => {
        setShowModal(false)
        localStorage.removeItem('coupon')
    }

    function handleLike() {
        setFeedback('like');
        setMessage(''); // Reset message on feedback change
    }

    function handleDislike() {
        setFeedback('dislike');
        setMessage(''); // Reset message on feedback change
    }

    const handleSubmitSaveAmount = async (e) => {
        e.preventDefault();
        if (feedback === 'like') {
            const response = await CouponSaves(store?.slug, selectedCoupon?.id, savedAmount);

            if (response.error === 1) {
                ShowError("Already Posted")
                return;
            }

            setMessage(`You saved $${savedAmount}`);
            ShowOk(`You saved $${savedAmount}`)
        } else if (feedback === 'dislike') {
            ShowError('Sorry to hear that! Your feedback is valuable to us.')
            setMessage('Sorry to hear that! Your feedback is valuable to us.');
        }
        setFeedback(null);
        setSavedAmount("");
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(selectedCoupon?.code);
        setCopyButtonText('Copied'); // Change button text to "Copied"
        setTimeout(() => {
            setCopyButtonText('Copy Code'); // Reset back after a few seconds
        }, 2000);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();

        fetch("/api/subscribers", {
            method: "POST",
            body: JSON.stringify({
                email,
                store_id: store?.id,
            })
        })
            .then(res => res.json())
            .then((response) => {
                if (response.error === 1) {
                    ShowError(response.message);
                    return;
                }
                //
                ShowOk(response.message);
                setEmail('');
            })
        // setMessage(`Subscribed with email: ${email}`);
        // setEmail('');
    };

    return (
        <div>
            {type !== "post" && coupons.length === 0 &&
                <Alert variant="info">No Coupons</Alert>
            }

            {coupons && coupons.length > 0 &&
                <>
                    {coupons.map((coupon, index) => (
                        <div key={coupon?.id}>
                            {index === 1 &&
                                <div dangerouslySetInnerHTML={{__html: vendorData?.settings?.advertisement}}></div>}

                            {index === 2 &&
                                <div dangerouslySetInnerHTML={{__html: vendorData?.settings?.advertisement}}></div>}

                            {index === 3 &&
                                <div dangerouslySetInnerHTML={{__html: vendorData?.settings?.advertisement}}></div>}

                            <CouponCard store={coupon?.store} key={coupon.id} coupon={coupon}
                                        type={type}
                                        onCouponClick={handleCouponClick}/>
                        </div>
                    ))}
                    <Modal show={showModal}
                           onHide={handleCloseModal}
                           backdrop="static"
                           keyboard={false}
                           dialogClassName="modal-600w"
                           aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                {selectedCoupon?.features && selectedCoupon.features.includes('verified') && (
                                    <span className="verified"><i
                                        className="fa fa-check"></i>&nbsp;Verified</span>
                                )}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5 className="modal-title">{selectedCoupon?.title}</h5>
                            {selectedCoupon?.couponType === 'code' &&
                                <>
                                    <div className='coupon-row'>
                                        <p><strong>{selectedCoupon?.code}</strong></p>
                                        <button className="btn btn-secondary" onClick={copyToClipboard}>
                                            {copyButtonText}
                                        </button>
                                    </div>
                                </>
                            }
                            <p className='text-center'>Did This Code/Deal Worked?</p>
                            <div className="mb-3 custom_target_btn">
                                <button className="btn btn-success d-flex" onClick={handleLike}>
                                    <i className="fa fa-thumbs-up"></i>&nbsp;Yes
                                </button>
                                <button className="btn btn-danger" onClick={handleDislike}>
                                    <i className="fa fa-thumbs-down"></i>&nbsp;No
                                </button>
                            </div>

                            <div className="d-flex justify-content-center">
                                <Button href={selectedCoupon?.dealUrl} target={"_blank"} className="btn btn-primary">Visit
                                    Store</Button>
                            </div>

                            {feedback === 'like' && (
                                <form className='save_Form' onSubmit={handleSubmitSaveAmount}>
                                    <h6>How much did you save?</h6>
                                    <input
                                        type="number"
                                        placeholder="Enter amount in $"
                                        value={savedAmount}
                                        onChange={(e) => setSavedAmount(e.target.value)}
                                        className="form-control mb-3"
                                        required
                                    />
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            )}
                            {feedback === 'dislike' && (
                                <p className='deslike_message'>Sorry to hear that! Your feedback is valuable to
                                    us.</p>
                            )}

                            {/* Message Display */}
                            {message && <p className="text-success mt-2">{message}</p>}

                            <form onSubmit={handleSubscribe} className="d-flex mt-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="form-control me-2"
                                />
                                <button type="submit" className="btn btn-secondary">Subscribe</button>
                            </form>
                        </Modal.Body>
                    </Modal>
                </>

            }

            {/* Pagination */}

            {hasMoreCoupons &&
                <>
                    {coupons?.length > 0 &&
                        <div className="pagination mt-4 flex gap-2">
                            <Button disabled={loading} onClick={loadMoreCoupons} variant="info" size="sm">
                                {loading ? 'Load more coupons...' : 'Load More...'}
                            </Button>
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default Coupons;