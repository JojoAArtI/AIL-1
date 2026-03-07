
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
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Trucking Services', path: '/services/trucking' },
        { name: 'Storage & Warehousing', path: '/services/warehousing' },
        { name: 'Supply Chain Help', path: '/services/supply-chain' },
        { name: 'Factory Logistics', path: '/services/factory-logistics' },
        { name: 'Business Delivery', path: '/services/business-delivery' },
        { name: 'Packing & Moving', path: '/services/packing-moving' },
      ]
    },
    { name: 'Locations', path: '/locations' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Define which pages have a dark background at the top (where transparent/white text works)
  const isDarkHeaderPage = location.pathname === '/';

  // Should we force the solid background/dark text appearance?
  const shouldBeSolid = scrolled || !isDarkHeaderPage;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${shouldBeSolid ? 'bg-[#f4f1e6]/95 py-3 shadow-sm' : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <img src="/logo.png" alt="AIL Logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex gap-10">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              <Link
                to={link.path}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors flex items-center gap-1 py-2 ${isActive(link.path)
                  ? 'text-[#2d3282]'
                  : shouldBeSolid ? 'text-gray-600 hover:text-[#f39223]' : 'text-white/70 hover:text-white'
                  }`}
              >
                {link.name}
                {link.dropdown && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
                )}
              </Link>

              {link.dropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white shadow-xl border border-gray-100 min-w-[240px] py-4 rounded-sm">
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-8 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-[#f39223] hover:bg-[#f4f1e6]/50 transition-all border-l-2 border-transparent hover:border-[#f39223]"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link
            to="/contact"
            className={`hidden sm:block px-8 py-3 text-[10px] font-bold tracking-[0.2em] transition-all border ${shouldBeSolid
              ? 'bg-[#f39223] border-[#f39223] text-white hover:bg-transparent hover:text-[#f39223]'
              : 'bg-white border-white text-[#f39223] hover:bg-transparent hover:text-white'
              }`}
          >
            SHIP NOW
          </Link>
          <button
            className={`${shouldBeSolid ? 'text-[#f39223]' : 'text-white'} lg:hidden p-2 active:scale-95 transition-transform`}
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
            <p className="text-[#2d3282] font-bold text-[10px] uppercase tracking-[0.4em] mb-2 stagger-item delay-100">Menu</p>
            {navLinks.map((link, i) => (
              <div key={link.path} className="flex flex-col gap-4">
                <Link
                  to={link.path}
                  className="text-white font-serif text-5xl hover:text-[#2d3282] transition-colors stagger-item"
                  style={{ transitionDelay: `${(i + 2) * 100}ms` }}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="flex flex-col gap-3 pl-4 border-l border-white/10 stagger-item" style={{ transitionDelay: `${(i + 2.5) * 100}ms` }}>
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="text-white/40 font-bold text-[10px] uppercase tracking-[0.2em] hover:text-[#f39223] transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
            <div className="stagger-item delay-600">
              <p className="text-[#2d3282] font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Contact us</p>
              <a href="tel:+919352535257" className="text-white text-xl block mb-2">+91 93525 35257</a>
              <p className="text-white/50 text-xs">aindialogistics@gmail.com</p>
            </div>

            <div className="stagger-item delay-700">
              <p className="text-[#2d3282] font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Find us</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Jaipur, Rajasthan, India<br />
                Mon — Sat: 9:00 AM - 8:00 PM
              </p>
            </div>
          </div>

          <div className="mt-12 flex gap-6 stagger-item delay-700 pt-8">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white text-sm hover:bg-[#2d3282] hover:border-[#2d3282] transition-all">f</div>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white text-sm hover:bg-[#2d3282] hover:border-[#2d3282] transition-all">in</div>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white text-sm hover:bg-[#2d3282] hover:border-[#2d3282] transition-all">ig</div>
          </div>
        </div>
      </div>
    </nav>
  );
};
