import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Services', href: '#services' },
  { name: 'Our Clients', href: '#clients' },
  { name: 'Contact Us', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-white/10 backdrop-blur-md py-5 border-b border-white/20'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center z-50">
          <a href="#" className={`text-2xl font-heading font-bold ${isScrolled || isOpen ? 'text-white' : 'text-primary'}`}>
            PREMIER <span className={isScrolled || isOpen ? 'text-light' : 'text-secondary'}>AEROCOOL</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-secondary ${
                isScrolled ? 'text-white/90' : 'text-slate-800'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Call Action */}
        <div className="hidden md:block">
          <a
            href="tel:+966561886137"
            className="bg-secondary hover:bg-light text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(37,150,190,0.5)] hover:shadow-[0_0_25px_rgba(37,150,190,0.8)]"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiX className="text-white" />
          ) : (
            <HiMenu className={isScrolled ? 'text-white' : 'text-primary'} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-primary z-40 flex flex-col justify-center items-center h-screen w-full"
          >
            <nav className="flex flex-col space-y-8 text-center text-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white font-medium hover:text-light transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+966561886137"
                onClick={() => setIsOpen(false)}
                className="bg-secondary hover:bg-light transition-colors text-white px-8 py-3 rounded-full font-medium mt-4 shadow-lg"
              >
                Call Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
