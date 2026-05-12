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
    <section id="clients" className="py-24 overflow-hidden relative" style={{ background: '#1394fd2f' }}>
      <div className="container mx-auto px-6 mb-12 text-center relative z-10">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Our Trusted Clients</h2>
        <p className="text-slate-700 font-medium">Partnering with leading organizations across the Kingdom.</p>
      </div>

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
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="px-10 py-6 bg-white/40 backdrop-blur-md border border-white/40 rounded-2xl flex items-center justify-center"
            >
              <span className="text-2xl font-bold text-blue-900 opacity-80 font-heading">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
