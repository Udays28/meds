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
      
      <div className="relative">
        {client.map((items, index) => (
          <div
            key={index}
            className="sticky top-0 lg:top-20 h-full flex flex-col items-center justify-center"
          >
            <header className="bg-white py-6 z-10 w-full lg:px-20 ">
              <div className="container px-6 mx-auto">
                <div className="items-center gap-6 lg:flex">
                  <div className="flex items- justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img
                      className="lg:w-[70%] w-[30%] md:w-[20%] h-[90%] lg:max-w-3xl"
                      src={items.image}
                      alt="Catalogue-pana.svg"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                      <h1 className="text-xl text-purple-500 font-semibold my-4">
                        {items.name}
                      </h1>
                      <h1 className="text-xl font-bold text-gray-800  lg:text-4xl">
                        {items.tagline}
                      </h1>
                      <p className="mt-5  text-gray-600 ">
                        {items.description}
                      </p>
                      <p className="my-6 bg-purple-200 w-fit rounded-full text-black px-4 py-1">
                        {items.bussiness}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClientsPage;
