import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Professionals from './components/Professionals';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Snowflakes from './components/Snowflakes';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Snowflakes />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Professionals />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
