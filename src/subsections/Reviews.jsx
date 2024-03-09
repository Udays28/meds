/* eslint-disable no-unused-vars */
import { useState } from "react";

const Reviews = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      video: "./hhh.mp4",
    },
    {
      id: 1,
      video: "./hhh.mp4",
    },
    {
      id: 1,
      video: "./hhh.mp4",
    },
  ]);
  return (
    <>
      <h1 className="my-12 text-3xl lg:text-4xl text-center font-semibold">
        Reviews From Recent Clients
      </h1>

      <section className=" items-center lg:py-12 lg:flex lg:justify-center">
        <div className="overflow-hidden bg-white  lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="lg:w-1/2">
            <video className="h-full w-full" controls>
              <source src="./hhh.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800  md:text-3xl">
              Build Your New <span className="text-purple-500">Idea</span>
            </h2>
            <p className="mt-4 text-gray-500 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </p>
            <div className="inline-flex w-full mt-6 sm:w-auto">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-purple-600 rounded-full hover:bg-purple-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className=" items-center lg:py-12 lg:flex lg:justify-center">
        <div className="overflow-hidden flex-row-reverse bg-white  lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="lg:w-1/2">
            <video className="h-full w-full" controls>
              <source src="./hhh.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800  md:text-3xl">
              Build Your New <span className="text-purple-500">Idea</span>
            </h2>
            <p className="mt-4 text-gray-500 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </p>
            <div className="inline-flex w-full mt-6 sm:w-auto">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-purple-600 rounded-full hover:bg-purple-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className=" items-center lg:py-12 lg:flex lg:justify-center">
        <div className="overflow-hidden bg-white  lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="lg:w-1/2">
            <video className="h-full w-full" controls>
              <source src="./hhh.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800  md:text-3xl">
              Build Your New <span className="text-purple-500">Idea</span>
            </h2>
            <p className="mt-4 text-gray-500 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </p>
            <div className="inline-flex w-full mt-6 sm:w-auto">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-purple-600 rounded-full hover:bg-purple-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <button className="bg-purple-500 py-3 capitalize text-white w-44 rounded-full hover:shadow-xl my-8 px-6">
          Read all
        </button>
      </div>
    </>
  );
};

export default Reviews;
