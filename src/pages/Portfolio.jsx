import  { useState } from "react";

const Portfolio = () => {
  // State to store information of the clicked portfolio item
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  // Function to handle click on portfolio item
  const handlePortfolioClick = (portfolio) => {
    setSelectedPortfolio(portfolio);
    document.getElementById("my_modal_3").showModal();
  };

  return (
    <section className="bg-white ">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center pt-6 text-gray-800 capitalize lg:text-3xl ">
          Portfolio
        </h1>
        <p className="mt-4 text-center text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
          voluptatibus
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {/* Portfolio items */}
          {portfolioData.map((portfolio, index) => (
            <div
              key={index}
              onClick={() => handlePortfolioClick(portfolio)}
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{
                backgroundImage: `url(${portfolio.image})`,
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 lg:opacity-0 opacity-100 backdrop-blur-sm bg-gray-800/60 lg:group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  {portfolio.title}
                </h2>
                <p className="mt-2 text-lg tracking-wider text-purple-400 uppercase ">
                  {portfolio.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-7xl p-6">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={() => setSelectedPortfolio(null)} // Clear selected portfolio on close
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          {selectedPortfolio && (
            <>
              <h3 className="font-bold text-lg">{selectedPortfolio.title}</h3>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8">

             
                {selectedPortfolio.work.map((project, index) => (
                  <div
                    key={index}
                    className="bg-zinc-100 flex w-96 flex-col justify-between duration-200 z-10 p-6 mt-6 h-full rounded-3xl"
                  >
                    <div className="overflow-hidden rounded-xl">
                      <img
                        className="object-cover hover:scale-105 duration-150 object-center w-full h-44 rounded-lg lg:h-52"
                        src={project.image}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h1 className=" font-semibold bg-purple-200 w-fit px-3 py-1 rounded-xl text-gray-800">
                        {project.title}
                      </h1>

                      <div className="flex items-center justify-between mt-">
                        <div className="w-full">
                          <p className="text-gray-600 mt-2">
                            {project.description}
                          </p>
                          <p className="text-gray-600 mt-2">
                            Client: {project.client}
                          </p>
                          <p className="text-gray-600 mt-2">
                            Date: {project.date}
                          </p>
                          <p className="text-gray-600 mt-2">
                            Project Link:{" "}
                            <a
                              href={project.projectLink}
                              className="text-purple-600 underline"
                            >
                              {project.projectLink}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
               </div>
            </>
          )}
        </div>
      </dialog>
    </section>
  );
};

const portfolioData = [
  {
    title: "Social Media Marketing",
    category: "Graphics",
    image:
      "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      work: [
        {
          title: "MK Traders",
          image: "./projectimages/mktraders.jpg",
          client: "Client 3",
          date: "March 2022",
       
        },{
          title: "Care Continuum Hospital",
          image: "./projectimages/cchospital.jpg",
          client: "Client 3",
          date: "March 2022",
       
        },
        // Add more projects for Website Development as needed
      ],
  },
  {
    title: "Website Development",
    category: "Website",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 
    work: [
      {
        title: "Nourish Nest",
        image: "./projectimages/nourishnest.png",
        techStack: ["Tech 1", "Tech 2"],
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        client: "Client 1",
        date: "January 2022",
        projectLink: "https://nourishnest.in/",
      },
      {
        title: "Project 2",
        image: "https://example.com/project2.jpg",
        techStack: ["Tech 3", "Tech 4"],
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        client: "Client 2",
        date: "February 2022",
        projectLink: "https://www.behance.net/project2",
      },  {
        title: "Nourish Nest",
        image: "./projectimages/nourishnest.png",
        techStack: ["Tech 1", "Tech 2"],
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        client: "Client 1",
        date: "January 2022",
        projectLink: "https://nourishnest.in/",
      },
      {
        title: "Project 2",
        image: "https://example.com/project2.jpg",
        techStack: ["Tech 3", "Tech 4"],
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        client: "Client 2",
        date: "February 2022",
        projectLink: "https://www.behance.net/project2",
      },
      // Add more projects for Social Media Marketing as needed
    ],
  },
  {
    title: "Logo Designing",
    category: "Logo",
    image:
      "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    work: [
      {
        title: "Project 4",
        image: "https://example.com/project4.jpg",
        techStack: ["Tech 7", "Tech 8"],
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        client: "Client 4",
        date: "April 2022",
        projectLink: "https://www.behance.net/project4",
      },
      // Add more projects for Logo Designing as needed
    ],
  },
  {
    title: "Video Editing projects",
    category: "Videos",
    image:
      "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    work: [
      {
        title: "Project 5",
        image: "https://example.com/project5.jpg",
        techStack: ["Tech 9", "Tech 10"],
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        client: "Client 5",
        date: "May 2022",
        projectLink: "https://www.behance.net/project5",
      },
      // Add more projects for Video Editing projects as needed
    ],
  },
  {
    title: "Ads",
    category: "Facebook, Google, Instagram Ads",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    work: [
      {
        title: "Project 6",
        image: "https://example.com/project6.jpg",
        techStack: ["Tech 11", "Tech 12"],
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        client: "Client 6",
        date: "June 2022",
        projectLink: "https://www.behance.net/project6",
      },
      // Add more projects for Ads as needed
    ],
  },
  // Add more portfolio items as needed
];

export default Portfolio;
