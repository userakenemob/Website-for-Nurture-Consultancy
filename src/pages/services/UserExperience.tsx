import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Users } from 'lucide-react';

export function UserExperience() {
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
                User Experience Design
              </h1>
              <p className="text-slate-600 text-xl max-w-3xl">
                Create intuitive and user-friendly interfaces that enhance the user experience and drive engagement. 
                Our UX design services focus on usability, accessibility, and visual appeal.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 flex items-center justify-center">
                <Users className="text-black" size={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-slate-900 mb-6">Designing for People</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Great user experience is at the heart of successful digital products and services. Our UX design 
                approach combines user research, interaction design, and visual design to create interfaces that 
                users love and that drive business results.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We follow a user-centered design process that ensures every design decision is grounded in user 
                needs, behaviors, and preferences, resulting in products that are both beautiful and functional.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Increase user satisfaction and engagement',
                'Reduce user errors and support requests',
                'Improve conversion rates and business outcomes',
                'Create accessible experiences for all users',
                'Build consistent and cohesive interfaces',
                'Accelerate development with clear designs'
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
          <h2 className="text-slate-900 mb-12 text-center">Our UX Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">User Research & Analysis</h3>
              <p className="text-slate-600 mb-4">
                Deep dive into understanding your users through research, interviews, and analytics. Uncover 
                insights that inform design decisions and product strategy.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  User interviews and surveys
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Persona development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  User journey mapping
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Wireframing & Prototyping</h3>
              <p className="text-slate-600 mb-4">
                Create low and high-fidelity wireframes and interactive prototypes to visualize and test design 
                concepts before development begins.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Information architecture
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Interactive prototypes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Rapid iteration and refinement
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Usability Testing & Feedback</h3>
              <p className="text-slate-600 mb-4">
                Test designs with real users to identify issues, validate assumptions, and gather feedback 
                for continuous improvement.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Moderated and unmoderated testing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  A/B testing and optimization
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Heuristic evaluation
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Iterative Design & Refinement</h3>
              <p className="text-slate-600 mb-4">
                Continuously improve designs based on user feedback, analytics, and testing results to create 
                the best possible user experience.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Design iteration cycles
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Analytics-driven improvements
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Design system development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UX Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12 text-center">Our UX Design Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: '01',
                title: 'Research',
                description: 'Understand users, context, and requirements'
              },
              {
                step: '02',
                title: 'Define',
                description: 'Synthesize insights and define design goals'
              },
              {
                step: '03',
                title: 'Ideate',
                description: 'Generate and explore design concepts'
              },
              {
                step: '04',
                title: 'Prototype',
                description: 'Create interactive prototypes for testing'
              },
              {
                step: '05',
                title: 'Test',
                description: 'Validate designs with real users'
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

      {/* Design Principles */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12 text-center">Our Design Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                principle: 'User-Centered',
                description: 'Every design decision is grounded in user needs and validated through research and testing.'
              },
              {
                principle: 'Accessible',
                description: 'We design inclusive experiences that work for everyone, regardless of ability or device.'
              },
              {
                principle: 'Intuitive',
                description: 'Interfaces should be easy to understand and use, requiring minimal learning or explanation.'
              },
              {
                principle: 'Consistent',
                description: 'Maintain visual and functional consistency across all touchpoints and interactions.'
              },
              {
                principle: 'Responsive',
                description: 'Designs adapt seamlessly across different devices, screen sizes, and contexts.'
              },
              {
                principle: 'Data-Driven',
                description: 'Use analytics and metrics to inform decisions and measure the impact of design changes.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-slate-900 mb-2">{item.principle}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12 text-center">What We Design</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Web Applications',
              'Mobile Apps',
              'Enterprise Software',
              'E-commerce',
              'Dashboards',
              'SaaS Products',
              'Admin Portals',
              'Customer Portals'
            ].map((area, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
                <span className="text-slate-900">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Let's Create Great Experiences Together</h2>
          <p className="text-slate-300 text-xl mb-10">
            Ready to design user experiences that delight your users and drive business results? Let's talk.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#00fe87] text-slate-900 px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#00fe87]/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start a UX Project
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
