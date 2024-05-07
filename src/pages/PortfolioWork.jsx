/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";

const PortfolioWork = () => {
  const [socialMediaMarketing, setSocialMediaMarketing] = useState([
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
    },{
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

  // Reference to the carousel container
  const carouselRef = useRef(null);
  // Initial state for tracking mouse movement
  const [isGrabbing, setIsGrabbing] = useState(false);
  // Initial state for tracking mouse position
  const [initialMouseX, setInitialMouseX] = useState(0);
  // Initial state for tracking scroll position
  const [scrollLeft, setScrollLeft] = useState(0);

  // Function to handle mouse down event
  const handleMouseDown = (e) => {
    setIsGrabbing(true);
    // Prevent text selection
    e.preventDefault();
    // Record initial mouse position
    setInitialMouseX(e.clientX);
    // Record initial scroll position
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  // Function to handle mouse move event
  const handleMouseMove = (e) => {
    if (!isGrabbing) return;
    // Calculate the amount of scrolling
    const delta = e.clientX - initialMouseX;
    // Update scroll position
    carouselRef.current.scrollLeft = scrollLeft - delta;
  };

  // Function to handle mouse up event
  const handleMouseUp = () => {
    setIsGrabbing(false);
  };

  // Add event listeners when component mounts
  useEffect(() => {
    // Add event listeners for mouse move and mouse up events
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    // Remove event listeners when component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isGrabbing]);

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

      <h1 className="mt-12 my-4 text-black text-3xl font-semibold">
        Social Media Marketing
      </h1>
      <div
        ref={carouselRef}
        className="carousel carousel-center bg-zinc-200 p-4 space-x-4  rounded-box"
        onMouseDown={handleMouseDown} // Add onMouseDown event listener
        style={{ cursor: isGrabbing ? "grabbing" : "grab" }} // Change cursor based on grabbing state
      >
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
