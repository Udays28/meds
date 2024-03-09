import { Link } from "react-router-dom";
// import Domains from "../subsections/Domains";
import HorizontalScroll from "../subsections/HorizontalScroll";
import Reviews from "../subsections/Reviews";
import Faq from "../subsections/Faq";
import Companies from "../subsections/Companies";
import Unique from "../subsections/Unique";
import Home2 from "../subsections/Home2";

const Homepage = () => {
  return (
    <>
      <Home2 />
      <section className=" text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl">
              Understand User Flow.
              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl sm:text-md/relaxed">
              <span className=" font-semibold">
                4+ years of experience | 45+ Brands | 2.5+ Crore Ad spent
              </span>{" "}
              <br />
              <span className=" text-md">
                {" "}
                A dedicated team of specialists, delivering remarkable work to
                our clients worldwide!
              </span>
            </p>
            <Link to="/about">
              <button className="bg-purple-500 text-white px-4 py-2 rounded-full my-6">
                All About Grothify
              </button>
            </Link>
            <p className="my-12">
              Our Performance Marketing Services are Certified by
            </p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
              <div className="h-32 rounded-lg bg-gray-200"></div>
              <div className="h-32 rounded-lg bg-gray-200"></div>
              <div className="h-32 rounded-lg bg-gray-200"></div>
            </div>
          </div>
        </div>

        {/* <Domains /> */}

        <HorizontalScroll />
        <Reviews />
        <Unique />
        <Faq />
        <Companies />
      </section>
    </>
  );
};

export default Homepage;
