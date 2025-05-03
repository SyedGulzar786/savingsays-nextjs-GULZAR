import React from 'react'
import AboutUs from "@/src/components/TwoColumn/RightContent/AboutUs";
import PopularCategories from '@/src/components/PopularCategories/PopularCategories';
import PopularStores from '@/src/components/PopularStores/PopularStores';

export default function CommunityGuidelines() {
    return (
        <div>

<div>
  <div className="container my-5 about-page">
    <div className="row">
      <div className="col-md-12">
        <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
          <h1 className="text-xl font-normal">
            <span className="font-bold text-blue-600"><b>Saving Says</b></span> Community Guidelines
          </h1>

          <p className="mt-4">
            The Saving Says community is a safe space to discuss brands, products, and shared values. We want everyone to be part of our community and have their voice heard.
          </p>

          <p className="mt-4">
            We encourage your feedback and aim to respond to your comments as soon as possible. While we do moderate this community, we welcome open discussion.
          </p>

          <h2 className="text-lg font-bold mt-8 text-blue-600">Our Guidelines</h2>

          <ul className="list-disc pl-6 mt-4 space-y-2 custom-bullets">
            <li>Communicate with courtesy and respect. Treat others online as you would in real life.</li>
            <li>Be tolerant toward others' viewpoints.</li>
            <li>Unacceptable content (posts, usernames, or subject lines) will be removed.</li>
            <li>Do not post articles, news reports, or other copyrighted content without permission from the copyright holders.</li>
            <li>Spamming, promotion, or posting links to third-party websites is not allowed.</li>
            <li>This is a public forum. Do not share personal information (e.g., address, email, phone number) you wouldn’t share with a stranger.</li>
            <li>We reserve the right to delete comments at our discretion and block repeat offenders.</li>
            <li>We will remove fraudulent, deceptive, or misleading content.</li>
            <li>Personal attacks, name-calling, trolling, and abusive behavior will not be tolerated.</li>
          </ul>

          <p className="mt-4">
            All content shared in this community may be used by Saving Says across our media platforms, including websites, magazines, and books.
            For more details, refer to our <a href="#" className="text-blue-600">Privacy Policy</a>.
          </p>

          <p className="mt-4">
            Employees participating in the community must adhere to Saving Says staff social media guidelines.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

            <PopularStores/>


        </div>
    )
}
