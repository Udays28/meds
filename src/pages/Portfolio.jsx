// /* eslint-disable react/no-unescaped-entities */
// import { useState,  useRef } from 'react';

// const Portfolio = () => {
//   const [imageGalleryOpened, setImageGalleryOpened] = useState(false);
//   const [imageGalleryActiveUrl, setImageGalleryActiveUrl] = useState(null);
//   const [imageGalleryImageIndex, setImageGalleryImageIndex] = useState(null);
//   const [activeGallery, setActiveGallery] = useState([]);
//   const galleryRef = useRef();

//   const imageGalleryOpen = (event, gallery) => {
//     const index = event.target.dataset.index;
//     setActiveGallery(gallery);
//     setImageGalleryImageIndex(parseInt(index));
//     setImageGalleryActiveUrl(event.target.src);
//     setImageGalleryOpened(true);
//   };

//   const imageGalleryClose = () => {
//     setImageGalleryOpened(false);
//     setTimeout(() => setImageGalleryActiveUrl(null, 300));
//   };

//   const imageGalleryNext = () => {
//     const newIndex = imageGalleryImageIndex === activeGallery.length ? 1 : imageGalleryImageIndex + 1;
//     setImageGalleryImageIndex(newIndex);
//     setImageGalleryActiveUrl(activeGallery[newIndex - 1].image);
//   };

//   const imageGalleryPrev = () => {
//     const newIndex = imageGalleryImageIndex === 1 ? activeGallery.length : imageGalleryImageIndex - 1;
//     setImageGalleryImageIndex(newIndex);
//     setImageGalleryActiveUrl(activeGallery[newIndex - 1].image);
//   };

//   const socialMediaPhotoShoot = [
//     { image: "./projectimages/socialmedia/shoot1.jpg" },
//     { image: "./projectimages/socialmedia/shoot2.jpg" },
//     { image: "./projectimages/socialmedia/shoot3.jpg" },
//     { image: "./projectimages/socialmedia/shoot4.jpg" },
//     { image: "./projectimages/socialmedia/shoot5.jpg" },
//     { image: "./projectimages/socialmedia/shoot6.jpg" },
//     { image: "./projectimages/socialmedia/shoot7.jpg" },
//     { image: "./projectimages/socialmedia/shoot8.JPG" },
//     { image: "./projectimages/socialmedia/shoot9.png" },
//     { image: "./projectimages/socialmedia/shoot10.png" },
//     { image: "./projectimages/socialmedia/shoot11.jpg" },
//     { image: "./projectimages/socialmedia/shoot12.jpg" },
//     { image: "./projectimages/socialmedia/shoot13.png" },
//     { image: "./projectimages/socialmedia/shoot17.png" },
//     { image: "./projectimages/socialmedia/shoot14.jpg" },
//     { image: "./projectimages/socialmedia/shoot15.jpg" },
//     { image: "./projectimages/socialmedia/shoot16.png" },
//     { image: "./projectimages/socialmedia/shoot17.jpg" },
//   ];

//   const socialMediaMarketing = [
//     { image: "./projectimages/socialmedia/s1.jpg" },
//     { image: "./projectimages/socialmedia/s2.jpg" },
//     { image: "./projectimages/socialmedia/s3.jpg" },
//     { image: "./projectimages/socialmedia/s4.jpg" },
//     { image: "./projectimages/socialmedia/s5.jpg" },
//     { image: "./projectimages/socialmedia/s6.jpg" },
//     { image: "./projectimages/socialmedia/s7.jpg" },
//     { image: "./projectimages/socialmedia/s8.jpg" },
//     { image: "./projectimages/socialmedia/s9.jpg" },
//     { image: "./projectimages/socialmedia/s10.jpg" },
//     { image: "./projectimages/socialmedia/s11.jpg" },
//   ];

//   const logoDesigning = [
//     { image: "./projectimages/logodesigning/band.png" },
//     { image: "./projectimages/logodesigning/band2.png" },
//     { image: "./projectimages/logodesigning/Bank.png" },
//     { image: "./projectimages/logodesigning/cleaning_company.jpg" },
//     { image: "./projectimages/logodesigning/educational_institute.jpg" },
//     { image: "./projectimages/logodesigning/justparatha.jpg" },
//     { image: "./projectimages/logodesigning/Rashmi.jpg" },
//   ];

//   return (
//     <div className="w-full h-full p-4 mt-12 select-none">
//       <div className=" lg:px-44 mt-12 text-black">
//         <h2 className="my-8 text-2xl font-bold text-black md:text-4xl">
//           Showcasing Our Success: <span className="text-purple-600">Explore Our Portfolio</span>
//         </h2>
//         <p className="text-black">
//           Dive into our portfolio to witness the transformative power of our digital marketing solutions. Each project reflects our dedication to driving growth and achieving results for our clients.
//         </p>
//       </div>

