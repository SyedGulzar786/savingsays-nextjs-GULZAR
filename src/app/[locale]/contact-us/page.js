"use client";

import React, { useState } from "react";
import PopularCategories from "@/src/components/PopularCategories/PopularCategories";
import PopularStores from "@/src/components/PopularStores/PopularStores";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Full Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = "Invalid email format";
    if (!formData.phone) tempErrors.phone = "Phone Number is required";
    else if (!/^\d{10}$/.test(formData.phone)) tempErrors.phone = "Phone number must be 10 digits";
    if (!formData.subject) tempErrors.subject = "Subject is required";
    if (!formData.message) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };


  return (
<div>
  <div className="container my-5 about-page">
    <div className="row">
      <div className="col-md-12 px-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              {/* <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}
              </div> */}
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject" placeholder="Enter the subject" value={formData.subject} onChange={handleChange} />
                {errors.subject && <small className="text-danger">{errors.subject}</small>}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" value={formData.message} onChange={handleChange}></textarea>
                {errors.message && <small className="text-danger">{errors.message}</small>}
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        {/* ==== NEW ADDITIONS BELOW ==== */}
        <div className="mt-5 text-center">
          <p>
          Please feel free to contact us with any questions, problems, and comments regarding SavingSays.com, partnerships, PR, and affiliate relations. If you’d like to leave us feedback about our site, please do. We’d love to hear from you.
          </p>
          <p>
          Before contacting for something specific, we suggest you to please visit our <a href="">Frequently Asked Questions </a> Page to find the answers.
          </p>
          <p>
          You can always shoot an e-mail to info (at) savingsays.com or can even contact us via{" "}
            <a href="https://www.facebook.com/SaysSaving" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>.
          </p>
          <div className="mt-3">
            <img
              src="https://savingsays.com/wp-content/uploads/2021/03/Untitled-design-40.png"
              alt="Find Us Worldwide"
              className="img-fluid"
              style={{ maxWidth: "250px" }}
            />
          </div>
        </div>
        {/* ==== END OF NEW ADDITIONS ==== */}
        
      </div>
    </div>
  </div>
</div>
  );
}