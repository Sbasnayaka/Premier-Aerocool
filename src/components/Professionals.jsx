import { motion } from 'framer-motion';

const Professionals = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left: Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading leading-tight">
              Our <span className="text-blue-800">Expert</span> Professionals
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We take pride in our well-trained professionals who can assist our customers with reliable and efficient AC solutions. Every technician is certified and equipped with the latest tools to handle any challenge.
            </p>
            
            <div className="space-y-4">
              {[
                "Certified AC Technicians",
                "Advanced Diagnostic Tools",
                "24/7 Emergency Support",
                "Satisfaction Guaranteed"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">
                    ✓
                  </div>
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Trust Badges / Visual */}
          <div className="w-full md:w-1/2 relative">
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {[
                { label: "Reliable Service", icon: "⛨" },
                { label: "Expert Support", icon: "🛠" },
                { label: "Fast Response", icon: "🗲" },
                { label: "Fair Pricing", icon: "$" }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center"
                >
                  <div className="text-4xl mb-4 text-blue-800">{badge.icon}</div>
                  <div className="font-bold text-slate-900">{badge.label}</div>
                </motion.div>
              ))}
            </div>
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 blur-3xl rounded-full opacity-30" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Professionals;
