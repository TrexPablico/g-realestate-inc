import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#333333] text-white py-20 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Info Panel */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-green-500">Get in Touch</h2>
          <p className="text-gray-300 text-lg">
            We'd love to hear from you. Whether you're curious about our
            services, need assistance, or just want to say hello — we’re ready
            to help.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>
              <strong className="text-white block">📍 Address</strong>
              123 G Street, Pasig City, Philippines
            </p>
            <p>
              <strong className="text-white block">📞 Phone</strong>
              +63 912 345 6789
            </p>
            <p>
              <strong className="text-white block">📧 Email</strong>
              contact@grealestate.ph
            </p>
            <p>
              <strong className="text-white block">📘 Facebook</strong>
              facebook.com/grealestate
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-[#444444] p-8 rounded-lg shadow-md space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded bg-[#555] text-white placeholder-gray-300 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded bg-[#555] text-white placeholder-gray-300 outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded bg-[#555] text-white placeholder-gray-300 outline-none md:col-span-2"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded bg-[#555] text-white placeholder-gray-300 outline-none"
            required
          />

          <button
            type="submit"
            className="bg-green-800 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded w-full transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
