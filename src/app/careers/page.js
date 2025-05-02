import React from 'react'
import AboutUs from "@/src/components/TwoColumn/RightContent/AboutUs";
import PopularCategories from '@/src/components/PopularCategories/PopularCategories';
import PopularStores from '@/src/components/PopularStores/PopularStores';

export default function Career() {
    return (
        <div>
            <div>
  <div className="container my-5 about-page">
    <div className="row">
      <div className="col-md-12">
        <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
          <h1 className="text-xl font-normal">
            Careers at <span className="font-bold text-blue-600"><b>Saving Says</b></span>
          </h1>

          <p className="mt-4">
            Here at Saving Says, we’ll show you the true meaning of saving money and how to live a savvy lifestyle.
            We’ve built a strong community of smart shoppers — join us and start saving every time you shop. Learn more below!
          </p>

          <h2 className="text-lg font-bold mt-8 text-blue-600">About Us</h2>
          <p className="mt-4">
            Our people are the heart of what we do. At Saving Says, it’s all about “We” — not “Me.” We’re a team powered by potential, creativity, respect, and innovation.
            If you value teamwork, risk-taking, courage, and inspiration — you’ll feel right at home here.
          </p>
          <p className="mt-4">
            Those who bring unique skills, bold ideas, and a passion for invention don’t just fit in — they lead. If that sounds like you, you’re already halfway here.
          </p>

          <h2 className="text-lg font-bold mt-8">Current Openings</h2>
          <ul className="list-disc pl-6 mt-4 space-y-2 custom-bullets">
            <li><strong>SEO Content Writer</strong> — Market Competitive — Full Time</li>
            <li><strong>Graphic Designer</strong> — Creative Visual — Part/Full Time</li>
            <li><strong>Web Developer</strong> — Website Building & Back-end — Full Time</li>
            <li><strong>Marketing Manager</strong> — Digital Marketing/SEO — Full Time</li>
          </ul>
          <div className="container mx-auto my-3 px-4">
  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse text-left">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="p-3 font-semibold text-orange-600">Position</th>
          <th className="p-3 font-semibold text-gray-700">Type</th>
          <th className="p-3 font-semibold text-gray-700">Skill</th>
          <th className="p-3 font-semibold text-gray-700">Availability</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        <tr className="border-b border-gray-200">
          <td className="p-3 text-orange-600">SEO Content Writer</td>
          <td className="p-3">Market Competitive</td>
          <td className="p-3">SEO</td>
          <td className="p-3">full Time</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="p-3 text-orange-600">Graphic Designer</td>
          <td className="p-3">Creative</td>
          <td className="p-3">Visual</td>
          <td className="p-3">part/full Time</td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="p-3 text-orange-600">Web Developer</td>
          <td className="p-3">Website Building</td>
          <td className="p-3">Back-end</td>
          <td className="p-3">full Time</td>
        </tr>
        <tr>
          <td className="p-3 text-orange-600">Marketing Manager</td>
          <td className="p-3">Marketing</td>
          <td className="p-3">Digital Marketing/SEO</td>
          <td className="p-3">full Time</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


          <h2 className="text-lg font-bold mt-8 text-blue-600">Perks of Working at Saving Says</h2>

          <h3 className="mt-5 font-semibold">Employee Recognition</h3>
          <p className="mt-2">
            We love recognizing great work. Build your portfolio with us and get official certificates and online visibility. Happy employees make a successful team — and we value both.
          </p>

          <h3 className="mt-5 font-semibold">Vacation / Paid Time Off</h3>
          <p className="mt-2">
            “Time is your most precious gift.” At Saving Says, you earn paid yearly vacation. No work calls or emails on your trip — just relax and recharge.
          </p>

          <h3 className="mt-5 font-semibold">Performance Bonus</h3>
          <p className="mt-2">
            We love rewarding amazing work! Hit your goals or help us hit ours, and we’ll celebrate with bonuses, parties, and appreciation. Motivation + recognition = success.
          </p>

          <h3 className="mt-5 font-semibold">Paid Sick Days</h3>
          <p className="mt-2">
            Feeling unwell? Don’t worry — you won’t lose a day's pay. Paid sick days mean you can take care of yourself without stress.
          </p>

          <h3 className="mt-5 font-semibold">Maternity / Parental Paid Leave</h3>
          <p className="mt-2">
            Family matters. We offer paid parental leave, and your monthly salary stays intact. Submit an early application, and we’ll take care of the rest.
          </p>

          <h3 className="mt-5 font-semibold">Flexible Schedule</h3>
          <p className="mt-2">
            We get it — life is busy. If you're a student or juggling responsibilities, we’ll work with your schedule. Flexibility and remote options are available.
          </p>

          <h2 className="text-lg font-bold mt-8 text-blue-600">Have Questions?</h2>
          <p className="mt-2">
            Thanks for your interest! Contact us by filling out the form on our site or email us at <a href="mailto:support@savingsays.com" className="text-blue-600">support@savingsays.com</a>.
          </p>
          <p className="mt-2">
            Before reaching out, we suggest visiting our FAQ page to find quick answers.
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
