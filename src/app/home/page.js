// "use client"

// import React from "react";
// import { FaGithub } from "react-icons/fa";
// import { MdAlternateEmail } from "react-icons/md";
// import { IoLogoLinkedin } from "react-icons/io5";
// import { FaWhatsapp } from "react-icons/fa";
// import About from "../about/page";
// import Skills from "../skills/page";
// import ContactMe from "../contact/page";
// import Link from "next/link";

// const Home = () => {
//   return (
//     <>

//       {/* Hero Section */}
//       <div className="flex flex-col md:flex-row w-full min-h-screen bg-white">

//         {/* Left Side */}
//         <div className="flex-1 flex flex-col justify-center items-center md:items-start px-6 py-12 md:px-16 text-center md:text-left order-1 md:order-none">
//           <h2 className="typewriter text-lg sm:text-xl md:text-2xl font-semibold text-[#57564F] font-signika mb-1">
//             Hi, I am
//           </h2>
//           <h1 className="typewriter text-3xl sm:text-4xl md:text-5xl font-semibold text-[#57564F] font-signika mb-2 leading-tight">
//             Saurabh Khetwal
//           </h1>
//           <p className="typewriter text-sm sm:text-base font-semibold text-[#57564F] font-signika mb-6 tracking-wide">
//             MERN Stack Developer
//           </p>

//           {/* Social Icons */}
//           <div
//             data-aos="fade-right"
//             className="flex justify-center md:justify-start gap-5 mt-2"
//           >
//             <a href="mailto:ssourabh.1712@gmail.com" target="_blank" rel="noreferrer" ><MdAlternateEmail className="text-2xl sm:text-3xl text-[#57564F] cursor-pointer hover:scale-110 transition-transform duration-200" /></a>
//             <Link href="http://github.com/khetwalsaurabh"> <FaGithub className="text-2xl sm:text-3xl text-[#57564F] cursor-pointer hover:scale-110 transition-transform duration-200" /> </Link>
//             <Link href="https://www.linkedin.com/in/saurabh-khetwal-31379a224/"> <IoLogoLinkedin className="text-2xl sm:text-3xl text-[#57564F] cursor-pointer hover:scale-110 transition-transform duration-200" /></Link>
//             <a href="https://wa.me/9205365141?text=Hi%20Sourabh,%20I%20visited%20your%20portfolio." target="_blank" rel="noreferrer" > <FaWhatsapp className="text-2xl sm:text-3xl text-[#57564F] cursor-pointer hover:scale-110 transition-transform duration-200" /></a>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div
//           className="
//             flex-1 bg-[#57564F] flex justify-center items-center
//             py-14 md:py-0
//             [clip-path:polygon(0_8%,_100%_0,_100%_100%,_0%_100%)]
//             md:[clip-path:polygon(12%_0,_100%_0,_100%_100%,_0%_100%)]
//             min-h-[240px] md:min-h-screen
//             order-2 md:order-none
//           "
//         >
//         <div className="h-36 w-36 sm:h-48 sm:w-48 md:h-60 md:w-60 rounded-full bg-white shadow-lg" />
//               <img src="img/Sourabh.jpeg" alt="Description of the image" />
//         </div>


//       </div>


//       {/* Sections */}
//       <About />
//       <Skills />
//       <ContactMe />
//     </>
//   );
// };

// export default Home;



"use client"

import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import About from "../about/page";
import Skills from "../skills/page";
import ContactMe from "../contact/page";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full min-h-screen bg-white">

        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start px-6 py-12 md:px-16 text-center md:text-left order-1 md:order-none mt-5">
          <h2 className="typewriter text-lg sm:text-xl md:text-2xl font-semibold text-[#57564F] font-signika mb-1">
            Hi, I am
          </h2>
          <h1 className="typewriter text-3xl sm:text-4xl md:text-5xl font-semibold text-[#57564F] font-signika mb-2 leading-tight">
            Saurabh Khetwal
          </h1>
          <p className="typewriter text-sm sm:text-base font-semibold text-[#57564F] font-signika mb-6 tracking-wide">
            MERN Stack Developer
          </p>
          <p className="text-xl mt-4 mb-5 text-gray-600">
            Crafting modern web experiences with MERN & Next.js
          </p>

          {/* Social Icons */}
          <div
            data-aos="fade-right"
            className="flex justify-center md:justify-start gap-5 mt-2"
          >
            <a href="mailto:ssourabh.1712@gmail.com" target="_blank" rel="noreferrer">
              <MdAlternateEmail className="text-2xl sm:text-3xl text-[#57564F] cursor-pointer hover:scale-110 transition-transform duration-200" />
            </a>
            <Link href="http://github.com/khetwalsaurabh">
              <FaGithub className="text-2xl sm:text-3xl text-[#57564F] cursor-pointer hover:scale-110 transition-transform duration-200" />
            </Link>
            <Link href="https://www.linkedin.com/in/saurabh-khetwal-31379a224/">
              <IoLogoLinkedin className="text-2xl sm:text-3xl text-[#57564F] cursor-pointer hover:scale-110 transition-transform duration-200" />
            </Link>
            <a href="https://wa.me/9205365141?text=Hi%20Sourabh,%20I%20visited%20your%20portfolio." target="_blank" rel="noreferrer">
              <FaWhatsapp className="text-2xl sm:text-3xl text-[#57564F] cursor-pointer hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="
            flex-1 bg-[#57564F] flex justify-center items-center
            py-14 md:py-0
            [clip-path:polygon(0_8%,_100%_0,_100%_100%,_0%_100%)]
            md:[clip-path:polygon(12%_0,_100%_0,_100%_100%,_0%_100%)]
            min-h-[240px] md:min-h-screen
            order-2 md:order-none
          "
        >
          <div
            className="
              h-56 w-56
              sm:h-72 sm:w-72
              md:h-[420px] md:w-[420px]
              rounded-full
              overflow-hidden
              border-4 border-white
              shadow-2xl
              mt-5
            "
          >
            <img
              src="/img/Sourabh.jpeg"
              alt="Sourabh Khetwal"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div> {/* ← closes Hero Section */}

      {/* Sections */}
      <About />
      <Skills />
      <ContactMe />

    </> // ← closes fragment
  );
};

export default Home;