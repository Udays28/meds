import { useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

const Dropdown = () => {
  return (
    <div className="z-50">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        <div className="flex cursor-pointer flex-col h-6 trans lg:px-2 px-0 md:px-0 overflow-hidden">
          <h1 className="duration-300 text-black">Services</h1>
          <h1 className="duration-300   text-purple-500">Services</h1>
        </div>
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <h1 className="relative text-white">{children}</h1>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-52 lg:left-1/2 top-12 lg:top-14 text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

FlyoutLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  FlyoutContent: PropTypes.elementType.isRequired,
};

const PricingContent = () => {
  return (
    <article className="rounded-xl grid grid-cols-1 shadow-xl gap-4 md:grid-cols-1 lg:grid-cols-2 w-[500px] lg:w-[700px] bg-white p-4 ring ring-purple-50">
      <div className="flex overflow-hidden  rounded-lg ">
        <div
          className="w-24  h-24 bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80")',
          }}
        />
        <div className="w-2/3 px-4 md:px-4">
          <h1 className="text-xl font-bold text-gray-800 ">Backpack</h1>
          <p className="mt-2 text-sm text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </p>
        </div>
      </div>
      <div className="flex overflow-hidden  rounded-lg ">
        <div
          className="w-24  h-24 bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80")',
          }}
        />
        <div className="w-2/3 px-4 md:px-4">
          <h1 className="text-xl font-bold text-gray-800 ">Backpack</h1>
          <p className="mt-2 text-sm text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </p>
        </div>
      </div>
      <div className="flex overflow-hidden  rounded-lg  ">
        <div
          className="w-24  h-24 bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80")',
          }}
        />
        <div className="w-2/3 px-4 md:px-4">
          <h1 className="text-xl font-bold text-gray-800 ">Backpack</h1>
          <p className="mt-2 text-sm text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </p>
        </div>
      </div>
      <div className="flex overflow-hidden  rounded-lg ">
        <div
          className="w-24  h-24 bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80")',
          }}
        />
        <div className="w-2/3 px-4 md:px-4">
          <h1 className="text-xl font-bold text-gray-800 ">Backpack</h1>
          <p className="mt-2 text-sm text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </p>
        </div>
      </div>
    </article>
  );
};

export default Dropdown;
