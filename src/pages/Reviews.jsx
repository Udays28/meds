/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Ritu kabdola ",
      review:
        "It was awesome, as the team was very cooperative , and is great at handling web work . They prioritise our time and also give proper attention . It was 2 months of work with them and they did it fantastically . I alot more then satisfied with their work and my website.",
      time: "2023/06/27",
      company: "Nourishnest",
      project: "Website designing ",
    },
    {
      name: "Chetan jain",
      review:
        "Good services provided by deepam, excelent website designed, getting complete support",
      time: "2023/06/27",
      company: "Www.Bharosabank.com",
      project: "Www.bharosabank.com",
    },
    
    {
      name: "Kanak",
      review: "Good photos and graphics keep it up",
      time: "2023/06/27",
      company: "Annapurna AMB Food product",
      project: "Annapurna social media",
    },
    {
      name: "Shantanu Billore",
      review: "Outstanding work, cooperative and fast",
      time: "2023/06/27",
      company: "The 9 studios",
      project: "Logo creation",
    },
    {
      name: "Rishiraj verma",
      review:
        "Quick understand my requirements and transformed it into a Alegent Logo. Appreciated !",
      time: "2023/06/27",
      company: "Norbiosk.de",
      project: "Logo design",
    },
    {
      name: "Sunita Kushwaha",
      review: "Good working experience",
      time: "2023/06/27",
      company: "Business Consultation",
      project: "Lead Generation  Business",
    },
    {
      name: "Narendra Singh",
      review: "Very good work, timely response, excellent performance",
      time: "2023/06/27",
      company: "SHREE BALAJI PORTA CABIN PVT LTD",
      project: "Social Media Marketing",
    },
    {
      name: "Adarsh Pandey ",
      review: "Great..",
      time: "2023/06/27",
      company: "Mahadev Pharmacy ",
      project: "Bussiness growth",
    },
  ]);
  return (
    <div className="pt-24 p-4 lg:px-32 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="relative border px-4 flex w-full min-w-64 max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none"
        >
          <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="tania andrew"
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-san capitalizes text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {review.name}
                </h5>
                <div className="5 flex items-center gap-0">
                  <h1>{review.time}</h1>
                </div>
              </div>
              <p className="block font-sans bg-purple-200 lowercase px-4 rounded-md  w-fit text-sm font-light leading-relaxed text-blue-gray-900 antialiased">
                {review.company}
              </p>
            </div>
          </div>
          <div className="mb-6 p-0">
            <h1 className="font-semibold underline uppercase my-2">
              {review.project}
            </h1>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              "{review.review}"
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
