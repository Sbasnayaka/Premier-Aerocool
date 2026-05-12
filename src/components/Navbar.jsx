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

  // Prevent body scroll when mobile menu is open
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
    transition: 'all 0.3s ease',
    padding: isScrolled ? '12px 0' : '20px 0',
    background: isScrolled
      ? '#053d96e6' // Slightly more opaque for better legibility
      : 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(12px)',
    borderBottom: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.2)',
    boxShadow: isScrolled ? '0 4px 30px rgba(5,61,150,0.2)' : 'none',
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
              height: isScrolled ? '40px' : '48px', 
              width: 'auto', 
              transition: 'all 0.3s',
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
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'color 0.2s',
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
          style={{
            background: '#014d83ff',
            color: '#ffffff',
            padding: '10px 24px',
            borderRadius: '999px',
            fontWeight: 700,
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(1,77,131,0.3)',
            transition: 'all 0.3s',
          }}
          className="desktop-cta"
        >
          Call Now
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            fontSize: '32px', 
            zIndex: 1001, 
            color: isScrolled || isOpen ? '#ffffff' : '#0b5699',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4px'
          }}
          className="mobile-btn"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed', inset: 0,
              background: '#053d96',
              zIndex: 998,
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '24px',
              padding: '24px'
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                style={{ 
                  color: '#ffffff', 
                  fontSize: '28px', 
                  fontWeight: 700, 
                  textDecoration: 'none',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              href="tel:+966561886137"
              style={{
                marginTop: '20px',
                background: '#ffffff',
                color: '#053d96',
                padding: '16px 40px',
                borderRadius: '999px',
                fontWeight: 700,
                fontSize: '18px',
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}
            >
              Contact Support
            </motion.a>
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
          .mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
