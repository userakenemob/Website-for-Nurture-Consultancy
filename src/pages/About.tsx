import { Target, Eye, Lightbulb, Users, Award, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import visionIcon from 'figma:asset/63de1e56d3a620092ccc8386f8bf17aacbe37b17.png';
import missionIcon from 'figma:asset/a3622e9779c4321c609a2b1cf840aa176ecfd46a.png';
import heroImage from 'figma:asset/0f170352a883be6092e0f4a4fbe4c4b4728e9651.png';
import { useState, useEffect, useRef } from 'react';

function CountUp({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Start animation immediately when visible
    setShouldAnimate(true);

    // Set up interval to restart animation every 10 seconds
    const interval = setInterval(() => {
      setCount(0);
      setShouldAnimate(true);
    }, 10000 + duration);

    return () => {
      clearInterval(interval);
    };
  }, [isVisible, duration]);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setShouldAnimate(false);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [shouldAnimate, end, duration]);

  return (
    <div ref={ref} className="text-2xl font-bold text-slate-900">
      {count}{suffix}
    </div>
  );
}

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Dedicated to pursuing excellence in every delivery',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technologies and techniques',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Understanding your processes and challenges deeply',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Delivering measurable results and tangible value',
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-slate-900 mb-6">
                Transforming Data into{' '}
                <span className="text-[#00fe87]">
                  Actionable Insights
                </span>
              </h1>
              <p className="text-slate-600 text-xl">Welcome Aboard</p>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={heroImage}
                  alt="Team collaboration"
                  className="w-full"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-white" size={28} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Client Success Rate</div>
                    <CountUp end={98} suffix="%" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <value.icon className="text-[#000000]" size={48} />
                </div>
                <h4 className="text-slate-900 mb-2">{value.title}</h4>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nurture Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-slate-900 mb-4">Why Nurture?</h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto">
              We go beyond reports and dashboards to deliver transformative insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="Business analytics"
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                <h4 className="text-slate-900 mb-2">Tangible Business Value</h4>
                <p className="text-slate-600">
                  Our focus on delivering tangible business value through our analytical solutions sets us apart. 
                  We strive to uncover hidden insights that drive strategic decision-making, optimize operations, 
                  and enhance overall business performance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                <h4 className="text-slate-900 mb-2">Actionable Intelligence</h4>
                <p className="text-slate-600">
                  By transforming data into actionable intelligence, we empower our clients to make better decisions, 
                  gain a competitive edge, and achieve their business objectives.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                <h4 className="text-slate-900 mb-2">Comprehensive Services</h4>
                <p className="text-slate-600">
                  From data collection and integration to advanced analytics and visualization, we work closely 
                  with clients throughout the entire analytics journey.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-slate-200 text-center max-w-4xl mx-auto">
            <p className="text-slate-600 text-lg">
              Whether you are a small startup or a large enterprise in any industry or sector, we are here to help 
              you harness the power of data. Our commitment to excellence, innovation, and customer satisfaction sets 
              us apart as a trusted partner in your data analytics journey.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00fe87]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-[#00fe87]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="mb-6">
                <img src={visionIcon} alt="Vision" className="w-16 h-16" />
              </div>
              <h3 className="text-white mb-4">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To revolutionize how organizations harness the power of data by becoming the trusted partner in 
                their journey towards data-driven decision-making.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="mb-6">
                <img src={missionIcon} alt="Mission" className="w-16 h-16" />
              </div>
              <h3 className="text-white mb-4">Our Mission</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To empower organizations with data-driven insights that lead to transformative outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}