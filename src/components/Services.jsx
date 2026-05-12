import { motion } from 'framer-motion';

const services = [
  {
    title: "AC Installation",
    description: "Professional installation for residential and commercial units with precision cooling.",
    icon: "❄️"
  },
  {
    title: "Repair & Maintenance",
    description: "Expert diagnostics and 24/7 emergency repair services to keep you cool.",
    icon: "🔧"
  },
  {
    title: "Duct Cleaning",
    description: "Advanced cleaning technology to ensure clean airflow and healthy environments.",
    icon: "🌬️"
  },
  {
    title: "Airflow Optimization",
    description: "Engineering solutions to maximize energy efficiency and cooling performance.",
    icon: "📊"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Our Services</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-slate-600">We provide a growing range of Air Conditioning spare parts and professional services.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
