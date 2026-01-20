import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/21cd3411a54e8b83cea7599a5cb86e48ecaca999.png';

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="Nurture Consultancy" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-primary-500'
                    : 'text-slate-600 hover:text-primary-500 hover:bg-primary-50/50'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-500 rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-[#00fe87] text-white rounded-lg hover:shadow-lg hover:shadow-[#00fe87]/50 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-primary-500 hover:bg-primary-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-lg transition-all ${
                  isActive(link.path)
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-slate-600 hover:text-primary-500 hover:bg-primary-50/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}