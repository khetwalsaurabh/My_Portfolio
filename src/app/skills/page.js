

import React from "react";

const skills = [
  { name: "HTML",       img: "/img/html.svg" },
  { name: "CSS",        img: "/img/css.svg" },
  { name: "Tailwind",   img: "/img/tailwind.png" },
  { name: "JavaScript", img: "/img/js.svg" },
  { name: "TypeScript",   img: "/img/TypeScript.png" },
  { name: "React",      img: "/img/reactjs.svg" },
   { name: "Next.js",    img: "/img/nextjs.png" },
  { name: "Node.js",    img: "/img/node.js.png" },
  { name: "MongoDB",    img: "/img/mongodb.png" },
  { name: "Express",    img: "/img/express.png" },
  { name: "Git",        img: "/img/git.svg" },
  { name: "WordPress",  img: "/img/wordpress.png" },
  { name: "Linux",   img: "/img/linux.png" },
  { name: "Nginx",   img: "/img/nginx.png" },
   { name: "Pm2",   img: "/img/Pm2.svg" },
];

const Skills = () => {
  return (
    <section id="skillsPage" className="w-full bg-white py-16 px-4">

      {/* Section Title */}
      <div className="flex justify-center mb-12">
        <button
          data-aos="fade-right"
          className="border-[3px] border-[#57564F] px-10 py-1.5 text-[#57564F] text-lg font-semibold font-signika tracking-widest"
        >
          Skills
        </button>
      </div>

      {/* Skills Grid */}
      <div
        data-aos="fade-up"
        className="
          grid gap-5 max-w-4xl mx-auto
          grid-cols-3
          sm:grid-cols-4
          md:grid-cols-5
          lg:grid-cols-6
        "
      >
        {skills.map(({ name, img }) => (
          <div
            key={name}
            className="
              flex flex-col items-center justify-center gap-2
              p-4 rounded-xl border border-[#e0dfd8]
              hover:-translate-y-1 hover:border-[#57564F]
              transition-all duration-200 cursor-default
            "
          >
            <img
              src={img}
              alt={name}
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
            <span className="text-xs sm:text-sm font-semibold text-[#57564F] font-signika tracking-wide text-center">
              {name}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;