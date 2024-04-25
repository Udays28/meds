/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";

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
  ]);

  return (
    <section className="bg-white">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
            Create Your Digital Presence With{" "}
            <span className="text-purple-500">Grothify</span>
          </h1>
          <p className="mt-6 text-gray-700">
            Grateful for the opportunity to work with incredible clients. Thank
            you for your trust and partnership. Here's to more successful
            collaborations ahead!
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto mt-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1"
              >
                <img
                  className="h-32"
                  src={logo}
                  alt={`Company Logo ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
