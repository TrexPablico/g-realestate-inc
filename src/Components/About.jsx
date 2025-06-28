import React from "react";

const About = () => {
  return (
    <section className="bg-[#F5F5F5] text-[#333] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Tagline */}
        <p className="text-sm uppercase tracking-wider text-green-600 font-semibold">
          Trusted. Transparent. Tenured.
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl font-extrabold leading-snug">
          Empowering Property Owners Through Clarity & Control
        </h2>

        {/* Subtext */}
        <p className="text-lg leading-relaxed text-[#444]">
          G Real Estate Incorporated delivers full-spectrum{" "}
          <span className="font-medium text-green-600">
            Real Property Management
          </span>
          for landowners ready to secure their future. With transparent
          operations and seasoned oversight, we make land stewardship
          effortless.
        </p>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 gap-6 text-left">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Liens Cleared
            </h3>
            <p className="text-sm text-[#555]">
              We ensure all title encumbrances are removed so your ownership
              stands undisputed.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Settler-Free Property
            </h3>
            <p className="text-sm text-[#555]">
              No informal settlers, no structures. Just clear land managed with
              legal precision.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Dispute Defense
            </h3>
            <p className="text-sm text-[#555]">
              We proactively prevent potential claims or interference with your
              land rights.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Peace of Mind
            </h3>
            <p className="text-sm text-[#555]">
              You own the land. We handle the burden. It’s that simple.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
