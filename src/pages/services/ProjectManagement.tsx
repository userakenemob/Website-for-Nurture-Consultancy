import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import projectManagementIcon from 'figma:asset/dd7880fb4d30413a54fce1cbf55d7883094c061c.png';

export function ProjectManagement() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00fe87]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00fe87]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#00fe87] mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>
          
          <div className="flex items-start gap-8">
            <div className="flex-1">
              <h1 className="text-slate-900 mb-6">
                Project Management
              </h1>
              <p className="text-slate-600 text-xl max-w-3xl">
                Professional project management services to ensure successful delivery of your technology 
                initiatives from start to finish.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src={projectManagementIcon} 
                alt="Project Management" 
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-slate-900 mb-6">Expert Project Leadership</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Successful technology projects require more than just technical expertise—they need experienced 
                leadership, clear planning, and effective execution. Our project management services ensure your 
                initiatives stay on track, on budget, and deliver the expected outcomes.
              </p>
              <p className="text-slate-600 leading-relaxed">
                With 15 years of experience managing complex ERP implementations, system integrations, and digital 
                transformation projects, we bring proven methodologies and best practices to every engagement.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'On-time and on-budget project delivery',
                'Clear communication with all stakeholders',
                'Risk identification and mitigation strategies',
                'Quality assurance throughout the project lifecycle',
                'Change management and user adoption',
                'Post-implementation support and optimization'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-[#00fe87] flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12 text-center">What We Deliver</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Project Planning & Execution</h3>
              <p className="text-slate-600 mb-4">
                Comprehensive project planning that establishes clear objectives, timelines, and deliverables. 
                We create detailed project plans and manage execution with precision.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Scope definition and requirements gathering
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Resource planning and allocation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Timeline development and milestone tracking
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Stakeholder Management</h3>
              <p className="text-slate-600 mb-4">
                Effective communication and engagement with all project stakeholders, ensuring alignment and 
                managing expectations throughout the project lifecycle.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Regular status updates and reporting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Stakeholder engagement planning
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Conflict resolution and issue management
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Risk Assessment & Mitigation</h3>
              <p className="text-slate-600 mb-4">
                Proactive identification and management of project risks to minimize disruptions and ensure 
                successful outcomes. We develop comprehensive risk mitigation strategies.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Risk identification and analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Mitigation strategy development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Contingency planning and response
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Quality Assurance & Delivery</h3>
              <p className="text-slate-600 mb-4">
                Rigorous quality management processes to ensure deliverables meet requirements and expectations. 
                We maintain high standards throughout the project.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Quality planning and standards
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Testing and validation procedures
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Continuous improvement processes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12 text-center">Our Methodologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Waterfall',
                description: 'Traditional sequential approach ideal for projects with well-defined requirements and minimal changes expected.'
              },
              {
                title: 'Agile',
                description: 'Iterative and flexible methodology perfect for projects requiring adaptability and continuous improvement.'
              },
              {
                title: 'Hybrid',
                description: 'Combined approach leveraging the best of both worlds, tailored to your specific project needs.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Let's Make Your Project a Success</h2>
          <p className="text-slate-300 text-xl mb-10">
            Partner with experienced project managers who are committed to delivering results that exceed expectations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#00fe87] text-slate-900 px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#00fe87]/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
