/* eslint-disable no-unused-vars */
import { useState } from "react";

const ClientsPage = () => {
  const [client, setClient] = useState([
    {
      name: "Aryan Tyagi",
      tagline:
        "Askin Astrogy worked his astrological wonders with Adymize's enchanting services",
      bussiness: "Network Marketing",
      image:
        "https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores earum minima sapiente, dolores aperiam inventore architecto? Ut, suscipit? Accusamus facere eaque consequatur officiis ratione mollitia quis, eveniet praesentium itaque assumenda.",
    },
    {
      name: "Aryan Tyagi",
      tagline:
        "Askin Astrogy worked his astrological wonders with Adymize's enchanting services",
      bussiness: "Network Marketing",
      image:
        "https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores earum minima sapiente, dolores aperiam inventore architecto? Ut, suscipit? Accusamus facere eaque consequatur officiis ratione mollitia quis, eveniet praesentium itaque assumenda.",
    },
    {
      name: "Aryan Tyagi",
      tagline:
        "Askin Astrogy worked his astrological wonders with Adymize's enchanting services",
      bussiness: "Network Marketing",
      image:
        "https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores earum minima sapiente, dolores aperiam inventore architecto? Ut, suscipit? Accusamus facere eaque consequatur officiis ratione mollitia quis, eveniet praesentium itaque assumenda.",
    },
    {
      name: "Aryan Tyagi",
      tagline:
        "Askin Astrogy worked his astrological wonders with Adymize's enchanting services",
      bussiness: "Network Marketing",
      image:
        "https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores earum minima sapiente, dolores aperiam inventore architecto? Ut, suscipit? Accusamus facere eaque consequatur officiis ratione mollitia quis, eveniet praesentium itaque assumenda.",
    },
  ]);
  return (
    <>
      <section className="bg-white  mt-12  lg:px-24   :bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl            :text-white">
            Our <span className="text-purple-500">Clients</span>
          </h1>
          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500            :text-gray-300">
          At Grothify, we value strong client relationships. We work with diverse small businesses, tailoring our services to their unique needs. Their success is our top priority.
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
            {client.map((clients, index) => (
              <div
                key={index}
                className="lg:px-12 lg:py-8 p-4 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-purple-600     hover:text-white       :border-gray-700            :hover:border-transparent"
              >
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <img
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src={clients.image}
                    alt=""
                  />
                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl            :text-white group-hover:text-white">
                      {clients.name}{" "}
                    </h1>
                    <p className="mt-2 text-gray-500 capitalize            :text-gray-300 group-hover:text-gray-300">
                      {clients.bussiness}
                    </p>
                  </div>
                </div>
               <h1 className="font-semibold my-4">{clients.tagline}</h1>
                <p className="mt-4 text-gray-500 capitalize text-sm           :text-gray-300 group-hover:text-gray-300">
                 {clients.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientsPage;
