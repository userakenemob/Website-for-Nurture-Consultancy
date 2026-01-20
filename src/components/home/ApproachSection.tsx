import { Target, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import approachGif from 'figma:asset/733c754c7585b5a51703fd61293968be9680c495.png';
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
    <div ref={ref} className="text-4xl font-bold text-[#00fe87] mb-1">
      {count}{suffix}
    </div>
  );
}

export function ApproachSection() {
  const benefits = [
    'Customized solution strategies',
    'Deep understanding of your business',
    'Collaborative approach',
    'Measurable results',
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={approachGif}
                alt="Business growth chart"
                className="w-full"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
              <div className="text-center">
                <CountUp end={98} suffix="%" />
                <div className="text-sm text-slate-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00fe87]/10 text-[#00fe87] rounded-full mb-4 border border-[#00fe87]/30">
              <Target size={16} />
              <span className="text-sm font-medium">OUR APPROACH</span>
            </div>
            
            <h2 className="text-slate-900 mb-6">
              Tailored Solutions for{' '}
              <span className="text-[#00fe87]">
                Unique Businesses
              </span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              At Nurture Consultancy, every business is unique, and a one size fits all approach does not work 
              when providing a solution. That's why we take the time to understand your requirements, challenges, 
              and objectives.
            </p>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              By combining our expertise with your domain knowledge, we develop customized solution strategies 
              that align with your goal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#00fe87] flex-shrink-0" size={20} />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[#00fe87] hover:text-[#00cc6c] font-medium group"
            >
              Learn more about us
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}