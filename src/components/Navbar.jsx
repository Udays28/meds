import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useHistory hook

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const scrolltoservice = () => {
    const about = document.getElementById("service");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrolltosFAQ = () => {
    const faq = document.getElementById("faq");
    if (faq) {
      faq.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFAQClick = () => {
    // Scroll to FAQ section after navigating to the home page
    navigate('/');
    setTimeout(scrolltosFAQ, 100); // Adjust the timeout as needed
  }; 
   const handleServiceClick = () => {
    // Scroll to FAQ section after navigating to the home page
    navigate('/');
    setTimeout(scrolltoservice, 100); // Adjust the timeout as needed
  };
  return (
    <nav className="relative glass rounded-xl shadow w-full lg:w-fit lg:mx-28 ">
      <div className="container px-6 py-4 mx-auto gap-24 md:flex md:justify-between md:items-center">
        <div className="flex items-center  justify-between">
          <div className="flex items-center gap-3 justify-between">
            <img className="h-9 w-9" src="./logo.png" alt="" />
            <h1 className=" text-3xl font-semibold text-black">Grothify</h1>
          </div>
          {/* Mobile menu button */}
          <div className="flex md:hidden lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500  hover:text-gray-600 0 focus:outline-none focus:text-gray-600 "
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:mx-6">
            <div className="flex flex-col h-6 trans px-2 overflow-hidden">
              <Link className="duration-300" to="/">
                Home
              </Link>
              <Link className="duration-300   text-purple-500" to="/">
                Home
              </Link>
            </div> 
            <div onClick={handleServiceClick} className="flex flex-col h-6 trans px-2 overflow-hidden">
              <Link className="duration-300" to="/">
                Services
              </Link>
              <Link className="duration-300   text-purple-500" to="/">
                Services
              </Link>
            </div>
            
            <div className="flex flex-col h-6 trans px-2 overflow-hidden">
              <Link className="duration-300" to="/all-clients">
                Clients
              </Link>
              <Link
                className="duration-300   text-purple-500"
                to="/all-clients"
              >
                Clients
              </Link>
            </div>    <div className="flex flex-col h-6 trans px-2 overflow-hidden">
              <Link className="duration-300" to="/portfolio">
                Portfolio
              </Link>
              <Link
                className="duration-300   text-purple-500"
                to="/portfolio"
              >
                Portfolio
              </Link>
            </div>
            <div className="flex flex-col h-6 trans px-2 overflow-hidden">
              <Link className="duration-300" to="/reviews">
                Reviews
              </Link>
              <Link className="duration-300   text-purple-500" to="/reviews">
                Reviews
              </Link>
            </div><div className="flex flex-col h-6 trans px-2 overflow-hidden">
              <Link className="duration-300" to="/blog">
                Blog
              </Link>
              <Link className="duration-300   text-purple-500" to="/blog">
                Blog
              </Link>
            </div>
            <div
              onClick={handleFAQClick}
              className="flex flex-col h-6 trans px-2 overflow-hidden"
            >
              <Link className="duration-300" to="/">
                FAQs
              </Link>
              <Link className="duration-300   text-purple-500" to="/">
                FAQs
              </Link>
            </div>
            <div className="flex flex-col h-6 trans px-2 overflow-hidden">
              <Link className="duration-300" to="/about">
                About
              </Link>
              <Link className="duration-300   text-purple-500" to="/about">
                About
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <button className="chatbtn">
            <p className=" text-sm font-semibold">Chat Now</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
