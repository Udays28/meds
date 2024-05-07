import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    mobileNo: "",
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const openModal = () => {
    document.getElementById("my_modal_3").showModal();
  };

  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("your_backend_url", formData);
      console.log(response.data); // Handle response from backend
      // Optionally, close the modal after successful submission
      closeModal();
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <>
      {isVisible && (
        <div>
          <section className="fixed z-20 max-w-sm p-4 m-auto bg-white shadow-lg border border-gray-200 lg:right-8 bottom-8 :border-gray-700 rounded-2xl">
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

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit} method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </form>
          <section className="max-w-4xl mx-auto bg-white :bg-purple-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize :text-white">
              Welcome To Grothify{" "}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label
                    className="text-gray-700 :text-gray-200"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label
                    className="text-gray-700 :text-gray-200"
                    htmlFor="emailAddress"
                  >
                    Email Address
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label
                    className="text-gray-700 :text-gray-200"
                    htmlFor="mobileNo"
                  >
                    Mobile No.
                  </label>
                  <input
                    id="mobileNo"
                    type="telephone"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                  Get Insights
                </button>
              </div>
            </form>
          </section>
        </div>
      </dialog>
    </>
  );
};

export default Popup;
