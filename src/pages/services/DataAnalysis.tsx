import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, BarChart3, TrendingUp, Target } from 'lucide-react';
import dataAnalyticsIcon from 'figma:asset/976289f4377f5c5ebf52544053be5b0f17033666.png';

export function DataAnalysis() {
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
                Data Analysis
              </h1>
              <p className="text-slate-600 text-xl max-w-3xl">
                Transform raw data into meaningful insights with our comprehensive data analysis services. 
                We help you understand patterns, trends, and correlations that drive business decisions.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src={dataAnalyticsIcon} 
                alt="Data Analysis" 
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
              <h2 className="text-slate-900 mb-6">Why Data Analysis Matters</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                In today's data-driven world, the ability to extract actionable insights from raw data is crucial 
                for business success. Our data analysis services help organizations make sense of their data, 
                identify opportunities, and make informed decisions based on evidence rather than intuition.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We employ advanced statistical methods, data mining techniques, and visualization tools to 
                transform complex datasets into clear, understandable insights that drive strategic initiatives 
                and operational improvements.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Identify hidden patterns and trends in your data',
                'Make data-driven decisions with confidence',
                'Improve operational efficiency through insights',
                'Predict future trends and outcomes',
                'Reduce costs and optimize resources',
                'Gain competitive advantage in your market'
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
          <h2 className="text-slate-900 mb-12 text-center">Our Data Analysis Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Statistical Analysis & Reporting</h3>
              <p className="text-slate-600 mb-4">
                Comprehensive statistical analysis to understand your data distribution, correlations, and significance. 
                We create detailed reports with visualizations that make complex data easy to understand.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Descriptive and inferential statistics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Hypothesis testing and validation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Custom dashboards and reports
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Data Mining & Pattern Recognition</h3>
              <p className="text-slate-600 mb-4">
                Discover hidden patterns, anomalies, and relationships within large datasets using advanced 
                data mining techniques and machine learning algorithms.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Clustering and segmentation analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Association rule mining
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Outlier and anomaly detection
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Trend Analysis & Forecasting</h3>
              <p className="text-slate-600 mb-4">
                Analyze historical data to identify trends and predict future outcomes. Our forecasting models 
                help you plan ahead and make proactive business decisions.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Time series analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Predictive modeling and forecasting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Seasonality and trend decomposition
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-slate-900 mb-4">Custom Analytics Solutions</h3>
              <p className="text-slate-600 mb-4">
                Tailored analytics solutions designed to meet your specific business needs and objectives. 
                We work closely with you to develop custom analysis frameworks.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Bespoke analytics frameworks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Integration with existing systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00fe87] mt-1">•</span>
                  Ongoing support and optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-slate-900 mb-12 text-center">Our Analysis Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Data Collection',
                description: 'Gather and consolidate data from multiple sources ensuring quality and completeness'
              },
              {
                step: '02',
                title: 'Data Cleaning',
                description: 'Clean, validate, and prepare data for analysis, removing inconsistencies and errors'
              },
              {
                step: '03',
                title: 'Analysis',
                description: 'Apply statistical methods and analytical techniques to extract meaningful insights'
              },
              {
                step: '04',
                title: 'Reporting',
                description: 'Present findings through clear visualizations and actionable recommendations'
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
          <h2 className="mb-6">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-slate-300 text-xl mb-10">
            Let's discuss how our data analysis services can help you make better decisions and drive business growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#00fe87] text-slate-900 px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#00fe87]/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
