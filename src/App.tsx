import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <a
        href="#content"
        className="sr-only z-[60] rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-ink-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-px bg-gradient-to-r from-transparent via-brand-400/70 to-transparent" />
      <Navbar />
      <main id="content">
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
