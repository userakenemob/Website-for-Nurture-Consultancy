import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
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
    <div ref={ref} className="text-3xl font-bold text-[#00fe87] mb-1">
      {count}{suffix}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00fe87]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00fe87]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00fe87]/10 backdrop-blur-sm text-[#00fe87] rounded-full mb-6 border border-[#00fe87]/30">
              <Sparkles size={16} />
              <span className="text-sm font-medium">NURTURE WITH US</span>
            </div>
            
            <h1 className="text-slate-900 mb-6">
              Exponentially grow your business with{' '}
              <span className="text-[#00fe87]">
                data driven solutions
              </span>
            </h1>
            
            <p className="text-slate-600 text-xl mb-10 leading-relaxed">
              We are curious, analytical and committed to using our strengths towards social betterment. 
              With 15+ years of experience implementing and delivering enterprise solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 bg-[#00fe87] text-white px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-[#00fe87]/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl hover:border-[#00fe87] hover:text-[#00fe87] hover:bg-[#00fe87]/5 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-8 border-t border-slate-200">
              <div>
                <CountUp end={15} suffix="+" />
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div>
                <CountUp end={100} suffix="+" />
                <div className="text-sm text-slate-600">Projects Delivered</div>
              </div>
              <div>
                <CountUp end={50} suffix="+" />
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
              <div>
                <CountUp end={98} suffix="%" />
                <div className="text-sm text-slate-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#00fe87] rounded-3xl blur-3xl opacity-20" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-[#00fe87] rounded-3xl blur-3xl opacity-20" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                  alt="Data Analytics Dashboard"
                  className="w-full"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-200 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00fe87] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </div>
                  <div>
                    <CountUp end={98} suffix="%" />
                    <div className="text-sm text-slate-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}