"use client"

import React, {useEffect, useState} from 'react';
import {GetPopularCategories} from "@/src/actions/GetPopularAction";

const PopularCategories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getPopularCategories = async () => {
            const {data} = await GetPopularCategories();
            setCategories(data);
        }
        getPopularCategories()
    }, []);

    // Define categories array here
    // const categories = [
    //     {name: 'Apparel & Clothing', link: 'apparel-clothing'},
    //     {name: 'Bilal Try', link: 'bilal-try'},
    //     {name: 'Fashion', link: 'apparel-clothing'},
    //     {name: 'Food', link: 'bilal-try'},
    //     {name: 'Perfumes', link: 'apparel-clothing'},
    //     {name: 'Smart Watches', link: 'bilal-try'},
    // ];

    return (
        <section className="lccd-sec bg-cover"
                 style={{backgroundImage: "url('https://savsays.isoftik.com/wp-content/uploads/2024/01/pc-bg.jpg')"}}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-end mb-4">
                    <div>
                        <h2 className="fw-bold display-6" style={{color: "#fff"}}>Popular Categories</h2>
                       
                    </div>
                    {/* Uncomment below to add "View More" link */}
                    {/* <a className="text-secondary text-base" href="#" className="view-more">View More <i className="far fa-angle-right"></i></a> */}
                </div>
                <ul className="list-unstyled justify-content-between">
                    {categories && categories.map((category) => (
                        <li key={category?.id}>
                            <a href={`/categories/${category?.slug}`}
                               className="text-white text-decoration-none">{category?.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default PopularCategories;
