"use client"

import React from 'react';
import { FaGithub } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";

const projects = [
    {
        title: "SaaS",
        description: `Built a full-featured Hotel Management SaaS platform for managing room reservations, food and laundry services, guest records, and billing operations. Implemented multi-user authentication, guest history tracking for auditing purposes, and automated digital invoice generation with separate billing workflows for food and laundry services. `,
        image: "/img/wisemanage.PNG",
        accent: "#1d9e75",
        github: "https://github.com/khetwalsaurabh/saasBackend",
        demo: "https://wisemanagehq.com/",
        reverse: false,
    },
    {
        title: "Hotel Dashboard",
        description: `Developed a Hotel Management Dashboard for managing bookings and staff operations. Implemented secure user authentication and authorization, along with complete CRUD functionality for staff and booking management using React.js, Node.js, Express.js, and MongoDB. Built REST APIs for data handling, integrated Nodemailer for email notifications, and developed a responsive user interface. The frontend application was deployed on Vercel.`,
        image: "/img/hotel-project.PNG",
        accent: "#FF9A00",
        github: "https://github.com/khetwalsaurabh/Hotel_dev_Project.git",
        demo: "https://hotel-dev-project.vercel.app/",
        reverse: true,
    },
     {
        title: "Business Website",
        description: `Developed a dynamic website using Django for the backend and HTML, CSS, and JavaScript for the frontend. Implemented form handling with POST APIs to securely collect and process user-submitted data. Designed a responsive user interface and integrated backend functionality for seamless data management and user interaction.`,
        image: "/img/DjangoBussinessSite.PNG",
        accent: "#57564F",
        github: "https://github.com/khetwalsaurabh/ecommerce",
        demo: null,
        reverse: false,
    },
    {
        title: "Ecommerce Website",
        description: `Developed a full-stack E-commerce application with an admin dashboard, enabling users to create, manage, update, and track products. Implemented secure JWT-based authentication and authorization, allowing users to access and manage their own dashboard, monitor product status, and perform CRUD operations efficiently.`,
        image: "/img/ecommerce.PNG",
        accent: "#57564F",
        github: "https://github.com/khetwalsaurabh/ecommerce",
        demo: null,
        reverse: true,
    },
    {
        title: "ERP System",
        description: `Developed a simple ERP System with user registration and login functionality. Built a dashboard where users can create, view, update, and delete staff profiles. Implemented CRUD operations using Local Storage for data persistence and designed for efficient staff management.`,
        image: "/img/erp.PNG",
        accent: "#3396D3",
        github: "https://github.com/khetwalsaurabh/erp_system",
        demo: null,
        reverse: false,
    },
];

const ProjectCard = ({ title, description, image, accent, github, demo, reverse }) => (
    <div
        data-aos={reverse ? "fade-left" : "fade-right"}
        className={`
      flex flex-col items-center gap-8 w-full py-10
      md:flex-row md:items-center
      ${reverse ? "md:flex-row-reverse" : ""}
    `}
    >
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
            <img
                src={image}
                alt={title}
                className="w-full max-w-sm md:max-w-full rounded-xl shadow-lg object-cover"
            />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
            <h1
                className="text-3xl sm:text-4xl font-signika font-bold"
                style={{ color: accent }}
            >
                {title}
            </h1>

            <p className="text-[#57564F] font-signika text-sm sm:text-base leading-relaxed">
                {description}
            </p>

            {/* Links */}
            <div className="flex items-center gap-6 justify-center md:justify-start mt-1">
                <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                    <FaGithub className="text-xl" style={{ color: accent }} />
                    <span className="font-signika text-[#57564F] text-sm">
                        View code
                    </span>
                </a>

                <a
                    href={demo || "#"}
                    onClick={(e) => {
                        if (!demo) {
                            e.preventDefault();
                            alert("Live demo is not available. Please check the GitHub repository.");
                        }
                    }}
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                    <ImNewTab className="text-xl" style={{ color: accent }} />
                    <span className="font-signika text-[#57564F] text-sm">
                        Live Demo
                    </span>
                </a>
            </div>
        </div>
    </div>
)

const Projects = () => {
    return (
        <section className="w-full bg-white px-6 md:px-16 pb-16">
            <hr className="border-2 border-[#57564F] mb-4" />

            <div className="max-w-5xl mx-auto divide-y divide-[#57564F]/10 mt-20">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;