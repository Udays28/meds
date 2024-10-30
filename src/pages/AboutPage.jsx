/* eslint-disable react/no-unescaped-entities */
const AboutPage = () => {
  return (
    <>
      <header className="bg-white lg:pt-12 lg:px-20 ">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
                  About The Owner <br />
                  <span className="text-purple-500 font-semibold ">
                    Rohit Sharma
                  </span>
                </h1>
                {/* <p>At MediaBizz, we believe in the power of digital marketing to transform businesses and drive meaningful growth. Our mission is simple: to partner with you on your journey to digital success, leveraging cutting-edge strategies and unparalleled expertise to unlock your brand's full potential.</p> */}
                <p className="mt-5 text-gray-600 ">
                Welcome to MediaBizz, where digital marketing excellence meets innovation. I'm Rohit Sharma, an experienced digital marketer with over 4 years of expertise in crafting compelling strategies that drive results.<br /> Since igniting my career journey in 2020, I've had the privilege of collaborating with numerous brands across the globe. From startups to established enterprises, I've helped businesses of all sizes establish a formidable market presence and achieve unparalleled success. <br /><br />Join me on this exciting journey as we navigate the ever-evolving digital landscape together, turning challenges into opportunities and dreams into reality. Let's embark on a transformative digital journey that propels your business to new heights of success!
                </p>{" "}
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full rounded-xl h-full lg:max-w-3xl"
                src="https://images.unsplash.com/photo-1493519823106-602cbf9a280c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="  flex flex-col justify-between h-full p-4 lg:px-24 mt-5">
        <h2 className="mb-1 pt-12 text-3xl font-semibold leading-tight text-gray-900">
          About MediaBizz
        </h2>
        <p className="mb-12 text-lg text-gray-500">
          Here is a few of the awesome Services we provide.
        </p>
        <div className="w-full">
          <div className="flex flex-col gap-4 w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 flex justify-between sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      About MediaBizz
                    </h3>
                  </div>

                  <p className="mb-2 text-gray-600">
                    Welcome to MediaBizz, your premier destination for
                    cutting-edge digital marketing solutions. Founded by Rohit
                    Sharma, a visionary entrepreneur with a passion for digital
                    innovation, our agency specializes in delivering top-tier
                    digital marketing, social media marketing, and automation
                    services to propel your business to new heights.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      Our Expertise
                    </h3>
                  </div>

                  <p className="mb-2 text-gray-600">
                    At MediaBizz, we understand that every business is unique.
                    That's why we offer a comprehensive suite of services,
                    including digital marketing, social media marketing, and
                    automation, designed to meet your specific needs and
                    objectives. Whether you're a startup or a Fortune 500
                    company, we have the expertise and resources to help you
                    succeed in today's digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      Our Partnerships
                    </h3>
                  </div>

                  <p className="mb-2 text-gray-600">
                    Over the years,MediaBizz has had the privilege of partnering
                    with a diverse range of companies across various industries.
                    Our track record of success and long-term relationships with
                    our clients are a testament to our unwavering commitment to
                    excellence and client satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      What We Offer
                    </h3>
                  </div>

                  <p className="mb-2 text-gray-600">
                    At MediaBizz, we understand that every business is unique.
                    That's why we offer a comprehensive suite of services,
                    including digital marketing, social media marketing, and
                    automation, designed to meet your specific needs and
                    objectives. Whether you're a startup or a Fortune 500
                    company, we have the expertise and resources to help you
                    succeed in today's digital age.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      Get in Touch
                    </h3>
                  </div>

                  <p className="mb-2 text-gray-600">
                    Ready to take your digital presence to the next level?
                    Contact GMediaBizz today to learn how we can help you achieve
                    your goals and unlock your business's full potential. Let's
                    embark on a journey of growth and success together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
