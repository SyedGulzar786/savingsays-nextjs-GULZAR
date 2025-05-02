import React from 'react'
import AboutUs from "@/src/components/TwoColumn/RightContent/AboutUs";
import PopularCategories from '@/src/components/PopularCategories/PopularCategories';
import PopularStores from '@/src/components/PopularStores/PopularStores';

export default function AboutPage() {
    return (
        <div>


            <div className="container my-5 about-page">
                <div className="row">


                    {/* Second Column (9 columns) */}
                    <div className="col-md-12">


                        <AboutUs/>


                    </div>

                </div>

            </div>
{/* 
            <PopularCategories/> */}

            <PopularStores/>


        </div>
    )
}
