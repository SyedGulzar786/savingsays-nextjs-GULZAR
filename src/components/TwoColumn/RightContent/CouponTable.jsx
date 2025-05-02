import React from 'react';

const CouponTable = ({coupons}) => {
  // const coupons = [
  //   {
  //     code: 'PakWhe20',
  //     discount: '40% OFF',
  //     description: 'Pakwheels coupon ',
  //     averageSaving: '$25',
  //     firstIssued: '2024-07-05',
  //     issuedAgo: '(4d Ago)',
  //     isLikelyToWork: true,
  //   },
  //   {
  //     code: 'pak10',
  //     discount: '10%',
  //     description: 'Pakwheels coupon 1',
  //     averageSaving: '$25',
  //     firstIssued: '2024-07-05',
  //     issuedAgo: '(4d Ago)',
  //     isLikelyToWork: true,
  //   },
  // ];

  return (
    <div className='coupon_table'>
      <h3 className="custom_h3_col-9">
        Pakwheels Coupons & Deals Promo Code: Complete Timetable
      </h3>

      <table className="table store-table w-100">
        <thead>
          <tr>
            <th className="col-2">Promo Code</th>
            <th className="col-1">Discount</th>
            <th className="col-4">Descriptions</th>
            <th className="col-3">Average Saving</th>
            <th className="col-2">First Issued</th>
            <th className="text-center col-2">Likely to Work Today?</th>
          </tr>
        </thead>
        <tbody>
          {coupons && coupons.map((coupon, index) => (
            <tr key={index}>
              <td>
                <span className="text-nowrap">{coupon.code}</span>
              </td>
              <td>
                <span className="text-nowrap">{coupon.meta.badge_text}</span>
              </td>
              <td>
                <p className="mb-0">{coupon?.title}</p>
                {/* <small className="text-muted">(Selected Bundles and Sets)</small> */}
              </td>
              <td>{coupon.averageSaving}</td>
              <td>
                <div className="d-flex flex-column">
                  <span className="text-nowrap">{coupon.meta.used_count ?? 0}</span>
                  <small className="text-muted">{coupon?.issuedAgo}</small>
                </div>
              </td>
              <td className="text-center">
                <button className="btn btn-success">{coupon?.isLikelyToWork ? 'Yes' : 'No'}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CouponTable;
