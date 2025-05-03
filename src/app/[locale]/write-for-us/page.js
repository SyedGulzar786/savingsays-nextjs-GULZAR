import React from 'react'
import PopularCategories from '@/src/components/PopularCategories/PopularCategories';
import PopularStores from '@/src/components/PopularStores/PopularStores';

export default function WriteForUs() {
  return (
<div>
  <div className="container my-5 about-page">
    <div className="row">
      <div className="col-md-12">
        <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
          <h2 className="text-xl font-bold text-blue-600 mb-4"><b>Get Paid to Write</b></h2>

          <p>
            SavingSays is proud to announce that we are now paying Students and Travel Bloggers to share their travel journeys in a written form with SavingSays.
            Your blog will be featured at SavingSays and you’ll be paid an amount between $50 to $100 depending upon the quality.
          </p>

          <h3 className="text-lg font-semibold mt-8 text-blue-600">For Students</h3>
          <p>
            If you are writing as a Student you need to share any of your Frugal Experiences or any other information that must be related to saving money, for example:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1 custom-bullets">
            <li>My Trip to Abu Dhabi under $500.</li>
            <li>How I spend a month in the UK under £150.</li>
            <li>How to Live a Frugal Life Being a Student.</li>
            <li>The Secrets of Living a Frugal Life.</li>
            <li>How to Save More & Spend Less as being a Student.</li>
          </ul>
          <p className="mt-4">All of your focus should be on <strong>“Saving money”</strong></p>

          <h3 className="text-lg font-semibold mt-8 text-blue-600">For Travel Bloggers</h3>
          <p>
            If you are contributing as a Travel Blogger you should share your journey with the original pictures or short video clip captured by you.
            Also, include the ways by which you were able to save even a small amount of money. Either it could be through Early Booking or Spending the Night in Camp.
          </p>

          <h3 className="text-lg font-semibold mt-8 text-blue-600">Terms & Conditions</h3>
          <ul className="list-disc pl-6 mt-3 space-y-1 custom-bullets">
            <li>Your article should not be more than 2000 words.</li>
            <li>Share your own experience.</li>
            <li>Any blog containing plagiarism will immediately be rejected.</li>
            <li>Every blog will be specifically reviewed by the team at SavingSays.</li>
            <li>Once your article is selected, we will let you know and it will be published at SavingSays.com.</li>
            <li>You will receive the payment within 1 week after your blog is published.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-8 text-blue-600">Requirements</h3>
          <p>
            Send your blog in a Word file to <a href="mailto:info@savingsays.com" className="text-blue-600">info@savingsays.com</a> with the following credentials:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1 custom-bullets">
            <li>Your Name</li>
            <li>Your Headshot (8″ X 10″)</li>
            <li>About you (Max 250 Words)</li>
            <li>Link to your Social Media</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
