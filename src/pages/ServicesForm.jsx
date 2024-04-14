import { useState } from "react";
import axios from "axios";

const ServiceForm = () => {
  const services = [
    "Logo Designing",
    "3D Logo Designing",
    "Facebook Ads",
    "Google Ads",
    "Social Media Marketing",
    "Content Writing",
    "Youtube Channel Management",
    "Graphics Designing",
    "Website Development",
    "App Development",
    "SEO",
    "E-Mail Marketing",
    "Whatsapp Automation",
    "Script Writing",
    "Lead Generation",
    "3D Animation",
    "2D Animation",
    "Reels Editing",
    "5 Min Long Video",
    "SMS Marketing",
    "Automated Calls",
    "E-Commerce Website",
  ];

  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleServiceToggle = (serviceName) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(
        selectedServices.filter((service) => service !== serviceName)
      );
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  const handleRemoveService = (serviceName) => {
    setSelectedServices(
      selectedServices.filter((service) => service !== serviceName)
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await submitFormData(formData, selectedServices);
      setSuccessMessage(response.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        budget: "",
        message: "",
      });
      setSelectedServices([]);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.mobile &&
      formData.budget &&
      formData.message &&
      selectedServices.length > 0
    );
  };

  const submitFormData = async (formData, selectedServices) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/service-formMessage",
        {
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          phone: formData.mobile,
          budget: formData.budget,
          message: formData.message,
          servicesSelected: selectedServices,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to send message, server error");
    }
  };

  return (
    <section className="bg-white">
      <div className=" w-full">
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="w-screen lg:px-16">
            <h1 className="lg:text-5xl text-4xl text-purple-500 font-semibold">
              <span className="text-3xl text-black"> Boost Your Business: </span>
              <br /> Elevate Your Success Now!
            </h1>
            <form
              onSubmit={handleSubmit}
              className="mt-8  grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8"
            >
              <div className="w-full flex flex-col gap-4 lg:flex-row">
                <div className="lg:w-1/2 w-full flex flex-col justify-between">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="FirstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>

                    <input
                      type="text"
                      id="FirstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 p-3 w-full h-12 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>

                    <input
                      type="text"
                      id="LastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 p-3 w-full h-12 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="Email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {" "}
                      Email{" "}
                    </label>

                    <input
                      type="email"
                      id="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 p-3 w-full h-12 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="Mobile"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mobile No
                    </label>

                    <input
                      type="text"
                      id="Mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="mt-1 p-3 w-full h-12 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full lg:w-1/2 justify-center">
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Budget
                  </label>
                  <input
                    value={formData.budget}
                    onChange={handleChange}
                    name="budget" // Corrected name attribute
                    className="mt-1 p-3 w-full h-12 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    type="text"
                  />

                  <label
                    htmlFor="message"
                    className="block text-sm mt-3 font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 p-3 resize-none w-full full border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    name="message"
                    id=""
                    cols="30"
                    rows="9"
                  ></textarea>
                </div>
              </div>

              <div className="col-span-6">
                <h2 className="text-xl font-semibold my-4">Select Services</h2>
                <div className="flex flex-wrap w-full min-h-12 flex-row mb-4">
                  {selectedServices.map((service, index) => (
                    <div
                      key={index}
                      className="bg-purple-300 rounded-full text-sm px-2 py-1 mr-2 mb-2 flex items-center"
                    >
                      <span className="mr-2">{service}</span>
                      <button
                        onClick={() => handleRemoveService(service)}
                        className="text-red-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex w-fit flex-row mx-3 items-center mb-2"
                    >
                      <input
                        type="checkbox"
                        id={service}
                        value={service}
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 checked:bg-purple-600"
                      />
                      <label htmlFor={service} className="ml-2 text-gray-700">
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-6">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-purple-600 bg-purple-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-purple-600 focus:outline-none focus:ring active:text-purple-500"
                >
                  Submit Enquiry
                </button>
                <div className="col-span-6">
                  {loading && (
                    <p className="text-gray-700">Sending message...</p>
                  )}
                  {successMessage && (
                    <p className="text-green-500">{successMessage}</p>
                  )}
                  {errorMessage && (
                    <p className="text-red-500">{errorMessage}</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default ServiceForm;
