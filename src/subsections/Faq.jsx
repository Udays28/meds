import { useState } from "react";

const Faq = () => {
  // eslint-disable-next-line no-unused-vars
  const [faqs, setfaqs]=useState([
    {
      ques:"How experienced is the Grothify team?",
      ans:"Our team at Grothify boasts years of collective experience in the digital marketing industry. With a diverse skill set and a passion for innovation,  with over 4+ Years of Experience .we are committed to delivering top-notch results for our clients"
    }, {
      ques:"What industries does your agency specialize in?",
      ans:"•	At grothify, we specialize in providing digital marketing solutions tailored to the unique needs of various industries. Our expertise extends to restaurants, hotels, schools, real estate, as well as coaching and training businesses .Along with that we work with various saloon , makeup artist, and Content creator . "
    }, {
      ques:"How does your agency help clients in the restaurant industry?",
      ans:"•	We have extensive experience working with restaurants to enhance their online presence, attract more customers, and increase revenue through effective digital marketing strategies. From social media management to online reputation management, we help restaurants thrive in the competitive market."
    }, {
      ques:"Can Grothify customize its services to suit my business needs?",
      ans:"Yes, absolutely! At Grothify, we understand that every business is unique. That's why we offer customized digital marketing solutions tailored to meet your specific goals, requirements, and budget."
    }, {
      ques:"What industries does Grothify work with?",
      ans:"Grothify has experience working with clients across various industries including e-commerce, hospitality, healthcare, finance, technology, and more. Regardless of your industry, we have the expertise to help you succeed."
    },{
      ques:"How does Grothify measure the success of digital marketing campaigns?",
      ans:"We use a variety of metrics and analytics tools to track and measure the performance of our digital marketing campaigns. From website traffic and engagement metrics to conversion rates and ROI, we provide detailed reports to keep you informed."
    },{
      ques:"What sets Grothify apart from other digital marketing agencies?",
      ans:"At Grothify, we prioritize client satisfaction and results above all else. Our team of experts is dedicated to delivering innovative, data-driven solutions that drive growth and maximize ROI for our clients."
    },{
      ques:"How can I get started with Grothify's digital marketing services?",
      ans:"Getting started with Grothify is easy! Simply reach out to us via phone, email, or our website contact form to schedule a consultation. We'll discuss your goals, objectives, and budget to create a customized digital marketing strategy for your business."
    },
  ])

  return (
    <>
      <h1 className="text-center text-5xl mb-4 font-semibold">FAQs</h1>{" "}
      <div id="faq" className="space-y-4 p-4 lg:px-32">
        <details
          className="group border-s-4 border-purple-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className=" font-medium text-gray-900">
            What services does Grothify offer?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          Grothify specializes in a range of digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, and more. We provide comprehensive solutions to help businesses enhance their online presence and achieve their marketing goals.
          </p>
        </details>

        {faqs.map((faq, index)=>(
          <details key={index} className="group border-s-4 border-purple-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="font-medium text-gray-900">
              {faq.ques}
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          {faq.ans}
          </p>
        </details>
        ))}
      </div>
    </>
  );
};

export default Faq;
