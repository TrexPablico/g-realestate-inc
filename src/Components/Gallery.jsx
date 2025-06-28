import React, { useRef } from "react";
import Sample from "../assets/Gallery/sample.jpg";

const galleryItems = [
  {
    title: "Community Outreach",
    description:
      "Engaging local communities and fostering strong relationships through on-ground initiatives.",
    image: Sample,
  },
  {
    title: "New Developments",
    description:
      "Modern infrastructure shaping future-ready neighborhoods under our care.",
    image: Sample,
  },
  {
    title: "Sustainable Practices",
    description:
      "Eco-conscious property management aligned with long-term growth.",
    image: Sample,
  },
  {
    title: "Client Success Stories",
    description:
      "Our trusted clients share the positive impact of managed property ownership.",
    image: Sample,
  },
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <section className="bg-[#F5F5F5] py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-[#222] mb-12">
        Gallery
      </h1>

      <div className="relative max-w-6xl mx-auto">
        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth px-1 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="min-w-full sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] h-[400px] relative rounded-lg overflow-hidden shadow-lg group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black/20 to-black/80 z-10" />
              <div className="absolute bottom-0 p-6 z-20 text-white">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-black shadow-md rounded-full w-10 h-10 flex items-center justify-center"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-black shadow-md rounded-full w-10 h-10 flex items-center justify-center"
        >
          →
        </button>

        {/* Edge Fades */}
        <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-[#F5F5F5] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#F5F5F5] to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
};

export default Gallery;
