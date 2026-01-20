import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, BookmarkPlus } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function GettingStartedBusinessCentral() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00fe87]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#00fe87] mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
          
          <div className="inline-block px-4 py-2 bg-[#00fe87] text-white rounded-full text-sm mb-6">
            Business Central
          </div>
          
          <h1 className="text-slate-900 mb-6">
            Getting Started with Business Central
          </h1>
          
          <div className="flex items-center gap-6 text-slate-600 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>December 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>7 min read</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:border-[#00fe87] transition-colors">
              <Share2 size={18} />
              Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:border-[#00fe87] transition-colors">
              <BookmarkPlus size={18} />
              Save
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
              alt="Business Central"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Microsoft Dynamics 365 Business Central is a comprehensive business management solution designed for small to 
              medium-sized organizations. This guide will help you understand the platform and plan a successful implementation.
            </p>

            <h2 className="text-slate-900 mt-12 mb-6">What is Business Central?</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Business Central is an all-in-one business management solution that helps organizations manage their finances, 
              operations, sales, and customer service. Built on Microsoft's cloud platform, it offers the flexibility, scalability, 
              and integration capabilities that modern businesses need.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              As a certified Microsoft partner with 15 years of experience, Nurture Consultancy has helped dozens of organizations 
              successfully implement Business Central. In this article, we'll share insights from those experiences to help you 
              get started on the right foot.
            </p>

            <h2 className="text-slate-900 mt-12 mb-6">Core Capabilities</h2>
            
            <h3 className="text-slate-900 mt-8 mb-4">Financial Management</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Business Central provides comprehensive financial management capabilities including general ledger, accounts payable and 
              receivable, cash flow management, budgeting, and multi-currency support. The system supports multiple accounting standards 
              and can handle complex financial scenarios with ease.
            </p>

            <h3 className="text-slate-900 mt-8 mb-4">Sales and Customer Service</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Manage your entire sales process from quotes to invoices, track customer interactions, and deliver exceptional service. 
              The CRM capabilities help you build stronger customer relationships and identify new opportunities for growth.
            </p>

            <h3 className="text-slate-900 mt-8 mb-4">Supply Chain and Operations</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Optimize your inventory management, streamline purchasing processes, and improve warehouse operations. Business Central 
              provides real-time visibility into your supply chain, helping you reduce costs and improve efficiency.
            </p>

            <h3 className="text-slate-900 mt-8 mb-4">Project Management</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Track project costs, manage resources, and monitor profitability with integrated project management tools. Whether you're 
              running consulting engagements or construction projects, Business Central helps you stay on budget and on schedule.
            </p>

            <h2 className="text-slate-900 mt-12 mb-6">Planning Your Implementation</h2>
            
            <div className="bg-slate-50 rounded-xl p-8 my-8 border border-slate-200">
              <h3 className="text-slate-900 mb-4">Key Success Factors</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-[#00fe87] mt-1">•</span>
                  <span><strong>Define Clear Objectives:</strong> Know what you want to achieve and how you'll measure success</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-[#00fe87] mt-1">•</span>
                  <span><strong>Secure Executive Sponsorship:</strong> Ensure leadership is committed to the project</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-[#00fe87] mt-1">•</span>
                  <span><strong>Assemble the Right Team:</strong> Include representatives from all affected departments</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-[#00fe87] mt-1">•</span>
                  <span><strong>Choose an Experienced Partner:</strong> Work with certified consultants who know the platform</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-[#00fe87] mt-1">•</span>
                  <span><strong>Plan for Change Management:</strong> Prepare your organization for new processes and systems</span>
                </li>
              </ul>
            </div>

            <h2 className="text-slate-900 mt-12 mb-6">The Implementation Process</h2>
            
            <h3 className="text-slate-900 mt-8 mb-4">Phase 1: Discovery and Planning</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Begin by documenting your current processes, identifying pain points, and defining requirements. This phase typically 
              takes 2-4 weeks and results in a detailed project plan and implementation roadmap.
            </p>

            <h3 className="text-slate-900 mt-8 mb-4">Phase 2: Design and Configuration</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Work with your implementation partner to configure the system to match your business processes. This includes setting up 
              your chart of accounts, defining workflows, and configuring security roles. Plan for 4-6 weeks for this phase.
            </p>

            <h3 className="text-slate-900 mt-8 mb-4">Phase 3: Data Migration</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Clean and migrate your data from legacy systems. This critical phase requires careful planning and validation to ensure 
              data accuracy. Depending on data volume and complexity, plan for 2-4 weeks.
            </p>

            <h3 className="text-slate-900 mt-8 mb-4">Phase 4: Testing and Training</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Thoroughly test the system with real-world scenarios and train your users. Don't rush this phase - proper testing and 
              training are essential for a successful go-live. Allocate 3-4 weeks for comprehensive testing and training.
            </p>

            <h3 className="text-slate-900 mt-8 mb-4">Phase 5: Go-Live and Support</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Execute your go-live plan with support from your implementation partner. Plan for intensive support during the first few 
              weeks as users adapt to the new system. Most organizations stabilize within 4-6 weeks of go-live.
            </p>

            <h2 className="text-slate-900 mt-12 mb-6">Common Pitfalls to Avoid</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Based on our experience, here are common mistakes to avoid:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-[#00fe87] mt-1">•</span>
                <span>Over-customizing the system instead of adapting processes to best practices</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-[#00fe87] mt-1">•</span>
                <span>Underestimating the importance of data cleanup before migration</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-[#00fe87] mt-1">•</span>
                <span>Insufficient user training leading to low adoption rates</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-[#00fe87] mt-1">•</span>
                <span>Trying to implement everything at once instead of phasing the rollout</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-[#00fe87] mt-1">•</span>
                <span>Neglecting ongoing maintenance and optimization after go-live</span>
              </li>
            </ul>

            <h2 className="text-slate-900 mt-12 mb-6">Conclusion</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Microsoft Dynamics 365 Business Central is a powerful platform that can transform how you manage your business. Success 
              requires careful planning, the right partner, and commitment from your organization. With proper preparation and execution, 
              you can achieve a smooth implementation that delivers lasting value.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              At Nurture Consultancy, we've guided organizations through dozens of successful Business Central implementations. We 
              understand the challenges and know how to navigate them effectively. Let us help you make your implementation a success.
            </p>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-slate-900 mb-6">Ready to Implement Business Central?</h2>
          <p className="text-slate-600 text-lg mb-8">
            Let's discuss your requirements and create a roadmap for successful implementation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#00fe87] text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#00fe87]/50 transition-all duration-300"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/blogs/erp-implementation-success" className="group">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-xl transition-all">
                <span className="text-xs text-[#00fe87] mb-2 block">Business Central</span>
                <h3 className="text-slate-900 mb-2 group-hover:text-[#00fe87] transition-colors">
                  5 Keys to Successful ERP Implementation
                </h3>
                <p className="text-slate-600 text-sm">Essential strategies for ERP success.</p>
              </div>
            </Link>
            <Link to="/blogs/business-central-customization" className="group">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-xl transition-all">
                <span className="text-xs text-[#00fe87] mb-2 block">Business Central</span>
                <h3 className="text-slate-900 mb-2 group-hover:text-[#00fe87] transition-colors">
                  Customizing Business Central for Your Industry
                </h3>
                <p className="text-slate-600 text-sm">Tailor Business Central to your specific needs.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}