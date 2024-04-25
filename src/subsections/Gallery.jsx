const Gallery = () => {
  return (
    <header className="bg-white lg:pt-12 lg:px-24 ">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
                Gallery Section
              </h1>
              <p className="mt-5 text-gray-600 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Labore praesentium deleniti dolor eaque quo
                impedit dignissimos totam officiis, asperiores est corporis
                mollitia nihil voluptatibus earum quisquam odit quis!
                Laudantium, nam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. <br />
              </p>{" "}<p className="mt-5 text-gray-600 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Labore praesentium deleniti dolor eaque quo
                impedit dignissimos totam officiis, asperiores est corporis
                mollitia nihil voluptatibus earum quisquam odit quis!
                Laudantium, nam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. <br />
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
