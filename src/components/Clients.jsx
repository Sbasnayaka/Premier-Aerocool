import { motion } from 'framer-motion';

const clients = [
  "DP World",
  "McDonalds Saudi Arabia",
  "Al Salam Compound",
  "Integrated Industrial Care",
  "Saudi Logistics",
  "Jeddah Port Authority"
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-blue-600 overflow-hidden relative">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 mb-12 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4 font-heading">Our Trusted Clients</h2>
        <p className="text-blue-100">Partnering with leading organizations across the Kingdom.</p>
      </div>

      {/* Infinite Marquee Wrapper */}
      <div className="flex relative">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {/* Double the list for seamless loop */}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="px-10 py-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center"
            >
              <span className="text-2xl font-bold text-white opacity-80 hover:opacity-100 transition-opacity font-heading">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Snowflakes in Client Section */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, 50, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute text-white text-3xl"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%` 
            }}
          >
            ❄
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
