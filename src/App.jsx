import Navbar from './components/Navbar';
 import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* Temporary main content wrapper to test scrolling */}
      <main>
        <section id="home" className="h-screen flex items-center justify-center bg-slate-100">
          <h1 className="text-4xl text-primary font-heading font-bold">Hero Section (Scroll down)</h1>
        </section>
        
        <section id="about" className="h-screen flex items-center justify-center bg-white">
          <h2 className="text-3xl text-secondary font-heading font-bold">About Us Section</h2>
        </section>
        
        <section id="services" className="h-screen flex items-center justify-center bg-slate-100">
          <h2 className="text-3xl text-primary font-heading font-bold">Services Section</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
