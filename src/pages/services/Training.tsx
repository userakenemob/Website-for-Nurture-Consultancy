import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import trainingIcon from 'figma:asset/855829414b941bee9e02aebce34351edaf3a2be8.png';

export function Training() {
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
                Training and Development
              </h1>
              <p className="text-slate-600 text-xl max-w-3xl">
                Empower your team with the skills and knowledge they need to succeed in a data-driven world. Our 
                training programs cover a wide range of topics and are tailored to your specific needs.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src={trainingIcon} 
                alt="Training" 
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
              <h2 className="text-slate-900 mb-6">Invest in Your Team's Success</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                In today's rapidly evolving technology landscape, continuous learning is essential for maintaining 
                competitive advantage. Our comprehensive training programs equip your team with practical skills 
                in Business Central, Power BI, data analytics, and more.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We combine expert instruction with hands-on exercises and real-world scenarios to ensure 
                participants can immediately apply what they learn to their daily work.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Customized training programs for your needs',
                'Expert instructors with industry experience',
                'Hands-on practical exercises and workshops',
                'Flexible delivery options (onsite, remote, hybrid)',
                'Certification preparation and support',
                'Ongoing learning resources and materials'
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

      {/* Training Programs */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12 text-center">Our Training Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Business Central Training</h3>
              <p className="text-slate-600 mb-4">
                Comprehensive training on Microsoft Dynamics 365 Business Central for end-users, power users, 
                and administrators. Learn to maximize your ERP investment.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Core functionality and navigation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Financial management and reporting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Sales, purchasing, and inventory
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  System administration and configuration
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Power BI Training</h3>
              <p className="text-slate-600 mb-4">
                Master Microsoft Power BI to create compelling visualizations and interactive dashboards. 
                Transform data into actionable insights.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Data connectivity and transformation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  DAX formulas and calculations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Report design and visualization
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Dashboard publishing and sharing
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Data Analytics Training</h3>
              <p className="text-slate-600 mb-4">
                Build essential data analytics skills including statistical analysis, data visualization, 
                and analytical thinking for business decision-making.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Statistical analysis fundamentals
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Data visualization best practices
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Analytical problem-solving
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Excel for data analysis
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Custom Training Programs</h3>
              <p className="text-slate-600 mb-4">
                Tailored training solutions designed specifically for your organization's needs, tools, and 
                processes. We create programs that address your unique challenges.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Needs assessment and gap analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Custom curriculum development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Role-specific training paths
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Ongoing support and refresher courses
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12 text-center">Flexible Training Delivery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Instructor-Led Training',
                description: 'Interactive classroom sessions with expert instructors, both onsite and virtual',
                features: ['Real-time interaction', 'Q&A sessions', 'Group exercises']
              },
              {
                title: 'Hands-On Workshops',
                description: 'Practical workshops focused on applying skills to real-world scenarios',
                features: ['Practical exercises', 'Case studies', 'Project work']
              },
              {
                title: 'Self-Paced Learning',
                description: 'Online resources and materials for flexible, independent learning',
                features: ['Video tutorials', 'Documentation', 'Practice exercises']
              }
            ].map((format, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h3 className="text-slate-900 mb-3">{format.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{format.description}</p>
                <ul className="space-y-2">
                  {format.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-slate-700 text-sm">
                      <CheckCircle className="text-[#00fe87] flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-slate-900 mb-6">Certification & Accreditation</h2>
            <p className="text-slate-600 text-lg mb-8">
              We support participants in obtaining industry-recognized certifications and provide accredited 
              training programs that enhance professional credentials and career advancement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Microsoft certification preparation',
                'Completion certificates for all programs',
                'Continuing professional development credits',
                'Assessment and competency validation'
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#00fe87] flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Invest in Your Team?</h2>
          <p className="text-slate-300 text-xl mb-10">
            Let's discuss how our training programs can help your team develop the skills they need to excel.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#00fe87] text-slate-900 px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#00fe87]/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore Training Options
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
