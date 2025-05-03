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
              {coupon?.discount}
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
          
          </p>
          <p className="four-thirteen">
          {coupon?.title}:
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
    );
};

export default CouponCard;


