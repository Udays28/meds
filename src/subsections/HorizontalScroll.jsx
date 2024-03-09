import PropTypes from "prop-types";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScroll = () => {
  return (
    <div id="service" className="p-2">
      <h1 className="text-3xl translate-y-24 lg:text-4xl font-semibold text-center">
        Our Services
      </h1>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-76%"]);

  return (
    <section
      ref={targetRef}
      className="relative flex justify-center h-[300vh] "
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group flex-col lg:flex-row relative flex gap-4 p-4 h-[450px] lg:w-[750px] md:w-[400px] w-screen overflow-hidden bg-neutral-100 rounded-xl"
    >
      <div className="lg:h-full w-full h-1/2 lg:w-1/2 rounded-lg bg-gradient-to-r from-purple-400  to-purple-600"></div>
      <div className="lg:w-1/2 flex flex-col justify-center gap-4">
        <p className="bg-purple-300 py-1 rounded-full w-fit px-4">
          {card.subhead}
        </p>
        <h1 className="text-3xl font-bold">{card.title}</h1>
        <p>{card.discription}</p>
        <div className="flex gap-3 flex-wrap">
          {card.add.map((item, id) => (
            <h1 key={id} className="bg-zinc-200 w-fit px-3 rounded-md">
              {item}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    discription: PropTypes.string.isRequired,
    subhead: PropTypes.string.isRequired,
    add: PropTypes.arrayOf(PropTypes.string).isRequired, // Add this line
  }).isRequired,
};

export default HorizontalScroll;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum cum commodi excepturi ipsam tempore culpa quam ducimus ea. Laborum fugiat in magni rem libero aliquid. Aperiam sapiente doloribus obcaecati.",
    id: 1,
    add: ["Facebook", "Instagram"],
    subhead: "ads.ads.ads",
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum cum commodi excepturi ipsam tempore culpa quam ducimus ea. Laborum fugiat in magni rem libero aliquid. Aperiam sapiente doloribus obcaecati.",
    id: 2,
    add: ["Facebook", "Instagram"],
    subhead: "ads.ads.ads",
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum cum commodi excepturi ipsam tempore culpa quam ducimus ea. Laborum fugiat in magni rem libero aliquid. Aperiam sapiente doloribus obcaecati.",
    id: 3,
    add: ["Facebook", "Instagram"],
    subhead: "ads.ads.ads",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum cum commodi excepturi ipsam tempore culpa quam ducimus ea. Laborum fugiat in magni rem libero aliquid. Aperiam sapiente doloribus obcaecati.",
    id: 4,
    add: ["Facebook", "Instagram"],
    subhead: "ads.ads.ads",
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum cum commodi excepturi ipsam tempore culpa quam ducimus ea. Laborum fugiat in magni rem libero aliquid. Aperiam sapiente doloribus obcaecati.",
    id: 5,
    add: ["Facebook", "Instagram"],
    subhead: "ads.ads.ads",
  },

  {
    url: "/imgs/abstract/6.jpg",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum cum commodi excepturi ipsam tempore culpa quam ducimus ea. Laborum fugiat in magni rem libero aliquid. Aperiam sapiente doloribus obcaecati.",
    title: "Title 6",
    id: 6,
    add: ["Facebook", "Instagram"],
    subhead: "ads.ads.ads",
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum cum commodi excepturi ipsam tempore culpa quam ducimus ea. Laborum fugiat in magni rem libero aliquid. Aperiam sapiente doloribus obcaecati.",
    id: 7,
    add: ["Facebook", "Instagram"],
    subhead: "ads.ads.ads",
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 8",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum cum commodi excepturi ipsam tempore culpa quam ducimus ea. Laborum fugiat in magni rem libero aliquid. Aperiam sapiente doloribus obcaecati.",
    id: 8,
    add: ["Facebook", "Instagram"],
    subhead: "ads.ads.ads",
  },
];
