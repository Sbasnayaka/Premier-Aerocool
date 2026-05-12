import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col"
          >
            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl shadow-lg shadow-blue-200">
              🎯
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              At Premier AeroCool Services, we are committed to providing high-quality air conditioning spare parts and reliable services that ensure lasting comfort. By combining expertise, innovation, and customer care, we strive to expand across Saudi Arabia, setting new benchmarks in energy efficiency, sustainability, and customer satisfaction.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-blue-600 rounded-3xl flex flex-col text-white"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-600 text-2xl shadow-lg">
              🚀
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-blue-50 leading-relaxed">
              To become Saudi Arabia's most trusted and innovative provider of air conditioning solutions, delivering sustainable comfort, advanced technologies, and unmatched service across every city in the Kingdom.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
