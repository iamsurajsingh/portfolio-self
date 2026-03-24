import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Awards } from "./components/Awards";
import { Stats } from "./components/Stats";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CursorTrail } from "./components/CursorTrail";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <CursorTrail />
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}