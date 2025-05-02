"use client"

import React, { useEffect, useState } from 'react';
import { GetPopularStores } from "@/src/actions/GetPopularAction";

const PopularStores = () => {
    // Define categories array here
    const [stores, setStores] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await GetPopularStores();
            setStores(data);
        }
        fetchData()
    }, []);

    return (
        
        
        <section className="carouseil-slider mt-4 mb-4 spacer">
            <div className="container">
                <div className="">
                    <div className="d-flex position-relative">
                        <h2 className="seven-fourty d-flex mb-0">Popular <span className="ms-2 five-fourty">Stores</span> </h2> <img
                            className="title-frame-secondary position-absolute" src="/assets/landing-page/Frame.svg" alt="" />
                        <div className="bottom-line ms-3 mb-3"></div>
                    </div>
                    <p className="mt-2 four-eighteen">Enjoy the latest deals and exclusive coupons for your favorite Stores.</p>
                </div>
                <div className="row">
                    <div className="pt-0 carouseil gap-5">
                        {/* {console.log(stores[0].slug)} */}
                        {stores && stores.map((store) => (
                                <img key={store.slug} className="logo logos-slider-div"
                                //  src={store?.media?.thumb}
                                src={store?.media?.thumb ?? 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'}
                                srcSet={store?.media?.srcSet}
                                alt={store?.media?.alt}
                                title={store?.media?.title}
                                />
                        ))}
                        {stores && stores.map((store) => (
                                <img key={store.slug} className="logo logos-slider-div"
                                //  src={store?.media?.thumb}
                                src={store?.media?.thumb ?? 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'}
                                srcSet={store?.media?.srcSet}
                                alt={store?.media?.alt}
                                title={store?.media?.title}
                                />
                        ))}
                        {/* {stores && stores.map((store) => (
                                <img key={store.slug} className="logo logos-slider-div" src={store?.media?.thumb} />
                        ))} */}
                    </div>
                </div>
            </div>
        </section>
        // <section className="lccd-sec bg-cover" style={{}}>
        //     <div className="container">
        //         <div className="d-flex justify-content-between align-items-end mb-4">
        //             <div>
        //                 <h2 className="fw-bold display-6" style={{color: "#000"}}>Popular Stores</h2>
        //             </div>
        //             {/* Uncomment below to add "View More" link */}
        //             {/* <a className="text-secondary text-base" href="#" className="view-more">View More <i className="far fa-angle-right"></i></a> */}
        //         </div>
        //         <ul className="list-unstyled justify-content-between">
        //             {stores && stores.map((store) => (
        //                 <li key={store?.slug}>
        //                     <a href={store?.url} className="text-black text-decoration-none">{store?.name}</a>
        //                 </li>
        //             ))}
        //         </ul>
        //     </div>
        // </section>
    );
};

export default PopularStores;
