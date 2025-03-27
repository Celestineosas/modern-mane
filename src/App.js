import "./App.css";
import Header from "./sections/Header";
import Service from "./sections/Service";
import Discover from "./sections/Discover";
import Meet from "./sections/Meet";
import Footer from "./sections/Footer";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Smooth scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true, // Enable smooth scrolling
    });

    // Update Lenis on each frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative">
      <section className="padding=r">
        <Header />
      </section>
      <section>
        <Service />
      </section>
      <section>
        <Discover />
      </section>
      <section>
        <Meet />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default App;