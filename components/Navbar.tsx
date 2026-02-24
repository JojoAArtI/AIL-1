
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
      <div className={`fixed inset-0 mobile-nav-overlay lg:hidden transition-transform duration-500 flex flex-col items-center justify-center gap-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-white font-serif text-4xl hover:text-[#c5a47e] transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          className="mt-8 border border-[#c5a47e] text-[#c5a47e] px-12 py-4 text-xs font-bold tracking-widest"
        >
          CONTACT US
        </Link>
      </div>
    </nav>
  );
};
