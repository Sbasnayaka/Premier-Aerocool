import { motion } from 'framer-motion';
import logo from '../assets/LOGO.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-20 bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-50/50 -skew-x-0 md:-skew-x-12 transform origin-top-right" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-900 text-xs md:text-sm font-semibold mb-4 md:mb-6">
                ❄️ Saudi Arabia's AC Experts
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-4 md:mb-6">
                Cooling the <span className="text-blue-900">Future.</span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Premium air conditioning spare parts and professional services ensuring lasting comfort across the Kingdom.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a href="#contact" className="px-8 py-3 md:py-4 bg-blue-900 text-white rounded-full font-bold hover:bg-blue-600 transition shadow-lg shadow-blue-200 text-sm md:text-base">
                  Book Repair Now
                </a>
                <a href="tel:+966561886137" className="px-8 py-3 md:py-4 border-2 border-blue-900 text-blue-900 rounded-full font-bold hover:bg-blue-50 transition text-sm md:text-base">
                  Call Now
                </a>
              </div>

              {/* Stats */}
              <div className="flex justify-center md:justify-start gap-8 md:gap-10 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-200">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">10+</h3>
                  <p className="text-xs md:text-sm text-slate-500 font-medium">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">500+</h3>
                  <p className="text-xs md:text-sm text-slate-500 font-medium">Clients Satisfied</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Logo Card */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-4 md:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-8 md:p-12 bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-[280px] sm:max-w-xs md:max-w-none"
            >
              <img src={logo} alt="Premier Aerocool" className="w-full h-auto" />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-blue-900 text-white p-3 md:p-4 rounded-2xl shadow-xl">
                <p className="font-bold text-xs md:text-base">24/7 Support</p>
                <p className="text-[10px] md:text-xs opacity-80 text-white font-medium">Emergency Services</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
