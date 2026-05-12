import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Cooling Gradient & Mist Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#e0f2fe_0%,#ffffff_100%)]" />
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6-dark.png')]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block py-1 px-4 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6 border border-secondary/20"
            >
              ❄️ Expert Cooling Solutions in Saudi Arabia
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary leading-tight mb-6">
              Cooling the <span className="text-secondary">Future.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Premium air conditioning spare parts, professional maintenance, and duct cleaning services. We ensure your comfort with unmatched reliability.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all"
              >
                Book Repair Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+966561886137"
                className="bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all"
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Decorative Cooling Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden md:block"
          >
            {/* Animated Glow behind the image space */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/20 blur-[100px] rounded-full animate-pulse" />
            
            <div className="relative z-10 bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌬️</div>
                <p className="text-primary font-heading font-semibold text-xl">Premium AC Support</p>
                <p className="text-slate-500 text-sm">Saudi Arabia's #1 Service</p>
              </div>
              
              {/* Floating tech icons animation simulation */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 text-4xl opacity-40"
              >❄️</motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
