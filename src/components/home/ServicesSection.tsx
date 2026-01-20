import { BarChart3, FolderKanban, GraduationCap, FileSearch } from 'lucide-react';
import { Link } from 'react-router-dom';
import dataAnalyticsIcon from 'figma:asset/976289f4377f5c5ebf52544053be5b0f17033666.png';
import projectManagementIcon from 'figma:asset/dd7880fb4d30413a54fce1cbf55d7883094c061c.png';
import trainingIcon from 'figma:asset/855829414b941bee9e02aebce34351edaf3a2be8.png';
import auditingIcon from 'figma:asset/267878ed5effd00693dd45f94abc32265dbeedff.png';

export function ServicesSection() {
  const services = [
    {
      icon: 'image',
      iconSrc: dataAnalyticsIcon,
      title: 'Data Analytics',
      description: 'We examine raw data to uncover meaningful insights, patterns and trends helping organizations make informed decisions',
      color: '#00fe87',
      noBackground: true,
    },
    {
      icon: 'image',
      iconSrc: projectManagementIcon,
      title: 'Project Management',
      description: 'We help clients plan, organize, and oversee the execution of system implementation from initiation to completion.',
      color: '#3b82f6',
      noBackground: true,
    },
    {
      icon: 'image',
      iconSrc: trainingIcon,
      title: 'Training',
      description: 'We train individuals with the knowledge, skills, and competencies necessary in Business Central and Power BI',
      color: '#a855f7',
      noBackground: true,
    },
    {
      icon: 'image',
      iconSrc: auditingIcon,
      title: 'Auditing',
      description: 'We systematically examine and evaluate an organization\'s information systems, processes, and controls.',
      color: '#f97316',
      noBackground: true,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00fe87]/10 text-[#00fe87] rounded-full mb-4 border border-[#00fe87]/30">
            <span className="text-sm font-medium">OUR SERVICES</span>
          </div>
          <h2 className="text-slate-900 mb-4">What we do</h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            Comprehensive solutions tailored to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#00fe87] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div 
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 flex-shrink-0 group-hover:scale-110 transition-transform ${service.noBackground ? '' : 'shadow-lg'}`}
                style={service.noBackground ? {} : { backgroundColor: service.color }}
              >
                {service.icon === 'image' ? (
                  <img src={service.iconSrc} alt={service.title} className="w-14 h-14 object-contain" />
                ) : (
                  <service.icon className="text-white" size={28} />
                )}
              </div>
              
              <h3 className="text-slate-900 mb-3 group-hover:text-[#00fe87] transition-colors min-h-[3.5rem] flex items-start">
                {service.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Hover arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[#00fe87] text-sm font-medium inline-flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#00fe87] text-white px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-[#00fe87]/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}