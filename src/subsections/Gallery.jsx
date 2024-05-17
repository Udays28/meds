/* eslint-disable react/no-unescaped-entities */
const Gallery = () => {
  return (
    <header className="bg-white lg:pt-12 lg:px-24 ">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
                Moments of Inspiration: Our Journey with{" "}
                <span className="text-purple-500">Digital Marketing</span>{" "}
                Leaders{" "}
              </h1>
              <p className="mt-5 text-gray-600 ">
              " Deepam Soni, the trailblazing founder of Grothify, boasting over four years of immersive experience in Digital Marketing and Social Media Marketing. Deepam's journey is defined by collaboration with numerous esteemed companies and brands, crafting bespoke strategies that drive growth and engagement. With a profound understanding of market dynamics and consumer behavior, Deepam has earned a reputation for delivering exceptional results. <br /><br /> At Grothify, his visionary leadership inspires innovation and excellence, making us the preferred partner for businesses seeking to dominate the digital realm. Join us and experience the expertise of Deepam Soni in reshaping the landscape of digital and social media marketing."
                <br />
              </p>{" "}
              
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center h-full justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <div className="h-2/3 lg:w-80 w-full flex flex-row lg:flex-col gap-2 p-1 ">
              <div className="w-full lg:h-1/2 h-full rounded-lg">
                <img className="" src="./images/g1.jpg" alt="" />
              </div>
              <div className="w-full lg:h-1/2 h-full rounded-lg">
                {" "}
                <img className="" src="./images/g2.jpg" alt="" />
              </div>
            </div>
            <div className="h-full w-80 flex flex-col gap-2 p-1 ">
              <div className="w-full lg:h-1/2 h-full rounded-lg">
                {" "}
                <img className="" src="./images/g5.jpg" alt="" />
              </div>
              <div className="w-full lg:h-1/2 h-full rounded-lg">
                {" "}
                <img className="" src="./images/g7.png" alt="" />
              </div>
              <div className="w-full lg:h-1/2 h-full rounded-lg">
                {" "}
                <img className="" src="./images/g6.jpg" alt="" />
              </div>
            </div>
            <div className="h-2/3 lg:w-80 w-full flex flex-row lg:flex-col gap-2 p-1">
              <div className="w-full lg:h-1/2 h-full rounded-lg">
                {" "}
                <img className="" src="./images/g9.jpg" alt="" />
              </div>
              <div className="w-full lg:h-1/2 h-full rounded-lg">
                {" "}
                <img className="" src="./images/g8.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Gallery;
