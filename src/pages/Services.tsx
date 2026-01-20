import { BarChart3, TrendingUp, Brain, Cpu, Settings, GraduationCap, FileCheck, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import businessCentralLogo from 'figma:asset/6e144c99b350cdb7e5fcc5f9c744ab90aca3e3b2.png';
import dataAnalyticsIcon from 'figma:asset/976289f4377f5c5ebf52544053be5b0f17033666.png';
import projectManagementIcon from 'figma:asset/dd7880fb4d30413a54fce1cbf55d7883094c061c.png';
import trainingIcon from 'figma:asset/855829414b941bee9e02aebce34351edaf3a2be8.png';
import auditingIcon from 'figma:asset/267878ed5effd00693dd45f94abc32265dbeedff.png';

export function Services() {
  const services = [
    {
      icon: 'image',
      iconSrc: dataAnalyticsIcon,
      title: 'Data Analysis',
      description: 'Transform raw data into meaningful insights with our comprehensive data analysis services. We help you understand patterns, trends, and correlations that drive business decisions.',
      features: [
        'Statistical analysis and reporting',
        'Data mining and pattern recognition',
        'Trend analysis and forecasting',
        'Custom analytics solutions',
      ],
      color: '#00fe87',
      noBackground: true,
    },
    {
      icon: 'image',
      iconSrc: projectManagementIcon,
      title: 'Project Management',
      description: 'Professional project management services to ensure successful delivery of your technology initiatives from start to finish.',
      features: [
        'Project planning and execution',
        'Stakeholder management',
        'Risk assessment and mitigation',
        'Quality assurance and delivery',
      ],
      color: '#00fe87',
      noBackground: true,
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Leverage advanced machine learning algorithms to automate processes, predict outcomes, and gain competitive advantages in your industry.',
      features: [
        'Predictive modeling',
        'Classification and regression analysis',
        'Anomaly detection',
        'Custom ML model development',
      ],
      color: '#00fe87',
      noBackground: true,
    },
    {
      icon: Cpu,
      title: 'Artificial Intelligence',
      description: 'Harness the power of AI to transform your business operations, enhance customer experiences, and drive innovation across your organization.',
      features: [
        'AI strategy and consulting',
        'Natural language processing',
        'Intelligent automation',
        'AI-powered analytics',
      ],
      color: '#00fe87',
      noBackground: true,
    },
    {
      icon: Settings,
      title: 'Business Central',
      description: 'Expert implementation and support for Microsoft Dynamics 365 Business Central. We help streamline your business processes and improve operational efficiency.',
      features: [
        'Business Central implementation',
        'System customization and configuration',
        'Data migration and integration',
        'Ongoing support and training',
      ],
      color: '#00fe87',
    },
    {
      icon: 'image',
      iconSrc: trainingIcon,
      title: 'Training and Development',
      description: 'Empower your team with the skills and knowledge they need to succeed in a data-driven world. Our training programs cover a wide range of topics and are tailored to your specific needs.',
      features: [
        'Customized training programs',
        'Hands-on workshops and seminars',
        'Certification and accreditation',
        'Ongoing support and resources',
      ],
      color: '#00fe87',
      noBackground: true,
    },
    {
      icon: 'image',
      iconSrc: auditingIcon,
      title: 'Data Governance',
      description: 'Ensure the integrity, security, and compliance of your data with our data governance services. We help you establish and maintain robust data management practices.',
      features: [
        'Data quality and accuracy',
        'Data security and privacy',
        'Compliance with regulations',
        'Data lifecycle management',
      ],
      color: '#00fe87',
      noBackground: true,
    },
    {
      icon: Users,
      title: 'User Experience Design',
      description: 'Create intuitive and user-friendly interfaces that enhance the user experience and drive engagement. Our UX design services focus on usability, accessibility, and visual appeal.',
      features: [
        'User research and analysis',
        'Wireframing and prototyping',
        'Usability testing and feedback',
        'Iterative design and refinement',
      ],
      color: '#00fe87',
      noBackground: true,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00fe87]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00fe87]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-slate-900 mb-6">
              Comprehensive Solutions for{' '}
              <span className="text-[#00fe87]">
                Modern Business
              </span>
            </h1>
            <p className="text-slate-600 text-xl">
              Data-driven solutions designed to help your business thrive in the digital age
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const serviceSlug = service.title
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/&/g, 'and');
              
              return (
              <Link 
                key={index}
                to={`/services/${serviceSlug}`}
                className="group relative bg-white rounded-2xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 block"
              >
                {/* Glow on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"
                  style={{ backgroundColor: service.color }}
                />
                
                {service.title === 'Business Central' ? (
                  <div className="mb-6">
                    <img 
                      src={businessCentralLogo} 
                      alt="Business Central" 
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.noBackground ? '' : 'shadow-lg'}`}
                    style={service.noBackground ? {} : { backgroundColor: service.color }}
                  >
                    {service.icon === 'image' ? (
                      <img 
                        src={service.iconSrc} 
                        alt={service.title} 
                        className="h-16 w-16 object-contain"
                      />
                    ) : (
                      <service.icon className={service.noBackground ? "text-black" : "text-white"} size={32} />
                    )}
                  </div>
                )}
                
                <h3 className="text-slate-900 mb-4 group-hover:text-[#00fe87] transition-all">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-emerald-600 font-medium inline-flex items-center gap-2">
                    Learn more
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business objectives and unlock the full 
            potential of your data.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-0.5 font-medium"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}