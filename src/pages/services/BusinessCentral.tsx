import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import businessCentralLogo from 'figma:asset/6e144c99b350cdb7e5fcc5f9c744ab90aca3e3b2.png';

export function BusinessCentral() {
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
                Microsoft Dynamics 365 Business Central
              </h1>
              <p className="text-slate-600 text-xl max-w-3xl">
                Expert implementation and support for Microsoft Dynamics 365 Business Central. We help streamline 
                your business processes and improve operational efficiency.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src={businessCentralLogo} 
                alt="Business Central" 
                className="h-32 w-auto object-contain"
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
              <h2 className="text-slate-900 mb-6">Your Business Central Partner</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                As Microsoft partners with extensive experience in Business Central implementation, we help 
                organizations of all sizes leverage this powerful ERP solution to manage their finances, operations, 
                sales, and customer service from a single platform.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our team of certified consultants ensures smooth implementation, seamless integration with existing 
                systems, and ongoing support to maximize your return on investment.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Unified platform for all business operations',
                'Real-time visibility into business performance',
                'Streamlined financial management and reporting',
                'Improved inventory and supply chain management',
                'Enhanced customer relationship management',
                'Scalable solution that grows with your business'
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
          <h2 className="text-slate-900 mb-12 text-center">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Business Central Implementation</h3>
              <p className="text-slate-600 mb-4">
                End-to-end implementation services from initial assessment to go-live and beyond. We ensure 
                a smooth transition with minimal disruption to your operations.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Requirements gathering and analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  System design and architecture
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Testing and quality assurance
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">System Customization & Configuration</h3>
              <p className="text-slate-600 mb-4">
                Tailor Business Central to match your unique business processes and requirements. Custom 
                development and configuration to maximize efficiency.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Custom module development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Workflow automation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Report customization
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Data Migration & Integration</h3>
              <p className="text-slate-600 mb-4">
                Seamless migration of your existing data and integration with other business systems, 
                applications, and third-party services.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Legacy system data migration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Third-party system integration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  API development and connectivity
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Ongoing Support & Training</h3>
              <p className="text-slate-600 mb-4">
                Comprehensive support and training programs to ensure your team can effectively use Business 
                Central and maximize its benefits.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  User training and documentation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Technical support and maintenance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  System updates and upgrades
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Modules */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12 text-center">Business Central Modules We Work With</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { module: 'Financial Management', desc: 'General ledger, accounts payable/receivable, banking' },
              { module: 'Sales & Marketing', desc: 'Sales orders, quotes, customer management, campaigns' },
              { module: 'Purchase Management', desc: 'Purchase orders, vendor management, requisitions' },
              { module: 'Inventory Management', desc: 'Stock control, warehouse management, transfers' },
              { module: 'Project Management', desc: 'Job costing, resource planning, time tracking' },
              { module: 'Service Management', desc: 'Service orders, contracts, resource allocation' }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-slate-900 mb-2">{item.module}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12 text-center">Our Implementation Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Analyze current processes and define requirements'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Design solution architecture and configuration'
              },
              {
                step: '03',
                title: 'Build',
                description: 'Configure system and develop customizations'
              },
              {
                step: '04',
                title: 'Test',
                description: 'Comprehensive testing and user acceptance'
              },
              {
                step: '05',
                title: 'Deploy',
                description: 'Go-live support and knowledge transfer'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[#00fe87] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">{item.step}</span>
                </div>
                <h3 className="text-slate-900 mb-3 text-base">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Transform Your Business with Business Central</h2>
          <p className="text-slate-300 text-xl mb-10">
            Ready to streamline your operations and gain better control over your business? Let's discuss how 
            Business Central can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#00fe87] text-slate-900 px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#00fe87]/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
