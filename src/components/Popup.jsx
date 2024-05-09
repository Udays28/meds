import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };



  return (
    <>
      {isVisible && (
        <div className="flex justify-center items-center max-w-sm">
          <section className="fixed z-20 lg:max-w-96 max-w-80 p-4 m-auto bg-white shadow-lg border border-gray-200 lg:right-8 bottom-8 :border-gray-700 rounded-2xl">
            <h2 className="font-semibold text-gray-800 :text-white">
              🚀 Stay Updated!
            </h2>
            <p className="mt-4 text-sm text-gray-600 :text-gray-300">
              Receive Valuable Marketing Insights from Deepam Soni through push
              notification
            </p>
            <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
              <button
                className="text-xs text-gray-800 underline transition-colors duration-300 :text-white :hover:text-gray-400 hover:text-gray-600 focus:outline-none"
                onClick={handleClose}
              >
                No Thanks
              </button>
              <Link to="/services-form">
              <button
              
                className="text-xs bg-purple-500 font-medium rounded-lg hover:bg-purple-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
                >
                Yes, Awesome
              </button>
                </Link>
            </div>
          </section>
        </div>
      )}

      
    </>
  );
};

export default Popup;
