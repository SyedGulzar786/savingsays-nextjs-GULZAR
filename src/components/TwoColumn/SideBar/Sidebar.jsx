"use client";

import React, {useState} from 'react';
import Link from 'next/link';
import {ShowError, ShowOk, Toast} from "@/src/utils/common";
import BlockUi from "@availity/block-ui";
import ContactUsReport from "@/src/components/TwoColumn/RightContent/ContactUsReport";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTiktok, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import {usePathname, useRouter} from "next/navigation";
import {SubmitCoupon} from "@/src/actions/CouponsAction";

const Sidebar = ({store}) => {
    const pathname = usePathname()

    const [couponLoading, setCouponLoading] = useState(false);
    const [offerType, setOfferType] = useState('deal');
    const [code, setCode] = useState(null);
    const [affiliateUrl, setAffiliateUrl] = useState(null);
    const [expiryDate, setExpiryDate] = useState(null);
    const [offerTitle, setOfferTitle] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);  // Make sure this is named correctly

    const handleOfferTypeChange = (e) => {
        setOfferType(e.target.value);
    };

    const resetForm = (form) => {
        form.reset();
        setOfferTitle(null);
        setOfferType('deal');
        setCode(null);
        setExpiryDate(null);
        setAffiliateUrl(null);
    };

    const handleSubmitCoupon = async (e) => {
        e.preventDefault();

        setCouponLoading(true);

        await SubmitCoupon({
            storeSlug: store?.slug,
            offerType,
            code,
            affiliateUrl,
            expiryDate,
            offerTitle,
        })
            .then((response) => {
                if (response.error === 1) {
                    ShowError(response.message);
                    setCouponLoading(false);
                    return;
                }

                ShowOk("Your coupon has been submitted");
                resetForm(e.target);
                setCouponLoading(false);
            });
    };

    // Assuming vendorData is part of the store object
    const vendorData = store?.vendorData;

    const renderCompetitor = () => {
        const competitors = store?.similarStores;

        if (competitors.length === 0) return;

        if (competitors.length === 1) {
            return <a href={competitors[0].url}>{competitors[0].name}</a>;
        }
        const formattedCompanies = competitors.slice(0, -1).map(company => (
            <a key={company.url} href={company.url}>{company.name}</a>
        ));
        return (
            <>
                {formattedCompanies?.reduce((prev, curr) => [prev, ', ', curr])}
                {' and '}
                <a href={competitors[competitors.length - 1].url}>
                    {competitors[competitors.length - 1].name}
                </a>
            </>
        );
    };

    // const renderCategories = () => {
    //     const categories = store?.categories;
    //
    //     if (categories.length === 1) {
    //         return <a href={`/categories/${categories[0].slug}`}>{categories[0].name}</a>;
    //     }
    //     const formattedCompanies = categories.slice(0, -1).map(company => (
    //         <a key={company.slug} href={`/categories/${company.slug}`}>{company.name}</a>
    //     ));
    //     return (
    //         <>
    //             {formattedCompanies.reduce((prev, curr) => [prev, ', ', curr])}
    //             {' and '}
    //             <a href={`/categories/${categories[categories.length - 1].slug}`}>
    //                 {categories[categories.length - 1].name}
    //             </a>
    //         </>
    //     );
    // };

    return (
        <div className="Sidebar">
            <div className="custom_box_Shadow p-3 bg-white">
                <aside className="w-box products-left-bar">
                    <div className="pro text-center">
                        <div className="imgPro-box text-center">
                            <img
                                className="product-image"
                                src={store?.media?.thumb ?? 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'}
                                srcSet={store?.media?.srcSet}
                                alt={store?.media?.alt}
                                title={store?.media?.title}
                            />
                        </div>
                        <div className="capsPro-box">
                            <div className="rating-stars text-center my-3">
                                <Link href="#" className="url" title="Panasonic HC-X1000e is rated 4.7 stars on Knoji">
                                    <i className="yellow fas fa-star"></i>
                                    <i className="yellow fas fa-star"></i>
                                    <i className="yellow fas fa-star"></i>
                                    <i className="yellow fas fa-star"></i>
                                    <i className="yellow fas fa-star"></i>
                                </Link>
                                <div className="rating-text">
                                    Rated <span className="bold">4.7</span> - <Link href="#"><span className="gr8">15 ratings</span></Link>
                                </div>
                            </div>
                            <div className="review-this-pro">
                                <Link href="#"><span className="blue">Review this product</span></Link>
                            </div>
                        </div>
                    </div>

                    <div className="module pd0 sidebar-tabs">
                        <ul className="tabs-lists my-4">
                            <li className="item">
                                <Link href={store?.url}>Reviews</Link>
                            </li>
                            <li className={`item ${pathname.startsWith('/stores/' + store?.slug + '/coupons') ? 'active' : null}`}>
                                <Link href={store?.url + "/coupons"}>Coupons & Promo Codes</Link>
                            </li>
                            {store?.specialPages && store?.specialPages?.map((item, i) => (
                                <li className={`item ${pathname === item?.pathname ? 'active' : null}`} key={i}>
                                    <Link href={item?.url}>{item?.title + " Discounts"}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>

            <p>We may earn commissions through links on this page</p>
            <div className="sac-text-box p-2">
                <h5>Coupon Highlights</h5>
                <table className="table w-100">
                    <tbody>
                    <tr>
                        <td className="py-2 text-primary">Best Offers</td>
                        <td className="py-2 text-primary text-right text-center">{store?.stats?.bestOffersCount}</td>
                    </tr>
                    <tr>
                        <td className="py-2 text-primary">Total Offers</td>
                        <td className="py-2 text-primary text-right text-center">{store?.stats?.couponsCount}</td>
                    </tr>
                    <tr>
                        <td className="py-2 text-primary">Store Wide Deals</td>
                        <td className="py-2 text-primary text-right text-center">{store?.stats?.storeWideDeals}</td>
                    </tr>
                    <tr>
                        <td className="py-2 text-primary">Discount Codes</td>
                        <td className="py-2 text-primary text-right text-center">{store?.stats?.codesCount}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="about-us-fold">
                <div className="author-name-text">
                    <img src={store?.author?.avatar} alt={store?.author?.name}/>
                    <h3>{store?.author?.name}</h3>
                </div>

                <span>{store?.author?.tagline}</span>
                <div dangerouslySetInnerHTML={{__html: store?.author?.description}}></div>
            </div>
            <hr className="h-px w-full bg-gray-300 my-6"/>

            <div className='about-us-fold'>
                <h2>Why Trust Us?</h2>
                <p>We know how frustrating it is to search for a coupon, only to find out it doesn’t work at checkout.
                    That’s why at Savbills, we do things differently. Our team of experts, personally sources, verifies,
                    and updates every deal to ensure you only get genuine, working coupons. We collaborate with brands
                    and retailers, conduct manual verification and leverage real-time deal tracking to monitor price
                    drops and exclusive discounts. We ensure you never waste time on expired or misleading discounts. If
                    you’re looking for <strong>{store?.name}</strong> coupons, Savbills ensures you get the best working
                    deals with confidence. </p>
            </div>

            <div className="sac-text-box p-2 sidebar-form">
                <button
                    className="btn btn-toggle"
                    onClick={() => setIsFormOpen(!isFormOpen)}  // Use 'isFormOpen' here
                >
                    {isFormOpen ? 'Hide Form' : 'Submit a Coupon'}
                </button>

                {isFormOpen && (
                    <BlockUi tag="span" className="d-block my-4" blocking={couponLoading}>
                        <h3 className="custom-sidebar-h3">Submit a Coupon</h3>
                        <form method="post" onSubmit={handleSubmitCoupon}>
                            <select
                                required
                                id="Coupons"
                                name="Coupons"
                                value={offerType}
                                onChange={(e) => setOfferType(e.currentTarget.value)}
                            >
                                <option value="">Offer Type *</option>
                                <option value="code">Coupon</option>
                                <option value="deal">Deal</option>
                            </select>

                            {/* Conditionally render this field only if 'coupon' is selected */}
                            <div className="field-code field">
                                <label style={{marginTop: 15}}>Add code or change offer type</label>
                                <input
                                    style={{marginTop: 0}}
                                    type="text"
                                    name="coupon_code"
                                    placeholder="Code"
                                    onChange={(e) => setCode(e.currentTarget.value)}
                                />
                            </div>

                            <div className="field">
                                <input
                                    name="coupon_aff_url"
                                    type="text"
                                    placeholder="Coupon Deal URL"
                                    onChange={(e) => setAffiliateUrl(e.currentTarget.value)}
                                />
                            </div>

                            <div className="field">
                                <p style={{marginBottom: 0}} className="ui icon inputs input-group date"
                                   data-provide="datepicker">
                                    <input
                                        type="date"
                                        className="form-control st-datepicker"
                                        placeholder="Exp Date: dd/mm/yyyy"
                                        id="datepicker"
                                        onChange={(e) => setExpiryDate(e.currentTarget.value)}
                                    />
                                </p>

                                <label className="checkBox d-flex">
                                    <input type="checkbox"/>
                                    Don't know the expiration date.
                                </label>
                            </div>

                            <div className="field">
                                <input
                                    name="coupon_title"
                                    type="text"
                                    placeholder="Offer Title"
                                    onChange={(e) => setOfferTitle(e.currentTarget.value)}
                                />
                            </div>

                            <button type="submit" className="fluid ui button btn btn_primary btn_large">
                                Submit
                            </button>
                        </form>
                    </BlockUi>
                )}
            </div>

            <hr className="h-px w-full bg-gray-300 my-6"/>

            {!pathname.startsWith('/discounts/') &&
                <>
                    <div className="abous-us-fold">
                        <p>{store?.name} is a well-known <Link
                            href={`/categories/${store?.topCategory?.slug}`}>{store?.topCategory?.name}</Link> brand
                            that specializes in <Link
                                href={`/categories/${store?.lastCategory?.slug}`}>{store?.lastCategory?.name}</Link>.
                            Competing with top brands such as {renderCompetitor()}, {store?.name} offers [price range
                            descriptor, e.g., budget-friendly, mid-range, premium] options
                            for
                            customers.</p>
                        <p>When it comes to savings, {store?.name} actively provides coupon codes and promotional deals,
                            helping
                            customers get the best prices on <Link
                                href={`/categories/${store?.lastCategory?.slug}`}>{store?.lastCategory?.name}</Link>.
                        </p>
                        <p>🔔 Stay updated! Subscribe to our newsletter to receive the latest {store?.name} coupons,
                            deals, and exclusive offers straight to your inbox.</p>
                    </div>
                    <hr className="h-px w-full bg-gray-300 my-6"/>
                </>
            }

            <div className="sac-text-box p-3">
                <h3 className="h5 font-weight-bold text-dark mb-3 font-Poppins">Similar Stores</h3>
                <ul className="list-unstyled flex-wrap text-capitalize">
                    {store?.similarStores && store?.similarStores.map((similar) => (
                        <li className="mb-2" key={similar?.id}>
                            <Link href={`/stores/${similar?.slug}`}>
                                {similar?.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <hr className="h-px w-full bg-gray-300 my-6"/>

            <div className="sac-text-box p-2">
                <h3 className="h5 font-weight-bold text-dark mb-3 font-Poppins">Social Media</h3>
                <div className="social-media-icon">
                    <div className="social-icons">

                        {store?.socialLinks?.facebook &&
                            <a href={store?.socialLinks?.facebook} target="_blank"
                               className="facebook-icon">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </a>
                        }
                        {store?.socialLinks?.twitter &&
                            <a href={store?.socialLinks?.twitter} target="_blank"
                               className="twitter-icon">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                        }
                        {store?.socialLinks?.youtube &&
                            <a href={store?.socialLinks?.youtube} target="_blank" className="youtube-icon">
                                <FontAwesomeIcon icon={faYoutube}/>
                            </a>
                        }
                        {store?.socialLinks?.instagram &&
                            <a href={store?.socialLinks?.instagram} target="_blank" className="instagram-icon">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        }
                        {store?.socialLinks?.linkedin &&
                            <a href={store?.socialLinks?.linkedin} target="_blank" className="tiktok-icon">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
