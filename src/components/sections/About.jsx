import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About <span className="text-blue-500">Procompletion Ltd</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Delivering excellence in commissioning and completion services across energy and construction industries
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-blue-600 transition">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To deliver comprehensive commissioning and completion services that ensure the highest standards of quality, safety, and efficiency for our clients in the energy and construction sectors.
            </p>
          </div>

          {/* Values */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-blue-600 transition">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">Our Values</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                <span>Excellence in every project</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                <span>Client-focused solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                <span>Safety and compliance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                <span>Innovative approaches</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Our Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">500+</p>
              <p className="text-blue-100">Successful Projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">98%</p>
              <p className="text-blue-100">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">25+</p>
              <p className="text-blue-100">Years in Industry</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">40+</p>
              <p className="text-blue-100">Expert Team Members</p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h3 className="text-2xl font-bold text-blue-500 mb-4">Our Vision</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            To be the leading commissioning and completion services provider, recognized globally for our expertise, reliability, and commitment to transforming project completion into measurable success for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;