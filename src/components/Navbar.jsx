import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/LOGO.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Services', href: '#services' },
  { name: 'Our Clients', href: '#clients' },
  { name: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 999,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: isScrolled ? '12px 0' : '16px 0',
    background: isScrolled ? '#053d96' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    boxShadow: isScrolled ? '0 10px 30px rgba(5,61,150,0.15)' : 'none',
  };

  return (
    <header style={navStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', zIndex: 1001 }}>
          <img 
            src={logo} 
            alt="Premier Aerocool" 
            style={{ 
              height: isScrolled ? '38px' : '48px', 
              width: 'auto', 
              transition: 'all 0.3s ease',
              filter: isScrolled || isOpen ? 'brightness(0) invert(1)' : 'none' 
            }} 
          />
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', gap: '32px', listStyle: 'none' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: isScrolled ? '#ffffff' : '#0b5699',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#3a91ce'}
              onMouseLeave={e => e.target.style.color = isScrolled ? '#ffffff' : '#0b5699'}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:+966561886137"
          className="desktop-cta"
          style={{
            background: '#014d83',
            color: '#ffffff',
            padding: '12px 28px',
            borderRadius: '99px',
            fontWeight: 700,
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
            textDecoration: 'none',
            boxShadow: '0 8px 20px rgba(1,77,131,0.2)',
            transition: 'all 0.3s ease',
          }}
        >
          Call Expert
        </a>

        {/* Improved Hamburger Button */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: 'none',
            padding: '0',
            cursor: 'pointer',
            zIndex: 1001,
          }}
        >
          <span style={{
            display: 'block',
            width: '28px',
            height: '3px',
            background: isScrolled || isOpen ? '#ffffff' : '#0b5699',
            borderRadius: '10px',
            transition: 'all 0.3s ease',
            transform: isOpen ? 'rotate(45deg) translateY(12px)' : 'none'
          }} />
          <span style={{
            display: 'block',
            width: '28px',
            height: '3px',
            background: isScrolled || isOpen ? '#ffffff' : '#0b5699',
            borderRadius: '10px',
            transition: 'all 0.3s ease',
            opacity: isOpen ? 0 : 1
          }} />
          <span style={{
            display: 'block',
            width: '28px',
            height: '3px',
            background: isScrolled || isOpen ? '#ffffff' : '#0b5699',
            borderRadius: '10px',
            transition: 'all 0.3s ease',
            transform: isOpen ? 'rotate(-45deg) translateY(-12px)' : 'none'
          }} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0,
              background: '#012a6cff',
              zIndex: 998,
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                style={{ 
                  color: '#ffffff', 
                  fontSize: '32px', 
                  fontWeight: 800, 
                  textDecoration: 'none',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav, .desktop-cta { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 991px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
