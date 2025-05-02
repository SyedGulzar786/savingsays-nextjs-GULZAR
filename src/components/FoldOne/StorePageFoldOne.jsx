"use client";

import Link from 'next/link';

const StorePageFoldOne = ({store}) => {
    return (
        <div className="Fold-one">
            <div className="container my-4">
                {/* Heading */}
                <h1 className="text-left mb-2">
                    {store.name} Coupons &amp; Promo Codes
                </h1>

                {/* Paragraph */}
                {store?.subHeading !== null &&
                    <p className="text-left">
                        {store?.subHeading}
                    </p>
                }

                {store?.subHeading === null &&
                    <p className="text-left">
                        Best {store?.couponsCount} offers - Last Validated: {store?.latestCouponDate}
                    </p>
                }

                {/* jump fold */}
                <nav>
                    <ul className="breadcrumb menu-fonld-one">
                        <li className="menu-item">
                            <Link href="#about" passHref>
                                About
                            </Link>
                        </li>

                        {store?.faqs?.length > 0 &&
                            <li className="menu-item">
                                <Link href="#faqs" passHref>
                                    FAQ's
                                </Link>
                            </li>
                        }
                        {/*<li className="menu-item">*/}
                        {/*    <Link href="/products" passHref>*/}
                        {/*        Products*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default StorePageFoldOne;
