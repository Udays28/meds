/* eslint-disable react/no-unescaped-entities */
const AboutPage = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1537731121640-bc1c4aba9b80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center  bg-gray-200">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-200"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h1 className="bg-gradient-to-r to-green-700 via-blue-500 from-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Unlocking Innovation:
                <span className="sm:block">
                  {" "}
                  MERN Stack Mastery & React Native Expertise{" "}
                </span>
              </h1>

              <p className="mt-4 text-gray-600">
                As a MERN Stack developer and React Native app creator, I
                specialize in crafting innovative solutions that redefine user
                experiences. With a passion for excellence and a commitment to
                pushing boundaries, I thrive on building seamless and scalable
                applications that drive transformative change. Let's shape the
                future together
              </p>

              <button className="bg-purple-500 px-4 py-2 rounded-lg my-12 text-white">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
