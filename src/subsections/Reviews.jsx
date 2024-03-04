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
      <div className="grid lg:px-12 px-3 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {videos.map((v, index) => (
          <div
            key={index}
            className="h-64 rounded-lg bg-gray-100 hover:-translate-y-1 hover:shadow-2xl border-2  border-purple-500 duration-200 overflow-hidden"
          >
            <video controls>
              <source src={v.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <h1>Owner Name</h1>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-purple-500 py-3 capitalize text-white w-44 rounded-lg hover:shadow-xl my-8 px-6">
          Read all
        </button>
      </div>
    </>
  );
};

export default Reviews;
