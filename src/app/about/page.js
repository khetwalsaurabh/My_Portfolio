// import React from "react";


// const About = () => {
//     return(
//         <>
        
//         <div id="aboutPage" className="h-35 w-full bg-[white] flex justify-center items-center">
//             <button data-aos="fade-right" className=" border-3 border-[#57564F] px-9 py-1 text-lg font-medium mt-15 text-[#57564F] font-signika">About Me</button>
//         </div>

//         <div className=" bg-[white] w-full h-20 flex justify-center items-center">
//             <p data-aos="fade-left" className=" text-center text-[grey] font-signika">
//                 I am a Full Stack Web Developer with experience in React.js, Next.js, Node.js, Express.js, MongoDB. I specialize in building responsive web applications, REST APIs, and modern user interfaces. With a strong foundation in frontend and backend development, I enjoy creating efficient, scalable, and user-focused solutions. My goal is to continuously grow as a developer and contribute to impactful projects using modern web technologies.
//             </p>
//         </div>

//         <div className="bg-[white] flex items-center justify-center h-25 pt-10"><img src="/img/separatorBlack.png" alt="" /></div>

//         </>
//     )
// }

// export default About;




import React from "react";

const About = () => {
    return(
        <>
        
        <div id="aboutPage" className="w-full bg-white flex justify-center items-center pt-16 pb-8">
            <button data-aos="fade-right" className="border-3 border-[#57564F] px-9 py-1 text-lg font-medium text-[#57564F] font-signika">About Me</button>
        </div>

        <div className="bg-white w-full flex justify-center items-center pb-10">
            <p data-aos="fade-left" className="text-justify text-[grey] font-signika px-6 md:px-16 lg:px-32 max-w-5xl">
                I am a Full Stack Web Developer with experience in React.js, Next.js, Node.js, Express.js, MongoDB. I specialize in building responsive web applications, REST APIs, and modern user interfaces. With a strong foundation in frontend and backend development, I enjoy creating efficient, scalable, and user-focused solutions. My goal is to continuously grow as a developer and contribute to impactful projects using modern web technologies.
            </p>
        </div>

        <div className="bg-white flex items-center justify-center pb-10"><img src="/img/separatorBlack.png" alt="" /></div>

        </>
    )
}

export default About;