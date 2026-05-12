import logo2 from '../assets/Logo2.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: About */}
          <div className="lg:col-span-1">
            <img src={logo2} alt="Premier Aerocool Footer" className="w-40 h-auto mb-6 brightness-0 invert" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Leading provider of air conditioning spare parts and professional services in Saudi Arabia. We bring the cooling world to your doorstep.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Our Services</a></li>
              <li><a href="#clients" className="hover:text-blue-400 transition-colors">Our Clients</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>AC Installation</li>
              <li>Repair & Maintenance</li>
              <li>Duct Cleaning</li>
              <li>Airflow Optimization</li>
              <li>Annual Maintenance</li>
            </ul>
          </div>

          {/* Col 4: Reach Us */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading">Reach Us</h4>
            <div className="space-y-4 text-slate-400 text-sm">
              <div className="flex items-start gap-3">
                <span>✆</span>
                <p>+966 56 188 6137</p>
              </div>
              <div className="flex items-start gap-3">
                <span>✉</span>
                <p className="break-all">premieraerocoolservices@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <span>𖡡</span>
                <p>Jeddah, Saudi Arabia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>
            © 2026 PREMIER AEROCOOL SERVICES. All rights reserved. | 
            Designed & Developed by <a href="https://www.asseminate.com/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:underline">Asseminate</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