//       <section>
//         <div className="max-w-6xl mx-auto duration-1000 delay-300 opacity-0 select-none ease animate-fade-in-view" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
//           <h1 className='text-2xl font-semibold my-4'>Social Media Photoshoot</h1>
//           <ul ref={galleryRef} id="socialMediaPhotoShootGallery" className="grid grid-cols-2 gap-5 lg:grid-cols-5">
//             {socialMediaPhotoShoot.map((item, index) => (
//               <li key={index}>
//                 <img
//                   onClick={(e) => imageGalleryOpen(e, socialMediaPhotoShoot)}
//                   src={item.image}
//                   data-index={index + 1}
//                   className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
//                   alt={`photo gallery image ${index + 1}`}
//                 />
//               </li>
//             ))}
//           </ul>
//           <h1 className='text-2xl font-semibold my-4 mt-12'>Social Media Marketing</h1>
//           <ul ref={galleryRef} id="socialMediaMarketingGallery" className="grid grid-cols-2 gap-5 lg:grid-cols-5">
//             {socialMediaMarketing.map((item, index) => (
//               <li key={index}>
//                 <img
//                   onClick={(e) => imageGalleryOpen(e, socialMediaMarketing)}
//                   src={item.image}
//                   data-index={index + 1}
//                   className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
//                   alt={`photo gallery image ${index + 1}`}
//                 />
//               </li>
//             ))}
//           </ul>
//           <h1 className='text-2xl font-semibold my-4 mt-12'>Logo Designing</h1>
//           <ul ref={galleryRef} id="logoDesigningGallery" className="grid grid-cols-2 gap-5 lg:grid-cols-5">
//             {logoDesigning.map((item, index) => (
//               <li key={index}>
//                 <img
//                   onClick={(e) => imageGalleryOpen(e, logoDesigning)}
//                   src={item.image}
//                   data-index={index + 1}
//                   className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
//                   alt={`photo gallery image ${index + 1}`}
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>

//         {imageGalleryOpened && (
//           <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 select-none cursor-zoom-out" onClick={imageGalleryClose}>
//             <div className="relative flex items-center justify-center w-11/12 xl:w-1/2 xl:h-[85%] h-11/12">
//               <div onClick={(e) => { e.stopPropagation(); imageGalleryPrev(); }} className="absolute left-0 flex items-center justify-center text-white rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20">
//                 <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//                 </svg>
//               </div>
//               <img className="object-contain object-center w-full h-full select-none cursor-zoom-out" src={imageGalleryActiveUrl} alt="" />
//               <div onClick={(e) => { e.stopPropagation(); imageGalleryNext(); }} className="absolute right-0 flex items-center justify-center text-white  rounded-full cursor-pointer xl:translate-x-24 2xl:translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20">
//                 <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Portfolio;

/* eslint-disable react/no-unescaped-entities */

const Blog = () => {
  return (
<div className="flex h-screen flex-col justify-center p-4 items-center">
  {/* <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
    <div role="main" className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 ">This Week Blogs</h1>
      <p className="text-base leading-normal text-center text-gray-600  mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
    </div>
    <div className="lg:flex items-stretch md:mt-12 mt-8">
      <div className="lg:w-1/2">
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
          <div className="sm:w-1/2 relative">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src="https://i.ibb.co/DYxtCJq/img-1.png" className="w-full" alt="chair" />
          </div>
          <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src="https://i.ibb.co/3C5HvxC/img-2.png" className="w-full" alt="wall design" />
          </div>
        </div>
        <div className="relative">
          <div>
            <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
            <div className="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
              <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
              <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block" />
          <img className="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
        </div>
      </div>
      <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
        <div className="relative">
          <div>
            <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
            <div className="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
              <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
              <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" className="w-full sm:block hidden" />
          <img className="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
        </div>
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
          <div className="relative w-full">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src="https://i.ibb.co/3yvZBpm/img-5.png" className="w-full" alt="chair" />
          </div>
          <div className="relative w-full sm:mt-0 mt-4">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="#" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src="https://i.ibb.co/gDdnJb5/img-6.png" className="w-full" alt="wall design" />
          </div>
        </div>
      </div>
    </div>
  </div> */}
  <h1 className="lg:text-6xl text-4xl my-4 text-black font-semibold text-center"> <span className="text-purple-600">Stay Tuned </span><br />for Insights and Updates</h1>
  
  <p className="lg:px-80 my-6 text-center">We’re excited to announce that our blog is coming soon! Here, you'll find a wealth of knowledge, insights, and updates on all things digital marketing. </p>
</div>

  )
}

export default Blog

