/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Logos from "../components/Logos";

const Companies = () => {
  const [logos, setLogos] = useState([
    "./company/l3.jpg",
    "./company/l2.jpg",
    "./company/l1.jpg",
    "./company/l4.jpg",
    "./company/l5.jpg",
    "./company/l6.jpg",
    "./company/l7.jpg",
    "./company/l8.jpg",
    "./company/l9.jpg",
    "./company/l10.jpg",
    "./company/l11.png",
  ]);

  return (
    <section className="bg-white">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
            Create Your Digital Presence With{" "}
            <span className="text-purple-500">MediaBizz</span>
          </h1>
          <p className="mt-6 text-gray-700">
            Grateful for the opportunity to work with incredible clients. Thank
            you for your trust and partnership. Here's to more successful
            collaborations ahead!
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto mt-20">
          <Logos/>
        </div>
      </div>
    </section>
  );
};

export default Companies;
