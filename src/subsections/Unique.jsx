const Unique = () => {
  return (
    <section className="bg-white ">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-xl flex justify-center flex-col items-center gap-4 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
            How Are We Different From Others
          </h1>
          <p className="bg-purple-300 py-1 rounded-full w-fit px-4">
            UNIQUE.UNIQUE.UNIQUE
          </p>
        </div>
        <div className="my-6 flex flex-col gap-8 lg:px-24">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="h-32 rounded-lg bg-gray-200"></div>
            <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
            <div className="h-32 rounded-lg bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="h-32 rounded-lg bg-gray-200"></div>
            <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unique;
