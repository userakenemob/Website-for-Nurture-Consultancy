import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import auditingIcon from 'figma:asset/267878ed5effd00693dd45f94abc32265dbeedff.png';

export function DataGovernance() {
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
                Data Governance & Auditing
              </h1>
              <p className="text-slate-600 text-xl max-w-3xl">
                Ensure the integrity, security, and compliance of your data with our comprehensive data governance 
                and auditing services. We help you establish and maintain robust data management practices.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src={auditingIcon} 
                alt="Data Governance" 
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
              <h2 className="text-slate-900 mb-6">Protect Your Most Valuable Asset</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Data is one of your organization's most valuable assets, and proper governance is essential for 
                maintaining its quality, security, and compliance. Our data governance and auditing services help 
                you establish frameworks, policies, and procedures to manage data effectively.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We systematically examine and evaluate your information systems, processes, and controls to ensure 
                data integrity, regulatory compliance, and alignment with business objectives.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Ensure data quality and accuracy across systems',
                'Maintain compliance with regulatory requirements',
                'Protect sensitive data and prevent breaches',
                'Establish clear data ownership and accountability',
                'Reduce risks associated with data management',
                'Improve operational efficiency and decision-making'
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
          <h2 className="text-slate-900 mb-12 text-center">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Data Quality Management</h3>
              <p className="text-slate-600 mb-4">
                Implement processes and tools to ensure your data is accurate, complete, consistent, and 
                reliable across all systems and business processes.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Data quality assessment and profiling
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Data cleansing and standardization
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Quality monitoring and reporting
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Data Security & Privacy</h3>
              <p className="text-slate-600 mb-4">
                Protect your data from unauthorized access, breaches, and misuse. Implement security controls 
                and privacy measures to safeguard sensitive information.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Security assessment and risk analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Access control and encryption
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Privacy compliance (GDPR, CCPA, etc.)
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Compliance & Regulatory</h3>
              <p className="text-slate-600 mb-4">
                Ensure your data management practices comply with industry regulations and standards. We help 
                you navigate complex compliance requirements.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Regulatory compliance assessment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Policy and procedure development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Audit preparation and support
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Data Lifecycle Management</h3>
              <p className="text-slate-600 mb-4">
                Manage data throughout its entire lifecycle from creation to deletion. Optimize storage, 
                ensure retention compliance, and secure data disposal.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Data retention policy development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Archiving and backup strategies
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Secure data disposal and deletion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Auditing Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12 text-center">Comprehensive Auditing Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'System Audits',
                description: 'Evaluate information systems for security, efficiency, and compliance',
                items: ['IT infrastructure review', 'Application security assessment', 'System performance analysis']
              },
              {
                title: 'Process Audits',
                description: 'Examine business processes and workflows for effectiveness and compliance',
                items: ['Process documentation review', 'Control effectiveness testing', 'Gap analysis and recommendations']
              },
              {
                title: 'Data Audits',
                description: 'Assess data quality, integrity, and management practices across the organization',
                items: ['Data quality assessment', 'Compliance verification', 'Data lineage analysis']
              }
            ].map((audit, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h3 className="text-slate-900 mb-3">{audit.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{audit.description}</p>
                <ul className="space-y-2">
                  {audit.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-start gap-2 text-slate-700 text-sm">
                      <CheckCircle className="text-[#00fe87] flex-shrink-0 mt-1" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Framework */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12 text-center">Data Governance Framework</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Strategy',
                description: 'Define governance objectives and align with business goals'
              },
              {
                step: '02',
                title: 'Policies',
                description: 'Establish policies, standards, and procedures for data management'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Deploy governance processes and tools across the organization'
              },
              {
                step: '04',
                title: 'Monitoring',
                description: 'Continuous monitoring, measurement, and improvement'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[#00fe87] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">{item.step}</span>
                </div>
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
          <h2 className="mb-6">Strengthen Your Data Governance</h2>
          <p className="text-slate-300 text-xl mb-10">
            Let's discuss how we can help you establish robust data governance practices and ensure compliance.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#00fe87] text-slate-900 px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#00fe87]/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Schedule an Assessment
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
