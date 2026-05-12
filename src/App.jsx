import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Professionals from './components/Professionals';
import Clients from './components/Clients';
import Snowflakes from './components/Snowflakes';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Snowflakes />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Professionals />
        <Clients />

        {/* Temporary placeholder for final section */}
        <section id="contact" className="py-24 bg-slate-50 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Contact — Coming Phase 10</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
