'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import './Footer.css';
import { faFacebook, faInstagram, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faClock, faPhone, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { useVendorContext } from "@/src/app/vendor-provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { vendorData } = useVendorContext();

  // Show button after scrolling 100px
  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 100);
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Attach the scroll event listener
  useEffect(() => {

    require('bootstrap/dist/js/bootstrap.bundle.min.js');

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


  // const Footer = () => {
  return (

    <div>

      <section>
        <div className="container d-flex subscribe-bg rounded-5 banner justify-content-center p-0 py-5">
          <div className="d-flex subscribe w-100 flex-column px-5 gap-1 align-items-center justify-content-between">
            <div className="text mx-1 d-flex flex-column align-items-center">
              <h1 className="seven-fourty m-0">Want exclusive deals delivered to your inbox?</h1>
              <p className="four-fifteen color-ex-2">Sign up & get early access to the best discounts!</p>
            </div>
            <div className="d-flex gap-3 flex-wrap ">
              <input className="input four-fifteen rounded-5 border-0 py-2 px-4" type="text" placeholder="enter your email" />
              <button className="six-fifteen color-hexa border-0 py-2 px-4 graident-background-btn rounded-5">Explore more</button>
            </div>
          </div>
        </div>
      </section>



      {/* <section className=" pb-5">
        <div className="container d-flex rounded-5 subscribe-bg justify-content-center p-0.">
          <div className="d-flex subscribe w-100 flex-column px-5 mb-5 mt-5 gap-5 align-items-center justify-content-between">
            <div className="text mx-5 d-flex flex-column align-items-center">
              <h1 className="seven-fourty">Want exclusive deals delivered to your inbox?</h1>
              <p className="four-fifteen">Sign up & get early access to the best discounts!</p>
            </div>
            <div className="d-flex mt-4 flex-wrap gap-3">
              <input className="input four-fifteen rounded-5 border-0 py-2 px-4" type="text" placeholder="enter your email" />
              <button className="six-fifteen color-hexa border-0 py-2 px-4 gradient-background-btn rounded-5">Explore more</button>
            </div>
          </div>
        </div>
      </section> */}

      <footer className="footer mt-5 pt-5">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-4 d-flex flex-column col-m-4 col-sm-12">
              <img className="footer-logo mb-3 ms-4" src="/assets/landing-page/main-logo.svg" alt="" />
              <p className="four-thirteen color-secondary ms-4">"Saving Says is your ultimate destination for exclusive discounts, promo codes, and
                money-saving guides. We help shoppers find the best deals on top brands and essential products."</p>
              <div className="d-flex mt-1 mb-3 ms-4">
                <img className="me-4" src="/assets/landing-page/Facebook.svg" alt="" />
                <img className="me-4" src="/assets/landing-page/Instagram.svg" alt="" />
                <img className="me-4" src="/assets/landing-page/X logo.svg" alt="" />
                <img className="me-4" src="/assets/landing-page/LinkedIn.svg" alt="" />
                <img className="me-4" src="/assets/landing-page/YouTube.svg" alt="" />
                <img className="me-4" src="/assets/landing-page/TikTok.svg" alt="" />
                <img className="me-4" src="/assets/landing-page/Pinterest.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-m-2 col-sm-6">
              <h2 className="six-fifteen mb-3 ms-4 ">Discount Guides</h2>
              <ul className="p-0">
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Student</span>
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Teacher</span>
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Military</span>
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Senior</span>
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Healthcare</span>
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Nurse</span>
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Birthday</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-m-2 col-sm-6">
              <h2 className="six-fifteen mb-3 ms-4 gradient-text">Quick Links</h2>
              <ul className="p-0">
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="/about">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">About Us</span>
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="/careers">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Careers</span>
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="/media-kit">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Media Kit</span>
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="/contact-us">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Contact Us</span>
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="/faqs">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">FAQs</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-m-2 col-sm-6 px-0">
              <h2 className="six-fifteen mb-3 ms-4 gradient-text">Coupon & Savings</h2>
              <ul className="p-0">
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Submit Coupons</span>
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Coupon Categories</span>
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="/stores">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">All stores</span>
                  </a>
                </li>

                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="/write-for-us">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Get Paid to Write</span>
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="/community-guidelines">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Community Guidelines</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-m-2 col-sm-6 px-0">
              <h2 className="six-fifteen mb-3 ms-4 gradient-text">Legal & Policies</h2>
              <ul className="p-0">
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="/privacy-policy">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Privacy Policy</span>
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="/terms-and-condition">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Terms & Conditions</span>
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <a className="text-decoration-none ms-4 text-dark" href="">
                    <i className="fas me-2 fa-chevron-right"></i>
                    <span className="four-fifteen">Sitemap</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* {[
              { title: 'Discount Guides', links: ['Student', 'Teacher', 'Military', 'Senior', 'Healthcare'] },
              { title: 'Quick Links', links: ['About Us', 'Careers', 'Media Kit', 'Contact Us', 'FAQs'] },
              { title: 'Coupon & Savings', links: ['Submit Coupons', 'Coupon Categories', 'All Stores', 'Get Paid to Write', 'Community Guidelines'] },
              { title: 'Legal & Policies', links: ['Privacy Policy', 'Terms & Conditions', 'Sitemap'] },
            ].map((section, index) => (
              <div key={index} className="col-lg-2 col-m-2 col-sm-6 px-0">
                <h2 className="six-fifteen mb-3">{section.title}</h2>
                <ul className="p-0 list-style-none">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2 d-flex align-items-center">
                      <i className="fas me-2 fa-chevron-right"></i>
                      {link === 'All Stores' ? (
                        <Link href="/discount" className="text-decoration-none color-primary d-flex align-items-center">
                          <span className="four-fifteen">{link}</span>
                        </Link>
                      ) : (
                        <span className="four-fifteen">{link}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))} */}
          </div>
          <div className="footer-last mt-3">
            All rights reserved © 2025 Saving Says
          </div>
        </div>
      </footer>

      {/* <footer className="footer pt-5">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-4 d-flex flex-column justify-content-between col-m-4 col-sm-12">
              <Image className="footer-logo mb-3" src="/assets/images/image_(5)[1] 1.svg" alt="" width={150} height={50} />
              <p className="four-thirteen">"Saving Says is your ultimate destination for exclusive discounts, promo codes, and money-saving guides. We help shoppers find the best deals on top brands and essential products."</p>
              <div className="d-flex mt-1 mb-3">
                <Image className="me-4" src="/assets/images/Facebook.svg" alt="" width={24} height={24} />
                <Image className="me-4" src="/assets/images/Instagram.svg" alt="" width={24} height={24} />
                <Image className="me-4" src="/assets/images/X logo.svg" alt="" width={24} height={24} />
                <Image className="me-4" src="/assets/images/LinkedIn.svg" alt="" width={24} height={24} />
                <Image className="me-4" src="/assets/images/YouTube.svg" alt="" width={24} height={24} />
                <Image className="me-4" src="/assets/images/TikTok.svg" alt="" width={24} height={24} />
                <Image className="me-4" src="/assets/images/Pinterest.svg" alt="" width={24} height={24} />
              </div>
            </div>
            {[
              { title: 'Discount Guides', links: ['Student', 'Teacher', 'Military', 'Senior', 'Healthcare'] },
              { title: 'Quick Links', links: ['About Us', 'Careers', 'Media Kit', 'Contact Us', 'FAQs'] },
              { title: 'Coupon & Savings', links: ['Submit Coupons', 'Coupon Categories', 'All Stores', 'Get Paid to Write', 'Community Guidelines'] },
              { title: 'Legal & Policies', links: ['Privacy Policy', 'Terms & Conditions', 'Sitemap'] },
            ].map((section, index) => (
              <div key={index} className="col-lg-2 col-m-2 col-sm-6 px-0">
                <h2 className="six-fifteen mb-3">{section.title}</h2>
                <ul className="p-0 list-style-none">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2 d-flex align-items-center">
                      <i className="fas me-2 fa-chevron-right"></i>
                      {link === 'All Stores' ? (
                        <Link href="/discount" className="text-decoration-none color-primary d-flex align-items-center">
                          <span className="four-fifteen">{link}</span>
                        </Link>
                      ) : (
                        <span className="four-fifteen">{link}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Footer;
