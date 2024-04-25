import { Link } from "react-router-dom";
// import Domains from "../subsections/Domains";
import Reviews from "../subsections/Reviews";
import Faq from "../subsections/Faq";
import Companies from "../subsections/Companies";
import Unique from "../subsections/Unique";
import Home2 from "../subsections/Home2";
import Services from "../subsections/Services";
import Footer from "../components/Footer";
import Gallery from "../subsections/Gallery";
import Contact from "../subsections/Contact";

const Homepage = () => {
  return (
    <>
      <Home2 />
      <section className=" text-black">
        <div className="mx-auto max-w-screen-xl px-4 lg:py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto text-center">
            <h1 className="bg-gradient-to-r from-purple-400 h-full via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-8xl">
              Transforming Vision into{" "}
              <span className="sm:block"> Digital Reality. </span>
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
            <Link className="flex justify-center items-center my-4" to="/about">
              <button className="cssbuttons-io-button">
                About Grothify
                <div className="icon">
                  <svg
                    height={24}
                    width={24}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
            </Link>
            <p className="my-12">
              Our Performance Marketing Services are Certified by
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-8">
              <div className="h-32 rounded-lg bg-gray-200"></div>
              <div className="h-32 rounded-lg bg-gray-200"></div>
              <div className="h-32 rounded-lg bg-gray-200"></div>
            </div>
          </div>
        </div>

        {/* <Domains /> */}
        <Services />
        <Reviews />
        <Gallery />
        <Unique />
        <Faq />
        <Contact />
        <Companies />
        <Footer />
      </section>
    </>
  );
};

export default Homepage;
