/* eslint-disable no-unused-vars */
import { useState } from "react";

const PortfolioWork = () => {
  const [webdev, setWebdev] = useState([]);
  const [socialMediaMarketing, setsocialMediaMarketing] = useState([
    {
      title: "MK Traders",
      image: "./projectimages/mktraders.jpg",
      client: "Client 3",
      date: "March 2022",
    },
    {
      title: "MK Traders",
      image: "./projectimages/mktraders.jpg",
      client: "Client 3",
      date: "March 2022",
    },
    {
      title: "MK Traders",
      image: "./projectimages/mktraders.jpg",
      client: "Client 3",
      date: "March 2022",
    },
    {
      title: "MK Traders",
      image: "./projectimages/mktraders.jpg",
      client: "Client 3",
      date: "March 2022",
    },
  ]);
  const [facebookads, setFacebookAds] = useState([]);
  const [logoDesigning, setLogoDesigning] = useState([]);
  const [videoEditing, setvideoEditing] = useState([]);
  return (
    <div className="lg:px-28 p-4 mt-1">
      <div className="md:w-2/3 lg:w-1/2 mt-12 text-black">
        <h2 className="my-8 text-2xl font-bold text-black md:text-4xl">
          Our Work
        </h2>
        <p className="text-black">
          We have built many products and some of them are below
        </p>
      </div>

      <h1 className=" mt-12 my-4 text-black text-3xl font-semibold">
        Social Media Marketing
      </h1>
      <div className="carousel carousel-center bg-zinc-200 p-4 space-x-4  rounded-box">
        {socialMediaMarketing.map((items, index) => (
          <div key={index} className="carousel-item">
            <img className="h-96" src={items.image} alt="Burger" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioWork;
