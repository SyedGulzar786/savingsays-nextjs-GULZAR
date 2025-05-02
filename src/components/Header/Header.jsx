"use client";

import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './Header.css';
import Link from 'next/link';
import { useVendorContext } from "@/src/app/vendor-provider";
import Image from "next/image";
import { FaUser } from 'react-icons/fa';
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { ShowError, ShowOk } from "@/src/utils/common";
import BlockUi from "@availity/block-ui";
import { Signout } from "@/src/actions/SignoutAction";
import SearchBox from "@/src/components/SearchBox";
import { Authenticate, Register } from "@/src/actions/AuthAction";


import { useEffect } from 'react';

  
  const Header = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
    handleLoginModal: () => handleLoginModal(),
    handleRegisterModal: () => handleRegisterModal()
  }));

  const { vendorData, isUserLoggedIn } = useVendorContext();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [modalTitle, setModalTitle] = useState("Log In")
  const [isAuthModalShow, setIsAuthModalShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLoginModal = () => {
    setModalTitle("Log In")
    setIsAuthModalShow(true)
  };

  const handleRegisterModal = () => {
    setModalTitle("Sign Up")
    setIsAuthModalShow(true)
  }

  const handleCloseModal = () => {
    setIsAuthModalShow(false);
    resetForm()
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const { data, error, message } = await Authenticate({ email, password })

    if (error === 1) {
      setLoading(false)
      ShowError(message);
      return;
    }

    window.location.href = window.location["href"];
  };

  const resetForm = () => {
    setEmail("");
    setPassword("")
    setConfirmPassword("")
  }

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error, message } = await Register({
      email, password, confirmPassword
    })

    if (error === 1) {
      setLoading(false)
      ShowError(message);
      return;
    }

    window.location.href = window.location["href"];
  };

  const handleLogout = async () => {
    await Signout().then(() => window.location.href = window.location["href"]);
  };

  return (
      <header>
        <nav className="navbar navbar-expand-lg nav-color navbar-light">
          <div className="container">
            {/* <!-- Logo --> */}
            <Link className="navbar-brand" href="/">
              {/* <Image src="/assets/images/logo.png" alt="Saving-Says" width={400} height={300} /> */}
              {/*<img src={vendorData?.logo} alt={vendorData?.name} style={{maxWidth: '130px'}}/>*/}
              {/*<img src="https://savingsays.com/wp-content/uploads/2021/06/Header-4.png" alt="" />*/}
              <img src="/assets/landing-page/main-logo.svg" alt="Saving Save Logo" className="web-logo" />
            </Link>

            {/* <!-- Toggle Button for Mobile --> */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMobileMenu}
              aria-controls="navbarNav"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Navbar Links and Right Side --> */}
            {/* <div className="collapse navbar-collapse" id="navbarContent"> */}
            <div className="row w-100">
              {/* <!-- Navigation Links --> */}
              <div className="col-lg-8">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link four-fifteen color-secondary" href="/blog/categories/buying-guide">Buying Guide</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link four-fifteen color-secondary" href="/blog/categories/saving-guide">Saving Guide</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link four-fifteen color-secondary" href="#">Best Time to Buy</Link>
                  </li>
                  {/* <li className="nav-item dropdown">
  <a
    className="nav-link four-fifteen color-secondary dropdown-toggle"
    href="#"
    id="specialDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Special Discount
  </a>
  <ul className="dropdown-menu" aria-labelledby="specialDropdown">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</li> */}
<li className="nav-item position-relative">
  <a
    className="nav-link dropdown-toggle four-fifteen color-secondary"
    href="#"
    id="specialDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Special Discount
  </a>
  <ul className="dropdown-menu" aria-labelledby="specialDropdown">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</li>


                </ul>
              </div>

              {/* <!-- Search & Language Dropdown --> */}
              <div className="col-lg-4 ps-0 d-flex align-items-center justify-content-lg-end mt-3 mt-lg-0">
                {/* <!-- Search --> */}
                <div className="input-group rounded-5">
                  <span className="input-group-text bg-white rounded-5 py-0 search-container px-2">
                    <img src="/assets/landing-page/Vector.svg" alt="Search Icon" />
                    <input type="text" className="form-control four-thirteen border-0 color-tertiary" placeholder="Search for coupons and store" aria-label="Search" />
                  </span>
                </div>

                {/* <!-- Language Dropdown --> */}
                <div className="ms-3 nav-item position-relative">
                  {/* above className has a class dropdown */}
                  <button className="btn btn-light six-fifteen bg-transparent dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="flag-icon flag-icon-gb"></span> EN
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                    <li><a className="dropdown-item" href="#"><span className="flag-icon flag-icon-gb"></span> English <i className="fa fa-check text-success ms-2"></i></a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#"><span className="flag-icon flag-icon-pl"></span> Polski</a></li>
                    <li><a className="dropdown-item" href="#"><span className="flag-icon flag-icon-cn"></span> 中文</a></li>
                    <li><a className="dropdown-item" href="#"><span className="flag-icon flag-icon-jp"></span> 日本語</a></li>
                    <li><a className="dropdown-item" href="#"><span className="flag-icon flag-icon-de"></span> Deutsch</a></li>
                    <li><a className="dropdown-item" href="#"><span className="flag-icon flag-icon-fr"></span> Français</a></li>
                    <li><a className="dropdown-item" href="#"><span className="flag-icon flag-icon-es"></span> Español</a></li>
                    <li><a className="dropdown-item" href="#"><span className="flag-icon flag-icon-ru"></span> Русский</a></li>
                    <li><a className="dropdown-item" href="#"><span className="flag-icon flag-icon-pt"></span> Português</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </nav>
      </header>
  );
});

export default Header;
