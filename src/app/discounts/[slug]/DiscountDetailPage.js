"use client";

import React from "react";

export default function DiscountDetailPage({discount}) {
    return (
        <>
            {/* Banner Section */}
            <div className="container-fluid check-width d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center custom-heading-special">Best {discount?.title} Discounts</h1>
                        {/*{discount?.featured_image &&*/}
                        {/*    <div className="banner-special-page">*/}
                        {/*        <img*/}
                        {/*            src={discount?.featured_image}*/}
                        {/*            alt="Special Offer Banner"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*}*/}
                        <div className="spacial-content" dangerouslySetInnerHTML={{__html: discount?.content}}></div>
                    </div>
                </div>
            </div>

            {/* Military Discounts Section Above Footer */}
            <div className="container-fluid check-width">
                <h2 className="text-center mb-4 special-content">Exclusive {discount?.title} Discounts</h2>
                <div className="row" key={discount?.id}>
                    {discount?.stores && discount?.stores.map((store) => (
                        <div key={store?.id} className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                            <div key={`store-${store?.id}`}
                                className="card h-100 border-light shadow-sm"
                                style={{cursor: "pointer"}}
                                onClick={() => window.open(store?.url, "_blank")}
                            >
                                <img
                                    src={store?.media?.thumb}
                                    alt={store?.fullTitle}
                                    className="card-img-top"
                                    style={{borderTopLeftRadius: "0", borderTopRightRadius: "0"}}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{store?.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Table Section Above Footer */}
            {discount?.categories && discount?.categories.map((category) => (
                <div className="container-fluid check-width mt-5" key={category?.id}>
                    <h2 className="mb-4">{category?.name}</h2>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th style={{width: "5%"}}>
                                <center>#</center>
                            </th>
                            <th style={{width: "35%"}}>
                                <center>Brand</center>
                            </th>
                            <th style={{width: "35%"}}>
                                <center>Discount</center>
                            </th>
                            <th style={{width: "15%"}}>
                                <center>Details</center>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* Table Row 1 */}
                        <tr>
                            <td>
                                <center>1.</center>
                            </td>
                            <td>
                                <center>Itskins</center>
                            </td>
                            <td>
                                <center>Special Discount</center>
                            </td>
                            <td>
                                <center>
                                    <a
                                        href="https://savingsays.com/military-discounts/itskins/"
                                        style={{
                                            backgroundColor: "#f76b38",
                                            color: "#ffffff",
                                            padding: "14px 28px",
                                            borderRadius: "5px",
                                            textAlign: "center",
                                            textDecoration: "none",
                                            display: "inline-block"
                                        }}
                                    >
                                        Details
                                    </a>
                                </center>
                            </td>
                        </tr>
                        {/* Table Row 2 */}
                        <tr>
                            <td>
                                <center>2.</center>
                            </td>
                            <td>
                                <center>Under Armour</center>
                            </td>
                            <td>
                                <center>20% OFF</center>
                            </td>
                            <td>
                                <center>
                                    <a
                                        href="https://savingsays.com/military-discounts/under-armour/"
                                        style={{
                                            backgroundColor: "#f76b38",
                                            color: "#ffffff",
                                            padding: "14px 28px",
                                            borderRadius: "5px",
                                            textAlign: "center",
                                            textDecoration: "none",
                                            display: "inline-block"
                                        }}
                                    >
                                        Details
                                    </a>
                                </center>
                            </td>
                        </tr>
                        {/* Additional rows can be added in similar fashion */}
                        {/* Add more rows for more entries */}
                        </tbody>
                    </table>
                </div>
            ))}


            {/* Footer - Assuming you already have this in your layout */}
            <footer>
                {/* Your footer content here */}
            </footer>
        </>
    )
}