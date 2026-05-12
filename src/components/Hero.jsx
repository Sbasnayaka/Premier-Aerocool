import { motion } from 'framer-motion';
import logo from '../assets/LOGO.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 transform origin-top-right" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-900 text-sm font-semibold mb-6">
                ❄️ Saudi Arabia's AC Experts
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
                Cooling the <span className="text-blue-900">Future.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Premium air conditioning spare parts and professional services ensuring lasting comfort across the Kingdom.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-blue-900 text-white rounded-full font-bold hover:bg-blue-600 transition shadow-lg shadow-blue-200">
                  Book Repair Now
                </a>
                <a href="tel:+966561886137" className="px-8 py-4 border-2 border-blue-900 text-blue-900 rounded-full font-bold hover:bg-blue-50 transition">
                  Call Now
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-10 mt-12 pt-8 border-t border-slate-200">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">10+</h3>
                  <p className="text-sm text-slate-500">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">500+</h3>
                  <p className="text-sm text-slate-500">Clients Satisfied</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Logo Card */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-12 bg-white rounded-3xl shadow-2xl border border-slate-100"
            >
              <img src={logo} alt="Premier Aerocool" className="w-64 h-auto" />
              <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-4 rounded-2xl shadow-xl">
                <p className="font-bold">24/7 Support</p>
                <p className="text-xs opacity-80 text-white">Emergency Services</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
