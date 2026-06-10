"use client"

import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import toast from "react-hot-toast";

const contactInfo = [
  {
    icon: <IoIosMail className="text-2xl text-gray-400 shrink-0" />,
    label: "Email",
    value: "ssourabh.1712@mail.com",
  },
  {
    icon: <FaPhoneAlt className="text-2xl text-gray-400 shrink-0" />,
    label: "Phone",
    value: "+91 8700869682",
  },
  {
    icon: <FaLocationDot className="text-2xl text-gray-400 shrink-0" />,
    label: "Location",
    value: "Faridabad, Haryana",
  },
];

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (formData.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!formData.phoneNumber.trim()) {
      toast.error("Phone Number is required");
      return;
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      toast.error("Phone Number must be 10 digits");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Message is required");
      return;
    }

    if (formData.message.trim().length < 10) {
      toast.error("Message must be at least 10 characters");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <section id="contactPage" className="w-full bg-white py-16 px-4">

      {/* Separator
      <div className="flex justify-center mb-15 bg-red-200">
        <img src="/img/separatorBlack.png" alt="" className="max-w-xs w-full opacity-60" />
      </div> */}

      <div className="bg-[white] flex items-center justify-center mb-15 mt-[-25px]"><img src="/img/separatorBlack.png" alt="" /></div>

      {/* Section Title */}
      <div className="flex justify-center mb-20 ">
        <button
          data-aos="fade-right"
          className="border-[3px] border-[#57564F] px-10 py-1.5 text-[#57564F] text-lg font-medium font-signika tracking-widest"
        >
          Contact me
        </button>
      </div>



      {/* Main Layout */}
      <div
        data-aos="fade-up"
        className="
          flex flex-col lg:flex-row
          gap-10 max-w-5xl mx-auto
          items-start justify-center
        "
      >
        {/* Contact Info Cards */}
        <div className="flex flex-col gap-5 w-full lg:w-auto lg:min-w-[280px]">
          {contactInfo.map(({ icon, label, value }) => (
            <div
              key={label}
              className="bg-[#57564F] rounded-lg px-5 py-4 flex items-center gap-4 w-full lg:w-72"
            >
              <div className="shrink-0">{icon}</div>
              <div>
                <p className="text-white font-signika font-semibold text-sm leading-tight">
                  {label}
                </p>
                <p className="text-white font-signika font-semibold text-sm leading-snug break-all">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="w-full lg:flex-1 mt-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 w-full"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="
                border-b-[3px] border-l-[3px] border-[#57564F]
                pl-3 h-9 w-full bg-transparent
                font-signika text-[#57564F] placeholder:text-[#57564F]/50
                focus:outline-none
              "
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="
                border-b-[3px] border-l-[3px] border-[#57564F]
                pl-3 h-9 w-full bg-transparent
                font-signika text-[#57564F] placeholder:text-[#57564F]/50
                focus:outline-none
              "
            />
            <input
              type="text"
              placeholder="Phone number"
              name="phoneNumber"
              onChange={handleChange}
              value={formData.phoneNumber}
              className="
                border-b-[3px] border-l-[3px] border-[#57564F]
                pl-3 h-9 w-full bg-transparent
                font-signika text-[#57564F] placeholder:text-[#57564F]/50
                focus:outline-none
              "
            />
            <textarea
              name="message"
              rows="5"
              onChange={handleChange}
              value={formData.message}
              placeholder="Type your message here..."
              className="
                border-b-[3px] border-l-[3px] border-[#57564F]
                pl-3 pt-2 w-full bg-transparent resize-none
                font-signika text-[#57564F] placeholder:text-[#57564F]/50
                focus:outline-none
              "
            />
            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                disabled={loading}
                className="
    border-[3px] border-[#57564F]
    px-10 py-1.5 text-[#57564F]
    text-lg font-medium font-signika tracking-widest
    hover:bg-[#57564F] hover:text-white
    transition-colors duration-200
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactMe;