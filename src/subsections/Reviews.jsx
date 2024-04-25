import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const Reviews = () => {
  // eslint-disable-next-line no-unused-vars
  const [videos, setVideos] = useState([
    {
      source:
        "./videos/v1.mp4",
      name: "Manan Joshi",
      description:
        "  Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      source:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      name: "Aryan Tyagi",
      description:
        "  Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      source:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      name: "Aryan Tyagi",
      description:
        "  Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ]);
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-center mt-24 text-5xl font-semibold">
        Listen What our Clients Say
      </h1>{" "}
      <div className="relative lg:px-24 p-4 flex py-16 w-fit   flex-col lg:flex-row flex-wrap gap-16 justify-center ">
        {videos.map((video, index) => (
          <div key={index} className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <div>
                <video
                  width={320}
                  height={240}
                  controls
                  className="w-full rounded-t-lg"
                >
                  <source src={video.source} type="video/mp4" />
                  <source src="movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {video.name}
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  {video.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
