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
                Welcome to our gallery, a visual celebration of the milestones,
                events, and personalities that have shaped our journey in the
                digital marketing world. Here, you'll find snapshots with
                industry pioneers, influential figures, and renowned
                personalities who inspire us to push the boundaries of
                innovation and excellence.
                <br />
              </p>{" "}
              <p className="mt-5 text-gray-600 ">
              We've had the privilege of meeting and learning from some of the brightest minds in digital marketing. These images capture moments with industry leaders who have revolutionized the way we approach marketing. <br />
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
