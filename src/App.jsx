import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";

export const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div
      className={`${theme === "dark" ? "" : "dark"}
      overflow-x-hidden text-neutral-300 antialiased`}
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        {theme === "dark" ? (
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        ) : (
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-100 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(198,198,250,0.3),rgba(255,255,255,0))]"></div>
        )}
      </div>
      <div className="container mx-auto px-8">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Education />
        <Technologies />
        <Experience />
        <Projects />
        <Services />
        <Contact />
        <Footer />
        <Scroll />
      </div>
    </div>
  );
};

export default App;
