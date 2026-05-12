import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
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

  const navStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 999,
    transition: 'all 0.3s ease',
    padding: isScrolled ? '12px 0' : '20px 0',
    background: isScrolled
      ? '#053d9657' 
      : 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(12px)',
    borderBottom: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.2)',
    boxShadow: isScrolled ? '0 4px 30px rgba(11,86,153,0.3)' : 'none',
  };

  return (
    <header style={navStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', zIndex: 1001 }}>
          <img src={logo} alt="Premier Aerocool" style={{ height: '48px', width: 'auto', filter: isScrolled || isOpen ? 'brightness(0) invert(1)' : 'none' }} />
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', gap: '32px', listStyle: 'none' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: isScrolled ? 'rgba(255,255,255,0.9)' : '#0b5699',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#3a91ce'}
              onMouseLeave={e => e.target.style.color = isScrolled ? 'rgba(255,255,255,0.9)' : '#0b5699'}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:+966561886137"
          style={{
            background: '#014d83ff',
            color: '#ffffff',
            padding: '10px 24px',
            borderRadius: '999px',
            fontWeight: 600,
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
            textDecoration: 'none',
            boxShadow: '0 0 20px rgba(37,150,190,0.4)',
            transition: 'all 0.3s',
            display: 'none',
          }}
          className="desktop-cta"
        >
          Call Now
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '28px', zIndex: 1001, color: isScrolled || isOpen ? '#ffffff' : '#0b5699' }}
          className="mobile-btn"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            style={{
              position: 'fixed', inset: 0,
              background: '#0b5699',
              zIndex: 998,
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '32px',
            }}
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                style={{ color: '#ffffff', fontSize: '24px', fontWeight: 600, textDecoration: 'none' }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-block !important; }
          .mobile-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
