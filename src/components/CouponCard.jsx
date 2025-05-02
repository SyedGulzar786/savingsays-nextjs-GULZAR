"use client"

import {useState} from 'react';
import {formatDistanceToNow} from 'date-fns';
import {format} from "date-fns/format";
import Link from "next/link";
import {Badge} from "react-bootstrap";

const CouponCard = ({store = null, coupon, onCouponClick, type = 'store'}) => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const handleCouponClick = (coupon) => {
        onCouponClick(coupon);
    }

    const toggleDetails = () => {
        setIsDetailsOpen(!isDetailsOpen);
    };

    return (
        <div className="store-coupon-row">
            <div className="item-couponBox-loop">
                <div className="couponBox cdBox">
                    <div className="TCBx">
                        <div className="recommended-text flex flex-row">
                            {/*{coupon?.tags && coupon?.tags?.map((tag, index) => (*/}
                            {/*    <span key={index}>{tag}</span>*/}
                            {/*))}*/}
                            {coupon?.features && coupon.features.includes('exclusive') && (
                                <span>Exclusive</span>
                            )}

                            {coupon?.features && coupon.features.includes('Popular') && (
                                <span>Popular</span>
                            )}
                            {coupon?.features && coupon.features.includes('recommended') && (
                                <span>Recommended</span>
                            )}
                        </div>
                        <div className="ICB-Img">
                            {type === 'store' && coupon?.badgeText ?
                                <strong>{coupon?.badgeText}</strong>
                                :
                                <img src={(type === 'store') ? coupon?.thumb : coupon?.store?.media?.thumb}
                                     alt={store?.name}
                                     style={{objectFit: "contain", aspectRatio: "4/2"}}/>
                            }
                        </div>

                        <div className="ICB-content">
                            <div className="left">
                                {/*{coupon?.features && coupon.features.includes('verified') && (*/}
                                {/*    <span className="verified">Verified</span>*/}
                                {/*)}*/}

                                <Badge style={{
                                    width: "fit-content",
                                    marginBottom: '5px',
                                    backgroundColor: '#9ba5af !important'
                                }} bg="secondary">
                                    {coupon?.couponType === 'deal' ?
                                        <span className="deal">Sale</span> :
                                        <span className="coupon">Code</span>
                                    }
                                </Badge>
                                <h2 className="py-2">{coupon.title}</h2>
                                <p style={{marginBottom: '0px'}} className="list-disc">Verified By <Link
                                    style={{color: '#df3737'}} href={coupon?.author?.url}>{coupon?.author?.name}</Link>
                                </p>
                                <p className="vuv">(Total Uses: {coupon?.usedCount ?? 0})</p>
                            </div>
                            <div className="right">
                                <a
                                    className={`nawc ${coupon?.couponType === 'deal' ? 'deal-button' : 'code-button'}`}
                                    onClick={(e) => handleCouponClick(coupon)}
                                    style={{cursor: 'pointer'}}
                                >
                                    <div className="nawc-typs">
                                        {/* Render the coupon code only if the coupon is a code */}
                                        {coupon?.couponType !== 'deal' && (
                                            <span className="code">{coupon.code}</span>
                                        )}

                                        {/* Conditionally render text based on coupon type */}
                                        {coupon?.couponType === 'deal' ? (
                                            <span className="get-code">Deal Now</span>  // "Deal Now" button
                                        ) : (
                                            <span className="get-code">Reveal Code</span>  // "Reveal Code" button
                                        )}
                                    </div>
                                </a>


                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px w-full bg-gray-300" style={{margin: 0}}/>

                <div className='FullCoupon_btn'>
                    <button onClick={toggleDetails} className="btn btn-link">
                        View Details <i className={`fa ${isDetailsOpen ? 'fa-minus' : 'fa-plus'}`}></i>
                        {/*
              {isDetailsOpen ? (
                  <>
                    View Details <i className="fa fa-minus"></i>
                  </>
              ) : (
                  <>
                    View Details <i className="fa fa-plus"></i>
                  </>
              )}*/}
                    </button>

                    {isDetailsOpen && <hr className="h-px w-full bg-gray-300" style={{margin: 0}}/>}

                    {/* Details Section */}
                    {isDetailsOpen && (
                        <div className="details-coupons-box dcb show">
                            <div className='para-coupon' dangerouslySetInnerHTML={{__html: coupon?.content}}></div>
                            <ul className="dtls d-flex custom-pd">
                                {coupon?.endsAt &&
                                    <>
                                        <li className="label">
                                            <strong>Expire in:</strong>
                                            <p className="p-coupons-custom">{(coupon?.endsAt) ? formatDistanceToNow(new Date(coupon.endsAt), {addSuffix: false}) + ` (${format(coupon?.endsAt, 'yyyy-MM-dd')})` : "Never"}</p>
                                        </li>
                                    </>
                                }
                            </ul>

                            <strong>Details:</strong>
                            <ul className="dtls d-flex flex-column custom-bluit ">
                                {coupon?.latestCouponSaves !== null &&
                                    <li style={{marginBottom: '0px'}} className="list-disc">Last Reported
                                        Working {coupon?.latestCouponSaves}

                                    </li>
                                }
                                <li style={{marginBottom: '0px'}} className="list-disc">Coupon Was Used
                                    Last {coupon?.lastUsedFormatted} <span
                                        style={{color: '#8c5f00'}}>(Total Uses: {coupon?.usedCount ?? 0})</span>
                                </li>

                                <li style={{marginBottom: '0px'}} className="list-disc">Average saving from this
                                    coupon: <strong>{coupon?.averageSavings}</strong></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CouponCard;
