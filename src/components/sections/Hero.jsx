import React from 'react';

const Hero = ({ setActiveSection }) => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black min-h-screen flex items-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-40 -right-40"></div>
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -bottom-40 -left-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Commissioning & Completion <span className="text-blue-500">Excellence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional services for energy and construction sectors. We ensure your projects are completed with precision, quality, and on-time delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => setActiveSection('services')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105"
              >
                Explore Services
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition"
              >
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-blue-500">500+</p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-500">98%</p>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-500">25+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Image/Placeholder */}
          <div className="relative hidden md:block">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-1">
              <div className="bg-gray-900 rounded h-96 flex items-center justify-center">
                <svg className="w-32 h-32 text-blue-500 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;