import React, { useState } from 'react';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 'energy',
      title: 'Energy Sector Services',
      icon: '⚡',
      description: 'Comprehensive commissioning solutions for power plants and energy infrastructure',
      details: [
        'Power plant commissioning',
        'Renewable energy system startup',
        'Grid integration testing',
        'Performance verification',
        'Compliance documentation'
      ]
    },
    {
      id: 'construction',
      title: 'Construction Sector Services',
      icon: '🏗️',
      description: 'Complete project commissioning for construction and infrastructure projects',
      details: [
        'Building system commissioning',
        'HVAC system verification',
        'Fire safety system testing',
        'Electrical system startup',
        'Final inspections & approvals'
      ]
    },
    {
      id: 'project',
      title: 'Project Management',
      icon: '📋',
      description: 'End-to-end project management ensuring timely and quality completion',
      details: [
        'Scheduling and planning',
        'Resource allocation',
        'Risk management',
        'Quality assurance',
        'Stakeholder coordination'
      ]
    },
    {
      id: 'completion',
      title: 'Completion Services',
      icon: '✅',
      description: 'Final completion support including testing, verification, and handover',
      details: [
        'System testing protocols',
        'Performance validation',
        'Documentation preparation',
        'Training and handover',
        'Post-completion support'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our <span className="text-blue-500">Services</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tailored solutions for commissioning and completion across multiple sectors
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-600 transition cursor-pointer"
              onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                {expandedService === service.id && (
                  <div className="border-t border-gray-700 pt-6 mt-6">
                    <h4 className="text-blue-500 font-semibold mb-4">Key Services:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <span className="text-blue-500 mr-3">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-4 text-blue-500 text-sm font-semibold">
                  {expandedService === service.id ? '▼ Show Less' : '▶ Show Details'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Service Package?</h3>
          <p className="text-blue-100 mb-6">We tailor solutions to meet your specific project requirements</p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition">
            Request Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;