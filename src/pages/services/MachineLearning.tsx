import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Brain } from 'lucide-react';

export function MachineLearning() {
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
                Machine Learning
              </h1>
              <p className="text-slate-600 text-xl max-w-3xl">
                Leverage advanced machine learning algorithms to automate processes, predict outcomes, and gain 
                competitive advantages in your industry.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 flex items-center justify-center">
                <Brain className="text-black" size={80} />
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
              <h2 className="text-slate-900 mb-6">Transform Your Business with ML</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Machine learning enables computers to learn from data and improve their performance over time without 
                explicit programming. Our ML solutions help businesses automate complex tasks, uncover hidden insights, 
                and make accurate predictions.
              </p>
              <p className="text-slate-600 leading-relaxed">
                From predictive analytics to intelligent automation, we develop custom machine learning models tailored 
                to your specific business challenges and objectives.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Automate repetitive and complex tasks',
                'Predict customer behavior and market trends',
                'Reduce operational costs through optimization',
                'Improve decision-making with data-driven insights',
                'Detect fraud and anomalies in real-time',
                'Personalize customer experiences at scale'
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
          <h2 className="text-slate-900 mb-12 text-center">Our Machine Learning Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Predictive Modeling</h3>
              <p className="text-slate-600 mb-4">
                Build sophisticated models that predict future outcomes based on historical data. Make proactive 
                decisions and stay ahead of market changes.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Sales and demand forecasting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Customer churn prediction
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Risk assessment and scoring
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Classification & Regression Analysis</h3>
              <p className="text-slate-600 mb-4">
                Categorize data and predict continuous values using advanced classification and regression 
                techniques to solve complex business problems.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Customer segmentation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Sentiment analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Price optimization
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Anomaly Detection</h3>
              <p className="text-slate-600 mb-4">
                Identify unusual patterns and outliers in your data that could indicate fraud, errors, or 
                opportunities. Real-time monitoring and alerts.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Fraud detection systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Quality control monitoring
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Network intrusion detection
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Custom ML Model Development</h3>
              <p className="text-slate-600 mb-4">
                Tailored machine learning solutions designed specifically for your unique business challenges 
                and data characteristics.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Custom algorithm development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Model training and optimization
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Deployment and monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12 text-center">Our ML Development Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: '01',
                title: 'Problem Definition',
                description: 'Identify business objectives and ML use cases'
              },
              {
                step: '02',
                title: 'Data Preparation',
                description: 'Collect, clean, and prepare data for modeling'
              },
              {
                step: '03',
                title: 'Model Training',
                description: 'Develop and train ML models using best practices'
              },
              {
                step: '04',
                title: 'Evaluation',
                description: 'Test and validate model performance'
              },
              {
                step: '05',
                title: 'Deployment',
                description: 'Deploy models and monitor performance'
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

      {/* Use Cases */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12 text-center">Industry Applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { industry: 'Retail', use: 'Demand forecasting and inventory optimization' },
              { industry: 'Finance', use: 'Credit risk assessment and fraud detection' },
              { industry: 'Healthcare', use: 'Disease prediction and treatment optimization' },
              { industry: 'Manufacturing', use: 'Predictive maintenance and quality control' },
              { industry: 'Marketing', use: 'Customer segmentation and campaign optimization' },
              { industry: 'Logistics', use: 'Route optimization and delivery prediction' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-slate-900 mb-2">{item.industry}</h3>
                <p className="text-slate-600 text-sm">{item.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Harness Machine Learning?</h2>
          <p className="text-slate-300 text-xl mb-10">
            Let's explore how machine learning can transform your business and create competitive advantages.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#00fe87] text-slate-900 px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#00fe87]/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Started with ML
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
