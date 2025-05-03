"use client";
import React from 'react'
import PopularCategories from '@/src/components/PopularCategories/PopularCategories';
import PopularStores from '@/src/components/PopularStores/PopularStores';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  const faqs = [
    {
      question: "How do coupons work?",
      answer:
        "Coupons commonly require a minimum order amount in order to be redeemed. Every store has a different minimum order requirement.",
    },
    {
      question: "How to use a coupon code?",
      answer:
        "When browsing through SavingSays you’ll come across a button. Click on it and a pop-up will appear that displays a Coupon or a Promo code. Copy the code and paste it at the checkout on the store. The coupon will be applied.",
    },
    {
      question: "Do I have to buy coupons before using them?",
      answer:
        "All the coupons at SavingSays are FREE to use. You don’t need to pay any penny before using them.",
    },
    {
      question: "How many times can I use a coupon from SavingSays?",
      answer:
        "You can use a coupon from SavingSays as many times as you want. There’s no need to verify yourself before using them.",
    },
    {
      question: "Can I request a coupon for any specific store?",
      answer:
        "Yes! You can always request a coupon for any specific store. To do so, get in touch with the SavingSays Team via info@savingsays.com.",
    },
    {
      question: "What if my coupon doesn't work?",
      answer:
        "If your promo code doesn’t work, check the following:\n1) The code has been entered incorrectly.\n2) The coupon has expired.\n3) The items aren’t eligible.\n4) Your purchase didn’t fulfill the requirements.\n5) You didn’t obtain your coupon from a valid source.",
    },
    {
      question: "Do expired coupons work?",
      answer:
        "No, expired coupons do not work. That’s the reason they are marked as expired.",
    },
    {
      question: "How do I know whether the coupon is verified or not?",
      answer:
        "All the coupons at SavingSays are tested and verified before being uploaded. We guarantee verified publication of coupons only at SavingSays.com.",
    },
    {
      question: "How do I vote for a coupon?",
      answer:
        "Your vote really matters. When redeeming the coupon, you’ll see an option for ratings right under the code box. You can provide your feedback there.",
    },
    {
      question: "Can I submit a coupon?",
      answer:
        "Definitely yes! Sharing is a great way to help savvy shoppers. If you’d like to submit a coupon that’s not visible at SavingSays, you can always submit it with complete details.",
    },
  ];
  

  return (
    <div>
      <div className="container my-5 about-page">
        <div className="row">
          <div className="col-md-12">
            <section className="max-w-4xl mx-auto p-4">
              <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm cursor-pointer"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <h3 className="text-lg d-flex font-semibold text-gray-800 flex justify-between items-center justify-content-between">
                      {faq.question}
                      <span>{openIndex === index ? '−' : '+'}</span>
                    </h3>
                    {openIndex === index && (
                      <p className="text-gray-600 mt-2">{faq.answer}
                      

  {index === 1 && (
    <img src="/assets/faqs/image1.png" alt="Special Image" className="w-full d-block rounded-lg my-4" />
  )}
  {index === 8 && (
    <img src="/assets/faqs/image2.png" alt="Special Image" className="w-full d-block rounded-lg my-4" />
  )}
                      </p>
                    )}

                  </div>
                ))}
              </div>

<div className='d-flex justify-content-center'>
<img src="/assets/faqs/image3.png" alt="Special Image" className="w-full d-block rounded-lg my-4" />  
</div>            
</section>
          </div>
        </div>
      </div>


    </div>
  );
}