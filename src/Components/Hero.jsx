import React from "react";
import herobg1 from "../assets/Hero/herobg1.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#333333]">
      {/* Left Text Section (With Padding & Beige Background) */}
      <div className="md:w-1/2 text-center md:text-left p-12  rounded-lg ">
        <h1 className="text-5xl font-extrabold text-green-900 tracking-wide">
          G Real Estate Incorporated
        </h1>
        <p className="mt-6 text-lg text-green-700 leading-relaxed">
          Elevate your real estate experience with premium properties and expert
          guidance. Whether you're buying, selling, or investing, we ensure
          seamless transactions and unparalleled service tailored to your needs.
        </p>
        {/* Call-to-Action Button */}
        <button className="mt-8 px-8 py-3 bg-green-700 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-800 transition duration-300">
          Learn More
        </button>
      </div>

      {/* Right Image Section (Grayscale & Contrast) */}
      <div className="md:w-1/2">
        <img
          src={herobg1}
          alt="Hero Background"
          className="w-full h-screen object-cover  shadow-md filter grayscale contrast-125"
        />
      </div>
    </section>
  );
};

export default Hero;
