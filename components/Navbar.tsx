
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Locations', path: '/locations' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#f4f1e6]/95 py-3 shadow-sm' : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <img src="/logo.png" alt="AIL Logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${isActive(link.path)
                ? 'text-[#c5a47e]'
                : scrolled ? 'text-gray-600 hover:text-[#2d4133]' : 'text-white/70 hover:text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link
            to="/contact"
            className={`hidden sm:block px-8 py-3 text-[10px] font-bold tracking-[0.2em] transition-all border ${scrolled
              ? 'bg-[#2d4133] border-[#2d4133] text-white hover:bg-transparent hover:text-[#2d4133]'
              : 'bg-white border-white text-[#2d4133] hover:bg-transparent hover:text-white'
              }`}
          >
            SHIP NOW
          </Link>
          <button
            className={`${scrolled ? 'text-[#2d4133]' : 'text-white'} lg:hidden p-2 active:scale-95 transition-transform`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Full Screen Overlay */}
      <div className={`fixed inset-0 mobile-nav-overlay lg:hidden transition-transform duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${isOpen ? 'translate-x-0 isOpen' : 'translate-x-full'}`}>
        <div className="h-full w-full flex flex-col p-10 pt-32">
          {/* Faded Background Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-white/5 pointer-events-none select-none">
            AIL
          </div>

          <div className="flex flex-col gap-8 mb-16">
            <p className="text-[#c5a47e] font-bold text-[10px] uppercase tracking-[0.4em] mb-2 stagger-item delay-100">Menu</p>
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white font-serif text-5xl hover:text-[#c5a47e] transition-colors stagger-item"
                style={{ transitionDelay: `${(i + 2) * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
            <div className="stagger-item delay-600">
              <p className="text-[#c5a47e] font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Contact us</p>
              <a href="tel:+919352535257" className="text-white text-xl block mb-2">+91 93525 35257</a>
              <p className="text-white/50 text-xs">aindialogistics@gmail.com</p>
            </div>

            <div className="stagger-item delay-700">
              <p className="text-[#c5a47e] font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Find us</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Jaipur, Rajasthan, India<br />
                Mon — Sat: 9:00 AM - 8:00 PM
              </p>
            </div>
          </div>

          <div className="mt-12 flex gap-6 stagger-item delay-700 pt-8">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white text-sm hover:bg-[#c5a47e] hover:border-[#c5a47e] transition-all">f</div>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white text-sm hover:bg-[#c5a47e] hover:border-[#c5a47e] transition-all">in</div>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white text-sm hover:bg-[#c5a47e] hover:border-[#c5a47e] transition-all">ig</div>
          </div>
        </div>
      </div>
    </nav>
  );
};
