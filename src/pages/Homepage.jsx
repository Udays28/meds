import { Link } from "react-router-dom";
// import Domains from "../subsections/Domains";
import HorizontalScroll from "../subsections/HorizontalScroll";
import Reviews from "../subsections/Reviews";
import Faq from "../subsections/Faq";
import Companies from "../subsections/Companies";
import Unique from "../subsections/Unique";


const Homepage = () => {
  return (
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
              A dedicated team of specialists, delivering remarkable work to our
              clients worldwide!
            </span>
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/message">
              <button className="relative border hover:border-purple-600 duration-500 group cursor-pointer text-purple-50  overflow-hidden h-14 w-56 rounded-md bg-purple-700 p-2 flex justify-center items-center font-bold">
                <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-purple-600 delay-150 group-hover:delay-75" />
                <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-purple-700 delay-150 group-hover:delay-100" />
                <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-purple-600 delay-150 group-hover:delay-150" />
                <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-purple-500 delay-150 group-hover:delay-200" />
                <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-purple-400 delay-150 group-hover:delay-300" />
                <p className="z-10">Book a Strategy Call</p>
              </button>
            </Link>
          </div>
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
      <Unique/>
      <Faq/>
      <Companies/>
    
    </section>
  );
};

export default Homepage;
