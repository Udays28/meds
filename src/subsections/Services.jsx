/* eslint-disable no-unused-vars */
import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([
    {
      name: "Website Development",
      price: "12000 Rs (3 Pages Website)",
      description: "Designing and developing websites for businesses.",
    },
    {
      name: "App Development",
      price: "25000 Rs",
      description: "Developing mobile applications for iOS and Android.",
    },
    {
      name: "SEO",
      price: "50000 Rs (3 Month Packages)",
      description: "Improving your website's visibility on search engines.",
    },
    {
      name: "E-Commerce Website",
      price: "35000 Rs",
      description:
        "Developing an e-commerce website for selling products online.",
    },
    {
      name: "Facebook Ads",
      price: "5000 Rs (Per Month)",
      description: "Running targeted ads on Facebook for your business.",
    },
    {
      name: "Social Media Marketing",
      price: "15000 Rs (Per Month)",
      description: "Promoting your brand on various social media platforms.",
    },
    {
      name: "Logo Designing",
      price: "1000 Rs",
      description: "Designing high-quality logos for your brand.",
    },
    {
      name: "3D Logo Designing",
      price: "3000 Rs",
      description: "Creating 3D logos with unique designs.",
    },

    {
      name: "Google Ads",
      price: "8000 Rs (Per Month)",
      description: "Creating and managing Google ads campaigns.",
    },

    {
      name: "Content Writing",
      price: "1000 Rs (Single Page)",
      description: "Writing engaging content for your website or blog.",
    },
    {
      name: "Youtube Channel Management",
      price: "25000 Rs (Per Month)",
      description: "Managing and growing your YouTube channel.",
    },
    {
      name: "Graphics Designing",
      price: "200 Rs Per Graphics",
      description: "Creating visually appealing graphics for your brand.",
    },

    {
      name: "E-Mail Marketing",
      price: "10000 Rs (Per Month)",
      description: "Sending targeted email campaigns to your subscribers.",
    },
    {
      name: "Whatsapp Automation",
      price: "10000 Rs (Per Month)",
      description: "Automating your WhatsApp marketing campaigns.",
    },
    {
      name: "Script Writing",
      price: "2000 Rs (Per page)",
      description: "Writing scripts for videos, ads, or presentations.",
    },
    {
      name: "Lead Generation",
      price: "5000 Rs (Per Month)",
      description:
        "Generating leads for your business through various channels.",
    },
    {
      name: "3D Animation",
      price: "40000 Rs (Per Month)",
      description: "Creating 3D animations for videos, ads, or presentations.",
    },
    {
      name: "2D Animation",
      price: "7000 Rs (Per Minutes)",
      description: "Producing 2D animations for various purposes.",
    },
    {
      name: "Reels Editing",
      price: "700 Rs (Per Reel)",
      description: "Editing short reels for social media platforms.",
    },
    {
      name: "5 Min Long Video",
      price: "2500 Rs (Per Video)",
      description: "Producing 5-minute long videos for your brand.",
    },
    {
      name: "SMS Marketing",
      price: "10000 Rs (5000 SMS)",
      description: "Sending bulk SMS messages to your target audience.",
    },
    {
      name: "Automated Calls",
      price: "Prices Depends on the requirement",
      description:
        "Automating phone calls for marketing or informational purposes.",
    },
  ]);
  return (
    <>
      <h1 id="service" className="text-center my-6 text-5xl font-semibold">
        Services
      </h1>

      <div className="lg:px-28">
        <div className="container m-auto px-6 text-gray-500  xl:px-0">
          <div className="mx-auto grid gap-6 lg:w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="break-inside shadow-xl hover:bg-gradient-to-bl hover:from-purple-700 hover:to-purple-900 hover:scale-95 duration-200 w-fit relative overflow-hidden flex flex-col justify-between space-y-2 text-sm rounded-xl p-4 mb-4 bg-gradient-to-tr from-purple-500 to-purple-700 text-white"
              >
                <div className="flex flex-row items-center lg:space-x-3">
                  <span className="text-base m-0 font-medium">
                    {service.name}
                  </span>
                </div>
                <div className="flex justify-between items-center flex-wrap">
                  <span className="text-xs my-2 lg:w-7/12">
                    {service.description}
                  </span>
                  <Link to="/services-form">
                    <button className="flex items-center hover:bg-black hover:text-white justify-center text-xs font-medium rounded-full px-3 py-1 space-x-1 bg-white text-black">
                      <span>Next step</span>
                      <IoArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
