"use client"

import React from 'react'
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className='h-50 w-full bg-[#57564F] flex flex-col justify-center items-center'>
            <IoIosArrowUp className='text-[grey]' />
            <div className='text-[white] text-center font-signika cursor-pointer' onClick={scrollToTop} >Back To Top</div>
            <div className="flex justify-center items-center w-full h-10 mt-5">
                <MdAlternateEmail className="text-2xl text-[grey]" />
                <FaGithub className="text-2xl ml-8 text-[grey]" />
                <IoLogoLinkedin className="text-2xl ml-8 text-[grey]" />
                <FaWhatsapp className="text-2xl ml-8 text-[grey]" />
            </div>
            <div><p className="text-center text-white font-signika mt-5"> © {new Date().getFullYear()} Saurabh Khetwal. All Rights Reserved. </p></div>
        </div>
    )
}

export default Footer
