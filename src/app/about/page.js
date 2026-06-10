import React from "react";


const About = () => {
    return(
        <>
        
        <div id="aboutPage" className="h-35 w-full bg-[white] flex justify-center items-center">
            <button data-aos="fade-right" className=" border-3 border-[#57564F] px-9 py-1 text-lg font-medium mt-15 text-[#57564F] font-signika">About Me</button>
        </div>

        <div className=" bg-[white] w-full h-20 flex justify-center items-center">
            <p data-aos="fade-left" className=" text-center text-[grey] font-signika">hello world</p>
        </div>

        <div className="bg-[white] flex items-center justify-center h-25 pt-10"><img src="/img/separatorBlack.png" alt="" /></div>

        </>
    )
}

export default About;