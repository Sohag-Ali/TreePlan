import React from 'react';
import Navbar from '../Components/Navbar';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 px-6 pb-16">
            <div><Navbar></Navbar></div>

      {/* Top Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-700">
          About <span className="text-green-600">GreenNest</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Your trusted destination for indoor plants and natural home décor.
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-10 border border-emerald-100">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
          🌱 Who We Are
        </h2>
        <p className="text-gray-700 leading-relaxed">
          GreenNest is a nature-inspired plant store designed to bring
          the freshness of indoor greenery into your home. We believe
          plants have the power to improve air quality, reduce stress,
          and make your living spaces more beautiful and lively.
        </p>

        <h2 className="text-2xl font-semibold text-emerald-700 mt-10 mb-4">
          🌿 Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is simple: to inspire people to build their own
          indoor jungle. Whether you are a plant beginner or an expert,
          we provide easy-care plants, high-quality products, and
          guidance to help your plants thrive.
        </p>

        <h2 className="text-2xl font-semibold text-emerald-700 mt-10 mb-4">
          🌼 What We Offer
        </h2>
        <ul className="text-gray-700 leading-relaxed list-disc ml-6 space-y-2">
          <li>Air-purifying and decorative indoor plants</li>
          <li>Plant care tips and easy-growing suggestions</li>
          <li>Beautiful plant pots and accessories</li>
          <li>Affordable pricing with trusted quality</li>
          <li>Safe packaging and fast delivery</li>
        </ul>

        <h2 className="text-2xl font-semibold text-emerald-700 mt-10 mb-4">
          🌳 Why Choose GreenNest?
        </h2>
        <ul className="text-gray-700 list-disc ml-6 space-y-2">
          <li>Healthy, hand-picked plants</li>
          <li>100% customer satisfaction guaranteed</li>
          <li>Sustainable & eco-friendly approach</li>
          <li>Trusted by plant lovers across the country</li>
        </ul>

        <div className="mt-12 p-6 bg-emerald-50 rounded-xl text-center border border-emerald-200">
          <h3 className="text-xl font-bold text-emerald-700 mb-2">
            💚 Join Our Green Family
          </h3>
          <p className="text-gray-600">
            GreenNest is more than a plant shop — it’s a community of
            people who love nature. Start your plant journey today!
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-700">Have questions?</p>
        <a
          href="/contact"
          className="inline-block mt-3 px-6 py-3 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700 transition"
        >
          Contact Us
        </a>
      </div>

    </div>
  );
};

export default About;