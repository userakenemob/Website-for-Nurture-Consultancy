import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">A bit about us</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg mb-6">
            Our background ranges from business and accounting to project management, data analytics and ERP implementation. 
            We are curious, analytical and committed to using our strengths towards social betterment.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            As a company, we have around 15yrs of experience implementing and delivering enterprise solutions. 
            We are a company that is dedicated to pursuing excellence in our delivery.
          </p>
          <p className="text-gray-600 text-lg mb-8">
            Our passion for providing solutions and our drive to understand our clients and their processes puts us 
            at the forefront of ensuring clients get the best experience and value from their investments in technology.
          </p>

          <div className="text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[#00fe87] hover:text-[#00cc6c] transition-colors font-medium"
            >
              Learn More About Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}