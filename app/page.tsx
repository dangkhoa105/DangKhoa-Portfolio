import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function App() {
  return (
    <div className="relative z-0 mx-auto">
      {/* Hero */}
      <Navbar />
      <section id="hero-section">
        <Hero />
      </section>
      <section id="about-section">
        <About />
      </section>
    </div>
  );
}
