/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";

const PortfolioWork = () => {
  const [socialMediaMarketing, setSocialMediaMarketing] = useState([
    { image: "./projectimages/mktraders.jpg" },
    { image: "./projectimages/mktraders.jpg" },
    { image: "./projectimages/mktraders.jpg" },
    { image: "./projectimages/mktraders.jpg" },
    { image: "./projectimages/mktraders.jpg" },
    { image: "./projectimages/mktraders.jpg" },
    { image: "./projectimages/mktraders.jpg" },
  ]);

  const [logoDesigning, setLogoDesigning] = useState([
    { image: "./projectimages/logodesigning/band.png" },
    { image: "./projectimages/logodesigning/band2.png" },
    { image: "./projectimages/logodesigning/Bank.png" },
    { image: "./projectimages/logodesigning/cleaning_company.jpg" },
    { image: "./projectimages/logodesigning/educational_institute.jpg" },
    { image: "./projectimages/logodesigning/justparatha.jpg" },
    { image: "./projectimages/logodesigning/Rashmi.jpg" },
  ]);

  const [socialMediaPhotoShoot, setSocialMediaPhotoShoot] = useState([
    { image: "./projectimages/socialmedia/shoot1.jpg" },
    { image: "./projectimages/socialmedia/shoot2.jpg" },
    { image: "./projectimages/socialmedia/shoot3.jpg" },
    { image: "./projectimages/socialmedia/shoot4.jpg" },
    { image: "./projectimages/socialmedia/shoot5.jpg" },
    { image: "./projectimages/socialmedia/shoot6.jpg" },
    { image: "./projectimages/socialmedia/shoot7.jpg" },
    { image: "./projectimages/socialmedia/shoot8.JPG" },
    { image: "./projectimages/socialmedia/shoot9.png" },
    { image: "./projectimages/socialmedia/shoot10.png" },
    { image: "./projectimages/socialmedia/shoot11.jpg" },
    { image: "./projectimages/socialmedia/shoot12.jpg" },
    { image: "./projectimages/socialmedia/shoot13.png" },
    { image: "./projectimages/socialmedia/shoot17.png" },
    { image: "./projectimages/socialmedia/shoot14.jpg" },
    { image: "./projectimages/socialmedia/shoot15.jpg" },
    { image: "./projectimages/socialmedia/shoot16.png" },
    { image: "./projectimages/socialmedia/shoot17.jpg" },
  ]);

  // References to the carousel containers
  const socialMediaCarouselRef = useRef(null);
  const logoDesignCarouselRef = useRef(null);
  const socialMediaPhotoShootRef = useRef(null);

  // State for tracking mouse movement and scroll positions for each carousel
  const [socialMediaGrabbing, setSocialMediaGrabbing] = useState(false);
  const [logoDesignGrabbing, setLogoDesignGrabbing] = useState(false);
  const [socialMediaShootGrabbing, setSocialMediaShootGrabbing] = useState(false);
  const [initialMouseX, setInitialMouseX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Function to handle mouse down event for social media carousel
  const handleSocialMediaMouseDown = (e) => {
    setSocialMediaGrabbing(true);
    e.preventDefault();
    setInitialMouseX(e.clientX);
    setScrollLeft(socialMediaCarouselRef.current.scrollLeft);
  };

  // Function to handle mouse down event for logo design carousel
  const handleLogoDesignMouseDown = (e) => {
    setLogoDesignGrabbing(true);
    e.preventDefault();
    setInitialMouseX(e.clientX);
    setScrollLeft(logoDesignCarouselRef.current.scrollLeft);
  };

  // Function to handle mouse down event for social media photoshoot carousel
  const handleShootMouseDown = (e) => {
    setSocialMediaShootGrabbing(true);
    e.preventDefault();
    setInitialMouseX(e.clientX);
    setScrollLeft(socialMediaPhotoShootRef.current.scrollLeft);
  };

  // Function to handle mouse move event
  const handleMouseMove = (e) => {
    if (socialMediaGrabbing) {
      const delta = e.clientX - initialMouseX;
      socialMediaCarouselRef.current.scrollLeft = scrollLeft - delta;
    } else if (logoDesignGrabbing) {
      const delta = e.clientX - initialMouseX;
      logoDesignCarouselRef.current.scrollLeft = scrollLeft - delta;
    } else if (socialMediaShootGrabbing) {
      const delta = e.clientX - initialMouseX;
      socialMediaPhotoShootRef.current.scrollLeft = scrollLeft - delta;
    }
  };

  // Function to handle mouse up event
  const handleMouseUp = () => {
    setSocialMediaGrabbing(false);
    setLogoDesignGrabbing(false);
    setSocialMediaShootGrabbing(false);
  };

  // Add event listeners when component mounts
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [socialMediaGrabbing, logoDesignGrabbing, socialMediaShootGrabbing]);

  return (
    <div className="lg:px-28 p-4 mt-1">
      <div className="md:w-2/3 lg:w-1/2 mt-12 text-black">
        <h2 className="my-8 text-2xl font-bold text-black md:text-4xl">
          Showcasing Our Success: <span className="text-purple-600">Explore Our Portfolio</span>
        </h2>
        <p className="text-black">
          Dive into our portfolio to witness the transformative power of our digital marketing solutions. Each project reflects our dedication to driving growth and achieving results for our clients.
        </p>
      </div>

      <h1 className="mt-12 my-4 text-black text-3xl font-semibold">
        Social Media Marketing
      </h1>
      <div
        ref={socialMediaCarouselRef}
        className="carousel carousel-center space-x-4"
        onMouseDown={handleSocialMediaMouseDown}
        style={{ cursor: socialMediaGrabbing ? "grabbing" : "grab" }}
      >
        {socialMediaMarketing.map((item, index) => (
          <div key={index} className="carousel-item">
            <img className="h-96 rounded-xl" src={item.image} alt="Social Media Marketing" />
          </div>
        ))}
      </div>

      <h1 className="mt-12 my-4 text-black text-3xl font-semibold">
        Logo Designing
      </h1>
      <div
        ref={logoDesignCarouselRef}
        className="carousel carousel-center space-x-4"
        onMouseDown={handleLogoDesignMouseDown}
        style={{ cursor: logoDesignGrabbing ? "grabbing" : "grab" }}
      >
        {logoDesigning.map((item, index) => (
          <div key={index} className="carousel-item">
            <img className="h-96 p-6 rounded-xl" src={item.image} alt="Logo Design" />
          </div>
        ))}
      </div>
      
      <h1 className="mt-12 my-4 text-black text-3xl font-semibold">
        Social Media PhotoShoot
      </h1>
      <div
        ref={socialMediaPhotoShootRef}
        className="carousel carousel-center space-x-4"
        onMouseDown={handleShootMouseDown}
        style={{ cursor: socialMediaShootGrabbing ? "grabbing" : "grab" }}
      >
        {socialMediaPhotoShoot.map((item, index) => (
          <div key={index} className="carousel-item">
            <img className="h-96 p-6 rounded-xl" src={item.image} alt="Social Media PhotoShoot" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioWork;
