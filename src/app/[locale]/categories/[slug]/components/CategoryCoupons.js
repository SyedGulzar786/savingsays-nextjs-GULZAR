"use client"

import {Alert} from "react-bootstrap";
import React from "react";
import CouponCard from "@/src/components/CouponCard";
import Coupons from "@/src/components/Coupons";

export default function CategoryCoupons({coupons, meta, links}) {
    return (
        <>
            {coupons.length === 0 &&
                <Alert variant="info">No Coupons</Alert>
            }

            {coupons && coupons?.length > 0 &&
                <>
                    {coupons.map((coupon) => (
                        <Coupons
                            store={coupon?.store}
                            key={coupon.id}
                            coupon={coupon}
                            type="category"/>
                        // <CouponCard store={coupon?.store} key={coupon.id} coupon={coupon} type="category" />
                    ))}
                </>
            }
        </>
    )
}