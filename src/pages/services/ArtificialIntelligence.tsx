import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Cpu } from 'lucide-react';

export function ArtificialIntelligence() {
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
                Artificial Intelligence
              </h1>
              <p className="text-slate-600 text-xl max-w-3xl">
                Harness the power of AI to transform your business operations, enhance customer experiences, and 
                drive innovation across your organization.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 flex items-center justify-center">
                <Cpu className="text-black" size={80} />
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
              <h2 className="text-slate-900 mb-6">AI-Powered Transformation</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Artificial Intelligence is reshaping how businesses operate, compete, and deliver value to customers. 
                Our AI solutions help organizations automate complex processes, gain deeper insights, and create 
                innovative products and services.
              </p>
              <p className="text-slate-600 leading-relaxed">
                From strategic AI consulting to custom AI application development, we guide you through every step 
                of your AI journey, ensuring successful implementation and measurable business impact.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Automate complex decision-making processes',
                'Enhance customer service with AI chatbots',
                'Gain actionable insights from unstructured data',
                'Improve operational efficiency and reduce costs',
                'Create personalized customer experiences',
                'Drive innovation with AI-powered products'
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
          <h2 className="text-slate-900 mb-12 text-center">Our AI Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">AI Strategy & Consulting</h3>
              <p className="text-slate-600 mb-4">
                Develop a comprehensive AI strategy aligned with your business objectives. We help you identify 
                opportunities, assess readiness, and create a roadmap for AI adoption.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  AI readiness assessment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Use case identification and prioritization
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  AI implementation roadmap
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Natural Language Processing</h3>
              <p className="text-slate-600 mb-4">
                Extract meaning and insights from text and speech data. Build intelligent applications that 
                understand and respond to human language.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Text analysis and sentiment detection
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Chatbots and virtual assistants
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Document processing and extraction
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Intelligent Automation</h3>
              <p className="text-slate-600 mb-4">
                Combine AI with robotic process automation to handle complex, cognitive tasks. Reduce manual 
                effort and increase accuracy across your operations.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Intelligent process automation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Document understanding and processing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Workflow optimization
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">AI-Powered Analytics</h3>
              <p className="text-slate-600 mb-4">
                Advanced analytics powered by AI to uncover insights, predict trends, and support data-driven 
                decision making across your organization.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Predictive and prescriptive analytics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Automated insights generation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Real-time decision support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12 text-center">AI Technologies We Work With</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Computer Vision',
              'Deep Learning',
              'Neural Networks',
              'Generative AI',
              'Large Language Models',
              'Reinforcement Learning',
              'Speech Recognition',
              'Recommendation Systems'
            ].map((tech, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
                <span className="text-slate-900">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12 text-center">Our Implementation Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discover',
                description: 'Understand your business challenges and AI opportunities'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Architect AI solutions tailored to your needs'
              },
              {
                step: '03',
                title: 'Develop',
                description: 'Build and train AI models with rigorous testing'
              },
              {
                step: '04',
                title: 'Deploy',
                description: 'Implement AI solutions with ongoing support'
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
          <h2 className="mb-6">Ready to Embrace AI?</h2>
          <p className="text-slate-300 text-xl mb-10">
            Let's discuss how artificial intelligence can revolutionize your business and create new opportunities for growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#00fe87] text-slate-900 px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#00fe87]/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Your AI Journey
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
