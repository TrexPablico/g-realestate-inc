import React from "react";
import Survey from "../assets/Services/survey.jpg";
import Appraisal from "../assets/Services/appraisal.jpg";
import Sales from "../assets/Services/sales.jpg";
import Transfer from "../assets/Services/transfer.jpg";
import { Link } from "react-router-dom";

const ServiceCard = ({ image, title, link }) => (
  <Link to={link} className="block">
    <div className="relative group rounded-lg overflow-hidden shadow-md h-[480px] cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black/60 to-black/100" />
      <h1 className="absolute bottom-15 left-0 right-0 text-white text-xl font-semibold text-center z-10 drop-shadow-md">
        {title}
      </h1>
    </div>
  </Link>
);

const ServicePage = () => {
  return (
    <section className="bg-[#333333] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard image={Survey} title="Survey" link="/services/survey" />
          <ServiceCard
            image={Appraisal}
            title="Appraisal"
            link="/services/appraisal"
          />
          <ServiceCard image={Sales} title="Sales" link="/services/sales" />
          <ServiceCard
            image={Transfer}
            title="Transfer"
            link="/services/transfer"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
