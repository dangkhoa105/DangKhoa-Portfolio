import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Work from "@/components/work";

export default function App() {
  return (
    <div className="relative z-0 mx-auto">
      {/* Hero */}
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
}
