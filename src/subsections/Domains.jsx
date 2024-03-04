import { useState } from "react";

const Domains = () => {
  const [activeButton, setActiveButton] = useState("Web design");

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <section className="">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
        Our Services
        </h1>
        <div className="flex overflow-x-auto py-4 mt-4 w-full md:justify-center  items-center ">
          <button
            className={`h-12 px-5 py-2 -mb-px text-sm text-center ${
              activeButton === "Animation UI"
                ? "text-purple-600 bg-transparent border-b-2 border-purple-500"
                : "text-black bg-transparent border-gray-200  "
            } sm:text-base  whitespace-nowrap cursor-base focus:outline-none`}
            onClick={() => handleClick("Animation UI")}
          >
            Animated UI
          </button>
          <button
            className={`h-12 px-5 py-2 -mb-px text-sm text-center ${
              activeButton === "Web design"
                ? "text-purple-600 bg-transparent border-b-2 border-purple-500"
                : "text-black bg-transparent border-gray-200 "
            } sm:text-base  whitespace-nowrap cursor-base focus:outline-none`}
            onClick={() => handleClick("Web design")}
          >
            Web Development
          </button>
          <button
            className={`h-12 px-5 py-2 -mb-px text-sm text-center ${
              activeButton === "App design"
                ? "text-purple-600 bg-transparent border-b-2 border-purple-500"
                : "text-black bg-transparent border-gray-200 "
            } sm:text-base  whitespace-nowrap cursor-base focus:outline-none`}
            onClick={() => handleClick("App design")}
          >
            App Development
          </button>
        </div>

        <section className="mt-8 space-y-8 lg:mt-12 justify-center flex">
          {activeButton === "Animation UI" && (
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md ">
              <img
                className="object-cover w-full h-64"
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Article"
              />
              <div className="p-6">
                <div>
                  <span className="text-xs font-medium text-blue-600 uppercase ">
                    Product
                  </span>
                  <a
                    href="#"
                    className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline"
                    tabIndex={0}
                    role="link"
                  >
                    I Built A Successful Blog In One Year
                  </a>
                  <p className="mt-2 text-sm text-gray-600 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Molestie parturient et sem ipsum volutpat vel. Natoque sem
                    et aliquam mauris egestas quam volutpat viverra. In pretium
                    nec senectus erat. Et malesuada lobortis.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <img
                        className="object-cover h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                        alt="Avatar"
                      />
                      <a
                        href="#"
                        className="mx-2 font-semibold text-gray-700 "
                        tabIndex={0}
                        role="link"
                      >
                        Jone Doe
                      </a>
                    </div>
                    <span className="mx-1 text-xs text-gray-600 ">
                      21 SEP 2015
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeButton === "Web design" && <h1>Hwllo2o</h1>}
          {activeButton === "App design" && <h1>Hwlloo3</h1>}
        </section>
      </div>
    </section>
  );
};

export default Domains;
