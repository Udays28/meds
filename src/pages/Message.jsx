import { useState } from 'react';
import axios from 'axios';

const Message = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrorMessage(''); // Clear error message when user starts typing
    setSuccessMessage(''); // Clear error message when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setErrorMessage('Please fill in all fields.');
      setTimeout(() => setErrorMessage(''), 3000); // Clear error message after 3 seconds

      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/api/v1/message', formData); // Assuming the backend route is '/api/messages'
      setSuccessMessage(response.data.message);
      setFormData({
        name: '',
        email: '',
        phone: '',
        budget: '',
        message: ''
      }); // Clear form fields after successful submission
     
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Something went wrong. Please try again.'); // Display the error message from the server or a default message
    }
    setLoading(false);
  };

  const validateForm = () => {
    const { name, email, phone, budget, message } = formData;
    return name && email && phone && budget && message;
  };

  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h1 className="text-5xl font-bold my-6">Send Us Message</h1>
            <p className="max-w-xl text-lg">
              At the same time, the fact that we are wholly owned and totally
              independent from manufacturer and other group control gives you
              confidence that we will only recommend what is right for you.
            </p>

            <div className="mt-8">
              <a href="#" className="text-2xl font-bold text-purple-600">
                {" "}
                0151 475 4450{" "}
              </a>

              <address className="mt-2 not-italic">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-1">
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Your Budget"
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-purple-700 px-5 py-3 font-medium text-white sm:w-auto"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Enquiry'}
                </button>
              </div>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
