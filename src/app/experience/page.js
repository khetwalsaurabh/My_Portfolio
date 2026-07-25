
import React from 'react';

const experiences = [
  {
    logo: "/img/interactive_book_services_private_limited_logo.jpeg",
    company: "Interactive Book Services Pvt. Ltd.",
    role: "HTML Developer",
    period: "Nov 2022 – Aug 2023",
    description:
      "Created and maintained digital books using HTML, CSS, XML; collaborated with team to deliver engaging experience.",
  },
  {
    logo: "/img/krayons.PNG",
    company: "Krayons Convergence Pvt. Ltd.",
    role: "Web Developer",
    period: "Sept 2023 – Aug 2025",
    description:
      "Built and customized WordPress websites to meet client needs. Implemented effective on-page and off-page SEO strategies, improving site visibility and traffic.",
  },
  // {
  //   logo: "/img/creativeimagin.PNG",
  //   company: "Creative Imagin",
  //   role: "Web Developer",
  //   period: "April 2024 – Aug 2024",
  //   description:
  //     "Built and maintained responsive websites using HTML, CSS, JavaScript, and WordPress. Collaborated on UI/UX implementations and SEO optimization.",
  // },
  {
    logo: "/img/onetick.PNG",
    company: "Onetick Technology",
    role: "Software Developer",
    period: "Sept 2025 – June 2026",
    description:
      "Working on full-stack MERN stack applications, developing responsive frontends with React.js and scalable backend services using Node.js, Express.js, and MongoDB.",
  },
];

const ExperienceCard = ({ logo, company, role, period, description }) => (
  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 py-8 border-b border-[#57564F]/15 last:border-0 mt-20">

    {/* Logo */}
    <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
      <img
        src={logo}
        alt={company}
        className="w-full h-full object-contain rounded-lg"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col gap-2 text-center sm:text-left flex-1">

      {/* Role & Company */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-3 gap-y-1">
        <h2 className="font-bold font-signika text-[#57564F] text-base sm:text-lg leading-snug">
          {company}
        </h2>
        <span className="hidden sm:inline text-[#57564F]/40">·</span>
        <span className="font-signika font-semibold text-[#57564F]/80 text-sm sm:text-base">
          {role}
        </span>
      </div>

      {/* Period badge */}
      <span className="inline-block self-center sm:self-start bg-[#57564F]/10 text-[#57564F] font-signika text-xs font-semibold px-3 py-0.5 rounded-full italic">
        {period}
      </span>

      {/* Description */}
      <p className="font-signika text-[#57564F]/80 text-sm sm:text-base leading-relaxed mt-1">
        {description}
      </p>

    </div>
  </div>
);

const Experience = () => {
  return (
    <section className="w-full bg-white px-6 md:px-16 pb-16">
      <hr className="border-2 border-[#57564F] mb-2" />

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;