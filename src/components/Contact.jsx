import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Contact Us</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 font-medium italic">"For all Air Conditioning spare parts please contact us."</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl" style={{ color: '#0b5699' }}>📍</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Address</h4>
                    <p className="text-slate-600 text-sm">No: 7590, Muhammad Saeed Naset Branch,<br/>Al Nuzhah District, Jeddah, Kingdom of Saudi Arabia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl" style={{ color: '#0b5699' }}>📞</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Phone</h4>
                    <p className="text-slate-600 text-sm font-semibold">+966 56 188 6137</p>
                    <p className="text-slate-600 text-sm font-semibold">+966 54 360 1122</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl" style={{ color: '#0b5699' }}>✉️</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Email</h4>
                    <p className="text-slate-600 text-sm">premieraerocoolservices@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl text-white shadow-xl" style={{ background: '#2596be' }}>
              <h4 className="text-xl font-bold mb-2">Service Hours</h4>
              <p className="text-white opacity-90 text-sm font-medium leading-relaxed">
                Our professionals are available to assist you with any spare parts or repair needs across Jeddah and beyond. Professional support at your fingertips.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 font-heading">Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 font-heading">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="+966" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 font-heading">Service Required</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>AC Repair</option>
                  <option>Maintenance</option>
                  <option>Duct Cleaning</option>
                  <option>Spare Parts Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 font-heading">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Tell us about your needs"></textarea>
              </div>
              <button 
                type="button"
                className="w-full py-4 text-white font-bold rounded-xl transition-all shadow-lg" 
                style={{ background: '#2596be' }}
                onMouseEnter={e => e.target.style.background = '#0b5699'}
                onMouseLeave={e => e.target.style.background = '#2596be'}
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
